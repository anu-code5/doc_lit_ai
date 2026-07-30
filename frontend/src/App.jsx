import { useState } from "react"; 
import { Toaster } from "react-hot-toast"; 
import Sidebar from "./components/Sidebar"; 
import Chat from "./components/Chat"; 

export default function App() { 
    const [uploadedFile, setUploadedFile] = useState("");

    const shortName =
    uploadedFile.length > 30
        ? uploadedFile.slice(0, 30) + "..."
        : uploadedFile;
        
    return ( 
    <> 
    <Toaster position="top-right" /> 
    <div className="flex h-screen bg-slate-100"> 
        <Sidebar uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} shortName={shortName} /> 
        <Chat uploadedFile={uploadedFile} /> 
    </div> 
    </> 
    ); 
}