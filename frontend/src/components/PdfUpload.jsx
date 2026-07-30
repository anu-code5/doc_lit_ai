import { useDropzone } from "react-dropzone";
import api from "../services/api";
import toast from "react-hot-toast";

export default function PdfUpload({ setUploadedFile }) {

    const onDrop = async (acceptedFiles) => {

        const file = acceptedFiles[0];

        if (!file) return;

        const form = new FormData();

        form.append("file", file);

        try {

            const res = await api.post("/upload", form);

            setUploadedFile(file.name);

            toast.success("PDF uploaded successfully!");

            console.log(res.data);

        } catch (err) {

            console.error(err);

            toast.error("Upload failed");

        }

    };

    const { getRootProps, getInputProps } = useDropzone({

        onDrop,

        accept: {
            "application/pdf": [".pdf"]
        },

        multiple: false

    });
    

    return (

        <div
            {...getRootProps()}
            className="border-2 border-dashed border-slate-500 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-800 transition hover:border-blue-500"
        >

            <input {...getInputProps()} />

            <div className="text-5xl mb-3">
                📄
            </div>

            <p className="text-slate-300 font-medium">
                Drag & Drop PDF
            </p>

            <p className="text-sm text-slate-500 mt-2">
                or click to browse
            </p>

        </div>

    );

}