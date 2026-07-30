import PdfUpload from "./PdfUpload";


export default function Sidebar({
    uploadedFile,
    setUploadedFile,
    shortName
}) {
    return (
    
        <div className="w-80 bg-slate-900 text-white flex flex-col p-2">

            <div className="p-4 border-b border-slate-700">

                <h1 className="text-3xl font-bold">
                    DocLit AI
                </h1>

                <p className="text-slate-400 mt-2">
                    Chat with your documents
                </p>

            </div>

            <div className="p-3">

                <PdfUpload
                    setUploadedFile={setUploadedFile}
                />

            </div>
            

            {uploadedFile && (

                <div className="px-1">

                    <h2 className="font-semibold p-2">
                        Uploaded Document
                    </h2>

                    <div className="bg-slate-800 rounded-lg p-1">

                        📄 {shortName}

                    </div>

                </div>

            )}

        </div>
    );
}