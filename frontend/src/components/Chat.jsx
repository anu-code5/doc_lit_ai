import { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";

export default function Chat() {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages, loading]);
    useEffect(() => {
        console.log("Chat Mounted");
    }, []);

    return (

        <div className="flex-1 flex flex-col bg-gray-100">

            <div className="bg-white border-b px-5 py-3 shadow-sm">

                <h2 className="text-2xl font-semibold padding-2">

                    AI Document Chat

                </h2>

            </div>

            <div className="flex-1 overflow-y-auto p-6">

                {

                    messages.length === 0 && (

                        <div className="text-center text-gray-500 mt-24">

                            <h2 className="text-3xl font-bold">

                                Welcome!

                            </h2>

                            <p className="mt-4">

                                Upload a PDF and ask anything.

                            </p>

                        </div>

                    )

                }

                {

                    messages.map((m, i) => (

                        <Message
                            key={i}
                            message={m}
                        />

                    ))

                }

                {

                    loading && (

                        <div className="text-gray-500">

                            Thinking...

                        </div>

                    )

                }

                <div ref={bottomRef}></div>

            </div>

            <ChatInput
                setMessages={setMessages}
                setLoading={setLoading}
            />

        </div>

    );

}