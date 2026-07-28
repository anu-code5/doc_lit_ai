import { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";

export default function Chat() {

    const [messages, setMessages] = useState([]);

    return (

        <div className="flex-1 flex flex-col">

            <div className="flex-1 overflow-auto p-8">

                {messages.map((m, i) => (
                    <Message
                        key={i}
                        message={m}
                    />
                ))}

            </div>

            <ChatInput
                setMessages={setMessages}
            />

        </div>

    );

}