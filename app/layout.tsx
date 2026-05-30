import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeGuard – Student Code Plagiarism Detector",
  description: "Detect code plagiarism in programming assignments. Compare student submissions against online repositories, previous submissions, and known solutions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c1f7b1f8-c914-42e2-a158-227e730d6ead"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
