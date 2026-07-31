# DocLit AI - Intelligent Document Assistant

<img width="959" height="471" alt="image" src="https://github.com/user-attachments/assets/14d4b161-535a-4a2f-8300-c05a7cfe4288" />

DocLit AI is a Retrieval-Augmented Generation (RAG) application that enables users to upload PDF documents and interact with them through natural language conversations. The application extracts document content, converts it into semantic embeddings, retrieves the most relevant information using vector search, and generates context-aware responses using Google's Gemini API.

---

## Features:

- Upload PDF documents
- Ask questions in natural language
- Generate document summaries
- Semantic search using vector embeddings
- AI-powered responses using Google Gemini
- Source-aware retrieval with page references
- FastAPI backend with React frontend
- Modern chat-based interface

---

## System Architecture

```
                User
                  │
                  ▼
          React Frontend
                  │
                  ▼
          FastAPI Backend
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
   PDF Processing      User Query
        │                   │
        ▼                   ▼
 Intelligent Chunking   Sentence Embedding
        │                   │
        ▼                   ▼
 Sentence Transformer  Semantic Search
        │                   │
        └─────────┬─────────┘
                  ▼
            FAISS Vector DB
                  │
                  ▼
          Relevant Chunks
                  │
                  ▼
          Google Gemini API
                  │
                  ▼
            AI Response
```

---

## Tech Stack

### Frontend

- React.js
- Vite
- Axios
- React Dropzone
- React Markdown
- React Hot Toast

### Backend

- FastAPI
- Python
- PyMuPDF
- Sentence Transformers
- FAISS
- Google Gemini API
- LangChain Text Splitter

---

## Project Structure

```
DocLit-AI
│
├── backend
│   ├── routes
│   ├── services
│   ├── uploads
│   ├── app.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/DocLit-AI.git

cd DocLit-AI
```

---

## Backend Setup

```bash
cd backend

python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
GOOGLE_API_KEY=YOUR_API_KEY
```

Run the server

```bash
uvicorn app:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

## Workflow

1. Upload a PDF.
2. Extract text using PyMuPDF.
3. Split the document into semantic chunks.
4. Generate embeddings using Sentence Transformers.
5. Store embeddings inside FAISS.
6. Convert the user's query into an embedding.
7. Retrieve the most relevant chunks.
8. Send retrieved context to Gemini.
9. Display the AI-generated answer.

---

## Screenshots

### Home Screen

<img width="959" height="471" alt="image" src="https://github.com/user-attachments/assets/14d4b161-535a-4a2f-8300-c05a7cfe4288" />

---

### PDF Upload

<img width="959" height="475" alt="image" src="https://github.com/user-attachments/assets/04a5f31a-bdf6-4706-98fe-714afba1be9f" />

---

### Chat Interface

<img width="959" height="472" alt="image" src="https://github.com/user-attachments/assets/fd376700-93b9-44ec-b425-2d2ebf5d4d6d" />

---

## Example Queries

- Summarize the document.
- Explain the abstract.
- What methodology is proposed?
- List the topics covered.
- Explain the conclusion.
- What datasets were used?
- Compare the proposed model with previous methods.

---

## Future Improvements

- Multi-document chat
- Conversation history
- Streaming AI responses
- PDF page preview
- Clickable source citations
- Authentication
- Cloud deployment
- Hybrid semantic + keyword search
- Persistent vector database
- Support for Word and PowerPoint documents

---

## Key Concepts Demonstrated

- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Vector Embeddings
- Vector Databases (FAISS)
- Prompt Engineering
- Large Language Models
- FastAPI
- React
- REST APIs

---

## License

This project is intended for educational and portfolio purposes.

---

## Author

**Anushka Chaudhary**

LinkedIn: [https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/anushka-chaudhary-3663a7276/)
