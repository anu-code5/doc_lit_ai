def create_chunks(pages, filename, chunk_size=1000, overlap=200):
    docs = []
    chunk_id = 0

    for page in pages:
        text = page["text"]
        start = 0

        while start < len(text):
            end = start + chunk_size

            docs.append({
                "chunk_id": chunk_id,
                "page": page["page"],
                "file": filename,
                "text": text[start:end]
            })

            chunk_id += 1
            start += chunk_size - overlap

    return docs