import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | Nimara</title>
        <meta name="description" content="Plain-language privacy policy for Nimara (Canada). What we collect, why, where we store it (Canada), how long we keep it, and your choices." />
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
            <h1 className="text-4xl font-bold text-[#202654] mb-6">Privacy at Nimara</h1>
            <p className="text-lg text-[#202654] leading-relaxed max-w-4xl">
              We take privacy seriously. This policy explains what we collect, why we collect it, where we store it, and the choices you have. It applies to our website (nimara.ca) and our web app when you sign in.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">Who we are</h2>
            <p className="text-[#202654] leading-relaxed">
              Nimara Technology Inc. (Canada). You can reach us at{" "}
              <a 
                href="mailto:privacy@nimara.ca" 
                className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                privacy@nimara.ca
              </a>
              . For general questions use{" "}
              <a 
                href="mailto:hello@nimara.ca" 
                className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                hello@nimara.ca
              </a>
              .
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">What we collect (and why)</h2>
            <p className="text-[#202654] leading-relaxed">
              We collect only what we need to run our services and keep good records.
            </p>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#202654]">You provide (to request quotes, book calls, or deliver projects):</h3>
                <p className="text-[#202654] leading-relaxed">
                  name, work email, organization, role, province/territory, goals/outcomes, files and evidence, preferences (e.g., start timing, budget), and messages you send us.
                </p>
                <p className="text-[#202654] leading-relaxed italic">
                  Why: to match you with consultants, run projects with PM oversight, and communicate with you.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#202654]">Automatic data (when you visit our site):</h3>
                <p className="text-[#202654] leading-relaxed">
                  device & browser info, pages viewed, referrer/UTM tags, approximate location (province), cookie IDs, error logs.
                </p>
                <p className="text-[#202654] leading-relaxed italic">
                  Why: to keep the site secure, measure usage, and improve content.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#202654]">From tools we use (examples):</h3>
                <p className="text-[#202654] leading-relaxed">
                  scheduling (for meeting details), email delivery, analytics, and file storage.
                </p>
                <p className="text-[#202654] leading-relaxed italic">
                  Why: to provide the service you asked for.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">Our legal basis (plain language)</h2>
            <p className="text-[#202654] leading-relaxed">
              We use your information with your consent, to provide the service you requested, and to meet legal or audit obligations where applicable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">Where we store data</h2>
            <p className="text-[#202654] leading-relaxed">
              We keep project data and files in Canada. Some service providers may process limited data in other countries (e.g., email or analytics). When that happens, we use providers under contractual safeguards and limit what is shared.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">How long we keep data</h2>
            <ul className="space-y-3 list-none">
              <li className="text-[#202654] leading-relaxed">
                <strong>Project records & evidence:</strong> kept for 7 years to support audits and close-outs.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Routine logs & analytics:</strong> kept for shorter periods.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Marketing emails:</strong> until you unsubscribe.
              </li>
            </ul>
            <p className="text-[#202654] leading-relaxed">
              We delete or de-identify data when it's no longer needed, unless the law requires us to keep it longer.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">Who we share with</h2>
            <p className="text-[#202654] leading-relaxed">
              We do not sell personal information. We share only as needed:
            </p>
            <ul className="space-y-3 list-none">
              <li className="text-[#202654] leading-relaxed">
                <strong>Service providers</strong> (e.g., scheduling, email, analytics, secure file storage).
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Consultants you select for delivery</strong> (only the information required to do the work).
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Funders or partners</strong> when your project requires it and you've agreed.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Law & safety</strong> if required by law or to protect rights and security.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">Cookies & analytics</h2>
            <p className="text-[#202654] leading-relaxed">We use:</p>
            <ul className="space-y-3 list-none">
              <li className="text-[#202654] leading-relaxed">
                <strong>Essential cookies</strong> to run the site and protect against abuse.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Analytics/measurement</strong> to learn what's working.
              </li>
              <li className="text-[#202654] leading-relaxed">
                <strong>Marketing pixels</strong> (e.g., LinkedIn) to understand interest in our pages.
              </li>
            </ul>
            <p className="text-[#202654] leading-relaxed">
              You can manage cookies in your browser at any time.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#202654]">Your choices & rights (PIPEDA)</h2>
            <p className="text-[#202654] leading-relaxed">You can:</p>
            <ul className="space-y-3 list-none">
              <li className="text-[#202654] leading-relaxed">
                Access your personal information and ask for corrections.
              </li>
              <li className="text-[#202654] leading-relaxed">
                Withdraw consent for marketing at any time (unsubscribe link).
              </li>
              <li className="text-[#202654] leading-relaxed">
                Ask us to delete information we don't need or are not required to keep.
              </li>
            </ul>
            <p className="text-[#202654] leading-relaxed">
              To make a request, email{" "}
              <a 
                href="mailto:privacy@nimara.ca" 
                className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                privacy@nimara.ca
              </a>
              . We'll respond within 30 days where possible. You can also contact the Office of the Privacy Commissioner of Canada about a concern.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">Security</h2>
            <p className="text-[#202654] leading-relaxed">
              We use administrative, technical, and organizational safeguards: role-based access, encryption in transit and at rest (where supported), audit trails, and staff/consultant confidentiality agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">Children</h2>
            <p className="text-[#202654] leading-relaxed">
              Our services are for organizations and adults. We don't knowingly collect information from children under 16. If we've received such information, contact us and we'll remove it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">Third-party links & embeds</h2>
            <p className="text-[#202654] leading-relaxed">
              Some pages include embeds (for example, a scheduler). If you can't use an embed, email us and we'll provide another way to complete the task.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#202654]">Changes to this policy</h2>
            <p className="text-[#202654] leading-relaxed">
              We may update this page as our services evolve. We'll change the date below and post a notice if the changes are significant.
            </p>
          </section>

          <section className="space-y-6 bg-[#F7F9FC] p-8 rounded-2xl border border-[#E9ECF4]">
            <h2 className="text-2xl font-semibold text-[#202654]">Contact us</h2>
            <div className="space-y-2">
              <p className="text-[#202654] leading-relaxed">
                Privacy questions or requests:{" "}
                <a 
                  href="mailto:privacy@nimara.ca" 
                  className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
                >
                  privacy@nimara.ca
                </a>
              </p>
              <p className="text-[#202654] leading-relaxed">
                General questions:{" "}
                <a 
                  href="mailto:hello@nimara.ca" 
                  className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
                >
                  hello@nimara.ca
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

export default Privacy;
