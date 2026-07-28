import { useState } from "react";
import api from "../services/api";

export default function ChatInput({ setMessages }) {

    const [question, setQuestion] = useState("");

    const ask = async () => {

        if (!question.trim()) return;

        setMessages(prev => [
            ...prev,
            {
                role: "You",
                text: question
            }
        ]);

        const res = await api.post("/search", {
            question
        });

        setMessages(prev => [
            ...prev,
            {
                role: "AI",
                text: res.data.answer.answer
            }
        ]);

        setQuestion("");

    };

    return (

        <div className="p-6 border-t flex gap-3">

            <input

                className="flex-1 border rounded p-3"

                value={question}

                onChange={(e)=>setQuestion(e.target.value)}

                onKeyDown={(e)=>{
                    if(e.key==="Enter")
                        ask();
                }}

            />

            <button

                onClick={ask}

                className="bg-blue-600 text-white px-6 rounded"

            >

                Send

            </button>

        </div>

    );

}