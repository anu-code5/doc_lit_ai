from services.embedding_service import model
from services.vector_store import search
from services.gemini_service import ask_gemini


def answer_question(question):
    embedding = model.encode(question)

    docs = search(embedding)

    context = "\n\n".join(doc["text"] for doc in docs)

    answer = ask_gemini(context, question)

    sources = [
        {
            "file": doc["file"],
            "page": doc["page"]
        }
        for doc in docs
    ]

    return {
        "answer": answer,
        "sources": sources
    }