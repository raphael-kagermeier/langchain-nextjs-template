import { ChatWindow } from "@/components/ChatWindow";
import Link from "next/link";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-slate-800 w-full max-h-[85%]">
      <h1 className="text-3xl md:text-4xl mb-4">
        Google Search Algorithm Research Assistant
      </h1>
      <p className="text-lg">
        Aks questions about Google's search algorithm and how it works to get
        answers based on the leaked{" "}
        <Link
          className="text-slate-200 underline"
          target="blank"
          href={
            "https://hexdocs.pm/google_api_content_warehouse/0.4.0/api-reference.html"
          }
        >
          api documentation
        </Link>
        .
      </p>
      <ul className="space-y-1 list-decimal ml-4"></ul>

      <div>
        <p className="text-lg mt-4">
          <strong>Example Questions:</strong>
        </p>
        <ul className="space-y-1 list-disc ml-4">
          <li>
            How does Google ensure that the answers it provides are relevant and
            accurate for a wide range of user queries?
          </li>
          <li>
            In what ways does Google handle complex questions that don't have
            straightforward answers?
          </li>
          <li>
            How does Google use past user queries to improve the accuracy of its
            search results?
          </li>
          <li>
            What role does natural language understanding play in Google's
            ability to interpret and respond to user questions?
          </li>
          <li>
            How does Google balance the need for personalized search results
            with user privacy concerns?
          </li>
        </ul>
      </div>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      placeholder={
        'How does Google balance the need for personalized search results with user privacy concerns?'
      }
      emoji="🤖"
      titleText="Google Search Algorithm Research Assistant"
    ></ChatWindow>
  );
}
