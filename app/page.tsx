export default function Home() {
  const faqs = [
    {
      q: "What languages does CodeGuard support?",
      a: "CodeGuard supports Python, JavaScript, Java, C/C++, and more. AST-based parsing ensures accurate detection regardless of variable renaming or formatting changes."
    },
    {
      q: "How does the plagiarism detection work?",
      a: "We use Abstract Syntax Tree (AST) parsing combined with similarity algorithms to compare submissions against online repositories, previous student work, and known solution sets."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. You can cancel at any time from your billing portal. Your access continues until the end of the current billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For CS Professors &amp; Coding Bootcamps
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Detect Code Plagiarism<br />
          <span className="text-[#58a6ff]">Before It Becomes a Problem</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Compare student code submissions against GitHub repositories, previous assignments, and known solutions using AST parsing and similarity algorithms.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Detecting Plagiarism — $16/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["AST Parsing", "Language-aware analysis"],
            ["Multi-Source", "GitHub, past submissions"],
            ["Instant Reports", "Detailed similarity scores"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited submissions",
              "AST-based similarity detection",
              "GitHub & repository scanning",
              "Historical submission comparison",
              "Detailed plagiarism reports",
              "CSV export",
              "Email alerts"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-xs">
        © {new Date().getFullYear()} CodeGuard. All rights reserved.
      </footer>
    </main>
  );
}
