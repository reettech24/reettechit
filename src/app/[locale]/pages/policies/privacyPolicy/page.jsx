import React from "react";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-28 text-gray-800 font-sans leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Privacy Policy – Reet Technologies
      </h1>
      <p className="text-sm mb-8 text-center">
        Last Updated: <strong>[09/06/2025]</strong>
      </p>

      <p className="mb-6">
        Thank you for trusting Reet Technologies with your digital and IT
        service needs. Your privacy and data protection are of the highest
        importance to us. This policy outlines how we collect, use, and
        safeguard your information when you engage with our websites, services,
        software applications, or any platforms provided by us (collectively,
        the "Services").
      </p>

      {/* Section 1 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Transparency: Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Voluntary Information:</strong> When you register on our
            site, sign up for newsletters, request a demo, or contact us.
            Personal details such as your name, email, company, phone number,
            job title, and project information.
          </li>
          <li>
            <strong>Technical Information:</strong> Device and browser type,
            operating system, IP address, and usage data. Cookies, beacons, and
            similar technologies for analytics and personalization.
          </li>
          <li>
            <strong>Clickstream Data:</strong> Pages viewed, time spent,
            referring URLs, search terms, and other browsing behavior.
          </li>
          <li>
            <strong>Location Data:</strong> Based on IP address or device GPS if
            enabled. Used for geo-targeted content or analytics.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Deliver, improve, and personalize our Services</li>
          <li>Respond to inquiries or support tickets</li>
          <li>Customize marketing communications with opt-in consent</li>
          <li>
            Enable functionality such as live chat, CRM integration, and secure
            client portals
          </li>
          <li>Generate analytics and usage reports</li>
          <li>Maintain security, detect fraud, and meet legal compliance</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Data Collection Technologies
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Cookies:</strong> For login sessions, remembering
            preferences, and behavioral targeting
          </li>
          <li>
            <strong>Web Beacons & Pixel Tags:</strong> Embedded in emails or
            pages to track activity
          </li>
          <li>
            <strong>Local Storage:</strong> (HTML5, Flash) To retain user
            settings and performance data
          </li>
        </ul>
        <p className="mt-2">
          Most browsers allow you to disable cookies; however, doing so may
          impact service performance.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Sharing of Information
        </h2>
        <p>
          We do <strong>not sell</strong> your personal data. We may share
          information with:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>
            Third-party service providers under binding confidentiality (e.g.,
            hosting, CRM, analytics)
          </li>
          <li>
            Legal authorities when required to comply with court orders,
            subpoenas, or other legal processes
          </li>
          <li>
            Business partners under co-branded agreements (with separate privacy
            terms)
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
        <p>We retain your information only for as long as required to:</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>Deliver services</li>
          <li>Meet legal obligations</li>
          <li>Support audits or resolve disputes</li>
        </ul>
        <p className="mt-2">
          After three (3) years of inactivity, we securely delete or anonymize
          user data.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>SSL encryption</li>
          <li>Access control and authentication</li>
          <li>Secure hosting and database firewalls</li>
        </ul>
        <p className="mt-2">
          While we strive for full protection, no method of data transmission or
          storage is completely secure.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Privacy Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>Access or correct your personal data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent for marketing or profiling</li>
          <li>Object to processing based on legitimate interests</li>
          <li>Export data (data portability)</li>
        </ul>
        <p className="mt-2">
          To exercise your rights, email us at:{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:info@reettechit.com"
          >
            info@reettechit.com
          </a>
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Children’s Privacy</h2>
        <p>
          Our Services are not intended for individuals under 18. We do not
          knowingly collect personal data from minors. If such data is
          discovered, it will be deleted promptly.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Global Compliance</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>GDPR (EU):</strong> Consent, contract performance, legal
            obligation, legitimate interest. Rights: portability, erasure,
            objection, rectification
          </li>
          <li>
            <strong>LGPD (Brazil):</strong> Data processed only with consent or
            legitimate interest. Rights: revoke, access, correct, anonymize,
            delete
          </li>
          <li>
            <strong>CCPA / CPRA (California):</strong> Right to know, delete,
            opt-out of personal data sale (we do not sell data), and
            non-discrimination. Request disclosure at:{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:info@reettechit.com"
            >
              info@reettechit.com
            </a>
          </li>
        </ul>
      </section>

      {/* Section 10 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Do Not Track Signals</h2>
        <p>
          We do not currently respond to browser DNT signals due to lack of a
          consistent industry standard.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Changes to Policy</h2>
        <p>
          We may revise this privacy policy periodically. Any changes will be
          posted on this page with an updated effective date.
        </p>
      </section>

      {/* Section 12 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
        <p>
          <strong>Reet Technologies</strong>
        </p>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:info@reettechit.com"
            className="text-blue-600 underline"
          >
            info@reettechit.com
          </a>
        </p>
        <p>
          🌐 Website:{" "}
          <a
            href="https://www.reettechit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.reettechit.com
          </a>
        </p>
      </section>
    </div>
  );
}
