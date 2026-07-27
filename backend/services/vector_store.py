import faiss
import numpy as np

index = None
documents = []


def build_vector_store(embeddings, docs):
    global index, documents

    embeddings = np.array(embeddings).astype("float32")

    dimension = embeddings.shape[1]

    index = faiss.IndexFlatL2(dimension)

    index.add(embeddings)

    documents = docs


def search(query_embedding, k=3):
    distances, indices = index.search(
        np.array([query_embedding]).astype("float32"),
        k
    )

    return [documents[i] for i in indices[0]]