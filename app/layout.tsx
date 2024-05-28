import { ApiKeyModal } from "@/components/api-key-modal";
import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Google Search Algorithm Research Assistant</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Explore and understand the intricacies of Google's search algorithm. Ask questions and get answers based on the leaked API documentation."
        />
        <meta property="og:title" content="Google Search Algorithm Research Assistant" />
        <meta
          property="og:description"
          content="Explore and understand the intricacies of Google's search algorithm. Ask questions and get answers based on the leaked API documentation."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Search Algorithm Research Assistant" />
        <meta
          name="twitter:description"
          content="Explore and understand the intricacies of Google's search algorithm. Ask questions and get answers based on the leaked API documentation."
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          {children}
          <ApiKeyModal />
        </div>
      </body>
    </html>
  );
}
