import { useState } from "react";
import api from "../services/api";

export default function ChatInput({

    setMessages,

    setLoading

}) {

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

        setLoading(true);

        try {
            const res = await api.post("/search", {
                question
            });

            console.log("API Response:", JSON.stringify(res.data, null, 2));

            setMessages(prev => [
                ...prev,
                {
                    role: "AI",
                    text: res.data.answer.answer
                }
            ]);

        } catch (err) {

            console.error("Axios Error:", err);

            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
            }

        } finally {

            setLoading(false);

        }

        setQuestion("");

    };

    return (

        <div className="bg-white border-t p-4 flex gap-4">

            <input

                className="flex-1 border rounded-xl px-4 py-3 outline-none"

                placeholder="Ask anything about the document..."

                value={question}

                onChange={(e)=>setQuestion(e.target.value)}

                onKeyDown={(e)=>{

                    if(e.key==="Enter")

                        ask();

                }}

            />

            <button

                className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl"

                onClick={ask}

            >

                Send

            </button>

        </div>

    );

}