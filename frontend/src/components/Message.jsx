import ReactMarkdown from "react-markdown";

export default function Message({ message }) {

    const user = message.role === "You";

    return (

        <div

            className={`flex mb-6 ${
                user
                    ? "justify-end"
                    : "justify-start"
            }`}

        >

            <div

                className={`max-w-2xl rounded-2xl px-4 py-2 shadow

                ${
                    user
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                }`}

            >

                <ReactMarkdown>

                    {message.text}

                </ReactMarkdown>

            </div>

        </div>

    );

}