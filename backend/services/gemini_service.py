import os

from google import genai
from google.genai.errors import ServerError
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GOOGLE_API_KEY")
)


def ask_gemini(context, question):

    prompt = f"""


You are an AI assistant helping users understand uploaded PDF documents.

Use ONLY the provided context.

If the user asks for a summary, explanation, overview, analysis, or description of the document, synthesize the information from all retrieved passages.

Only reply

"I couldn't find this information in the uploaded document."

when the retrieved context truly contains no relevant information.

Context:
{context}

Question:
{question}
"""

    try:
        response = client.models.generate_content(
            model="gemini-flash-lite-latest",
            contents=prompt,
        )

        return response.text

    except ServerError:
        return (
            "Gemini is currently busy. Please try again in a few moments."
        )

    # except Exception as e:
    #     return f"Error: {e}"