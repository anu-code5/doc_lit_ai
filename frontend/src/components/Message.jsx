import ReactMarkdown from "react-markdown";

export default function Message({ message }) {

    return (

        <div className="mb-6">

            <div className="font-bold mb-2">

                {message.role}

            </div>

            <div className="bg-gray-100 p-4 rounded">

                <ReactMarkdown>

                    {message.text}

                </ReactMarkdown>

            </div>

        </div>

    );

}