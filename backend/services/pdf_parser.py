import fitz

def extract_pages(pdf_path):

    doc = fitz.open(pdf_path)

    pages=[]

    for i,page in enumerate(doc):

        pages.append({
            "page":i+1,
            "text":page.get_text()
        })

    return pages