import PdfUpload from "./PdfUpload";

export default function Sidebar() {
    return (
        <div className="w-80 bg-slate-900 text-white p-6">

            <h1 className="text-3xl font-bold">
                DocLitAI
            </h1>

            <p className="text-gray-400 mt-2">
                AI Document Assistant
            </p>

            <PdfUpload />

        </div>
    );
}