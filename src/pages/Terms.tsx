import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service — Projects, Pricing & PM Oversight | Nimara</title>
        <meta name="description" content="How quotes, projects, PM oversight, data residency, limits of liability, and cancellations work. Net-15 payment terms. Canada-based project storage." />
        
        <link rel="canonical" href="https://nimara.ca/terms" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Terms of Service — Projects, Pricing & PM Oversight" />
        <meta property="og:description" content="How quotes, projects, PM oversight, data residency, limits of liability, and cancellations work. Net-15 payment terms. Canada-based project storage." />
        <meta property="og:url" content="https://nimara.ca/terms" />
        <meta property="og:image" content="https://nimara.ca/og-image.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service — Projects, Pricing & PM Oversight" />
        <meta name="twitter:description" content="How quotes, projects, PM oversight, data residency, limits of liability, and cancellations work. Net-15 payment terms. Canada-based project storage." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.jpg" />
      </Helmet>
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#202654] focus:ring-2 focus:ring-[#6945D8] focus:rounded-xl"
      >
        Skip to content
      </a>
      
      <Header />
      
      <main id="main-content" className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-[1280px]">
        <article className="space-y-12">
          <header>
            <h1 className="text-4xl font-bold text-[#202654] mb-6">Terms of Service — Nimara</h1>
            <p className="text-lg text-[#202654] leading-relaxed max-w-4xl">
              These terms explain how Nimara Technology Inc. ("Nimara", "we", "us") provides our website and services. By using nimara.ca, requesting up to 3 free quotes, joining the packages waitlist, applying as a consultant, or using our web app when sign-in opens, you agree to these terms.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">1) Who we are</h2>
            <p className="text-[#202654] leading-relaxed">
              Nimara Technology Inc., Canada. Contact:{" "}
              <a 
                href="mailto:hello@nimara.ca" 
                className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                hello@nimara.ca
              </a>
              . Privacy questions:{" "}
              <a 
                href="mailto:privacy@nimara.ca" 
                className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                privacy@nimara.ca
              </a>
              .
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">2) Definitions (plain English)</h2>
            <ul className="space-y-3 list-none">
              <li className="text-[#202654] leading-relaxed">
                <strong>Client:</strong> a nonprofit, charity, funder, or organization using our services.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Consultant:</strong> a vetted provider who delivers work through Nimara.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Platform:</strong> our website and web app.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Project:</strong> work delivered by a consultant team with Nimara PM oversight.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Brief:</strong> the one-page scope and "what done looks like".
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">3) Services we provide</h2>
            <ul className="space-y-3 list-none">
              <li className="text-[#202654] leading-relaxed">
                <strong>Up to 3 free quotes (single category):</strong> we turn your outcome into a brief and request up to three comparable proposals from vetted Canadian experts.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Packages (multi-area):</strong> fixed-scope options (waitlist until launch).
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Funder pilots:</strong> digital & data oversight for a portfolio.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>PM oversight:</strong> a Nimara PM coordinates pace, checklists, and acceptance on every project.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Web app:</strong> project workspace, checklists, and evidence locker. Portal opens Nov 5, 2025.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">4) Your responsibilities</h2>
            <ul className="space-y-3 list-none">
              <li className="text-[#202654] leading-relaxed">
                Provide accurate information, timely access, and decisions.
              </li>
              <li className="text-[#202654] leading-relaxed">
                Use the Platform lawfully; do not disrupt, scrape, or reverse-engineer it.
              </li>
              <li className="text-[#202654] leading-relaxed">
                Keep logins safe; tell us quickly if there's a security concern.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">5) Quotes, selection, and contracts</h2>
            <p className="text-[#202654] leading-relaxed">
              Quotes are non-binding until you select a provider and we confirm scope, acceptance, and schedule.
            </p>
            <p className="text-[#202654] leading-relaxed">
              Consultants act as independent contractors. Nimara may collect payment from you and pay consultants on your behalf as part of delivery.
            </p>
            <p className="text-[#202654] leading-relaxed">
              We may decline or withdraw a request that is unsafe, unlawful, or a poor fit.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">6) SLA credit for quotes (plain rules)</h2>
            <p className="text-[#202654] leading-relaxed">
              If we deliver fewer than 2 proposals within 3 days after we finalize your brief, you receive a $500 credit toward your first package or project.
            </p>
            <ul className="space-y-3 list-none">
              <li className="text-[#202654] leading-relaxed">
                One credit per organization in any 12-month period.
              </li>
              <li className="text-[#202654] leading-relaxed">
                Not cash, non-transferable, expires 6 months after issue.
              </li>
              <li className="text-[#202654] leading-relaxed">
                Not available where prohibited or for requests that become ineligible (e.g., scope changes, non-response, specialized needs with no available providers).
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">7) Pricing, invoices, and taxes</h2>
            <p className="text-[#202654] leading-relaxed">
              Pricing for projects and packages is shown in proposals and agreements.
            </p>
            <p className="text-[#202654] leading-relaxed">
              Unless stated, amounts are in CAD and before tax.
            </p>
            <p className="text-[#202654] leading-relaxed">
              Payment terms are stated in your agreement. Late amounts may incur reasonable interest or collection costs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">8) Cancellations and changes</h2>
            <p className="text-[#202654] leading-relaxed">
              If you cancel before work starts, you pay only confirmed non-recoverable costs.
            </p>
            <p className="text-[#202654] leading-relaxed">
              After kickoff, we bill for work performed to date and any agreed minimums.
            </p>
            <p className="text-[#202654] leading-relaxed">
              Changes to scope or timeline require written confirmation (email is fine).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">9) Deliverables, ownership, and templates</h2>
            <p className="text-[#202654] leading-relaxed">
              When you pay in full, project deliverables (reports, dashboards, configured assets) are yours.
            </p>
            <p className="text-[#202654] leading-relaxed">
              Nimara's platform, checklists, and templates remain ours; we grant you a non-exclusive license to use them for your internal work.
            </p>
            <p className="text-[#202654] leading-relaxed">
              Consultants grant the rights needed to deliver and hand off the project.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">10) Confidentiality</h2>
            <p className="text-[#202654] leading-relaxed">
              We each keep the other's non-public information confidential and use it only for the project, except where disclosure is required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">11) Privacy & data residency</h2>
            <p className="text-[#202654] leading-relaxed">
              We store project data in Canada. Some service providers may process limited data elsewhere (e.g., email or analytics) — see our{" "}
              <a 
                href="/privacy" 
                className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                Privacy Policy
              </a>
              {" "}for details.
            </p>
            <p className="text-[#202654] leading-relaxed">
              We keep project records for 7 years to support audits.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">12) Acceptable use (don'ts)</h2>
            <p className="text-[#202654] leading-relaxed">
              No illegal content, malware, security testing without permission, automated scraping, spam, or use that harms others or the Platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">13) Third-party services and embeds</h2>
            <p className="text-[#202654] leading-relaxed">
              We may use or embed third-party tools (e.g., scheduling). Their terms and privacy policies apply to their parts of the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">14) Beta, pilots, and availability</h2>
            <p className="text-[#202654] leading-relaxed">
              Features labeled beta, pilot, or preview may change or be discontinued. We aim for reliable service but do not guarantee uninterrupted uptime. Scheduled maintenance and internet issues may affect availability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">15) No legal or financial advice</h2>
            <p className="text-[#202654] leading-relaxed">
              We provide delivery standards and practical guidance, not legal, tax, or financial advice. For those matters, please consult a qualified professional.
            </p>
            <p className="text-[#202654] leading-relaxed">
              Compliance support means organizing documentation and aligning deliverables with common Canadian funder requirements. Nimara doesn't determine eligibility, issue legal opinions, or guarantee funding or audit outcomes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">16) Disclaimer of warranties</h2>
            <p className="text-[#202654] leading-relaxed">
              Services are provided "as is" and "as available." To the extent allowed by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">17) Limitation of liability</h2>
            <p className="text-[#202654] leading-relaxed">
              To the extent allowed by law, Nimara's total liability for any claim is limited to the amount you paid to Nimara for the service in the 3 months before the claim (or $1,000 CAD, whichever is greater). We are not liable for indirect, incidental, special, or consequential damages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">18) Indemnity</h2>
            <p className="text-[#202654] leading-relaxed">
              You agree to defend and indemnify Nimara against third-party claims arising from your unlawful use of the services or materials you provide, except to the extent we caused the issue.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">19) Governing law & disputes</h2>
            <p className="text-[#202654] leading-relaxed">
              These terms are governed by the laws of Alberta, Canada, without regard to conflicts rules. Disputes will be brought in the courts of Alberta, and the parties submit to that jurisdiction after a 30-day good-faith negotiation period.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">20) Changes to these terms</h2>
            <p className="text-[#202654] leading-relaxed">
              We may update these terms as our services evolve. We'll change the date below and, for significant changes, post a notice on the site. If you continue to use the services after the changes take effect, you agree to the new terms.
            </p>
          </section>

          <section className="space-y-6 bg-[#F7F9FC] p-8 rounded-2xl border border-[#E9ECF4]">
            <h2 className="text-2xl font-semibold text-[#202654]">21) Contact</h2>
            <div className="space-y-2">
              <p className="text-[#202654] leading-relaxed">
                Questions about these terms:{" "}
                <a 
                  href="mailto:hello@nimara.ca" 
                  className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
                >
                  hello@nimara.ca
                </a>
              </p>
              <p className="text-[#202654] leading-relaxed">
                Privacy questions:{" "}
                <a 
                  href="mailto:privacy@nimara.ca" 
                  className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
                >
                  privacy@nimara.ca
                </a>
              </p>
            </div>
            <p className="text-sm text-[#202654] font-mono">
              Last updated: October 2025
            </p>
          </section>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
