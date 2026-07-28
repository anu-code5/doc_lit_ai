import api from "../services/api";

export default function PdfUpload() {

    const upload = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const form = new FormData();

        form.append("file", file);

        const res = await api.post("/upload", form);

        alert("Uploaded Successfully!");

        console.log(res.data);

    };

    return (

        <div className="mt-8">

            <input
                type="file"
                accept=".pdf"
                onChange={upload}
            />

        </div>

    );

}