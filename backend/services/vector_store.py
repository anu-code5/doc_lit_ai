import faiss
import numpy as np

index = None
documents = []

def build_vector_store(embeddings, docs):
    global index, documents

    embeddings = np.array(embeddings, dtype=np.float32)

    if len(embeddings) == 0:
        raise ValueError("No embeddings found.")

    dimension = embeddings.shape[1]

    index = faiss.IndexFlatL2(dimension)
    index.add(embeddings)

    documents = docs

    print(f"Vector store built successfully with {index.ntotal} vectors.")

def search(query_embedding, k=3):
    global index, documents

    if index is None:
        raise Exception("Vector store not initialized. Upload a document first.")

    query_embedding = np.array([query_embedding], dtype=np.float32)

    k = min(k, index.ntotal)

    distances, indices = index.search(query_embedding, k)

    results = []
    for i in indices[0]:
        if i != -1:
            results.append(documents[i])

    return results