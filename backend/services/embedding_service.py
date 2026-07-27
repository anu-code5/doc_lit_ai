from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")


def create_embeddings(docs):
    texts = [doc["text"] for doc in docs]
    return model.encode(texts)