from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel
import os
import shutil

from services.pdf_parser import extract_pages
from services.chunker import create_chunks
from services.embedding_service import create_embeddings, model
from services.vector_store import build_vector_store
from services.rag_service import answer_question

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    path = os.path.join(UPLOAD_DIR, file.filename)

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    pages = extract_pages(path)

    docs = create_chunks(pages, file.filename)

    embeddings = create_embeddings(docs)

    build_vector_store(
        embeddings,
        docs
    )

    total_chars = sum(len(page["text"]) for page in pages)

    return {
        "filename": file.filename,
        "pages": len(pages),
        "characters": total_chars,
        "chunks": len(docs),
        "embeddings": len(embeddings),
        "dimension": len(embeddings[0])
    }


class Query(BaseModel):
    question: str


@router.post("/search")
def search_document(query: Query):

    answer = answer_question(query.question)

    return {
        "question": query.question,
        "answer": answer
    }