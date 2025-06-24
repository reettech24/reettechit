import React from "react";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-28 text-gray-800 font-sans leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        California Privacy Policy – Reet Technologies
      </h1>
      <p className="text-sm mb-8 text-center">
        Effective Date: <strong>[09/06/2025]</strong>
      </p>

      <p className="mb-6">
        This <strong>PRIVACY NOTICE FOR CALIFORNIA RESIDENTS</strong>{" "}
        supplements the information contained in the Privacy Policy of Reet
        Technologies and applies solely to all visitors, users, and others who
        reside in the State of California ("consumers" or "you"). We adopt this
        notice to comply with the California Consumer Privacy Act of 2018
        ("CCPA") and other California privacy laws.
      </p>

      {/* Section 1 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-3">
          We may collect the following categories of personal information:
        </p>
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-left">Examples</th>
              <th className="border px-4 py-2 text-left">Collected</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "A. Identifiers",
                "Real name, postal address, IP address, email address, or other identifiers",
                "YES",
              ],
              [
                "B. Customer Records Info (Cal. Civ. Code § 1798.80(e))",
                "Name, address, phone number, employment info",
                "YES",
              ],
              [
                "C. Protected Characteristics",
                "Race, gender, disability, etc.",
                "NO",
              ],
              [
                "D. Commercial Information",
                "Products or services purchased",
                "NO",
              ],
              [
                "E. Biometric Information",
                "Fingerprints, facial recognition",
                "NO",
              ],
              [
                "F. Internet/Network Activity",
                "Browsing history, interactions with website",
                "YES",
              ],
              ["G. Geolocation", "Physical location or movements", "NO"],
              ["H. Sensory Data", "Audio, electronic, or visual data", "NO"],
              ["I. Employment Info", "Job history or evaluations", "YES"],
              ["J. Education Info", "Student records", "NO"],
              ["K. Inferences", "Preferences, behavior, aptitudes", "NO"],
            ].map(([category, example, collected]) => (
              <tr key={category}>
                <td className="border px-4 py-2">{category}</td>
                <td className="border px-4 py-2">{example}</td>
                <td className="border px-4 py-2 font-semibold">{collected}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3">We do not sell personal information.</p>
      </section>

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Sources of Information
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Direct interactions (forms, website usage)</li>
          <li>Indirect sources (cookies, analytics tools)</li>
          <li>Clients and third-party partners providing services</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Use of Personal Information
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide requested services</li>
          <li>Communicate with you</li>
          <li>Improve our website and services</li>
          <li>Ensure security and legal compliance</li>
          <li>Conduct analytics and internal research</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Sharing Personal Information
        </h2>
        <p>We may share personal information with:</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>Service providers under contract</li>
          <li>Our affiliates</li>
          <li>
            Law enforcement or regulatory authorities (if required by law)
          </li>
          <li>Authorized third parties (with your consent)</li>
        </ul>
        <p className="mt-3">Categories disclosed in the past 12 months:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>A. Identifiers</li>
          <li>B. Customer Records Info</li>
          <li>F. Internet Activity</li>
          <li>I. Employment Info</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Your Rights Under CCPA
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Know what personal data we collect, use, and share</li>
          <li>Request access to personal data</li>
          <li>Request deletion of your data (with certain exceptions)</li>
          <li>Opt-out of data sharing (if applicable)</li>
          <li>Non-discrimination for exercising your privacy rights</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Exercising Your Rights
        </h2>
        <p>To exercise your CCPA rights, submit a request by:</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>
            Email:{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:enquire@reettechit.com"
            >
              enquire@reettechit.com
            </a>
          </li>
          <li>
            Website Contact Form:{" "}
            <a
              className="text-blue-600 underline"
              href="https://www.reettechit.com/contact"
            >
              https://www.reettechit.com/contact
            </a>
          </li>
        </ul>
        <p className="mt-2">
          You must provide sufficient information to verify your identity and
          describe your request clearly.
        </p>
        <p>We respond within 45 days of receipt (up to 90 days with notice).</p>
      </section>

      {/* Section 7 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Non-Discrimination</h2>
        <p>
          We will not discriminate against you for exercising your CCPA rights.
          We do not:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>Deny services</li>
          <li>Charge different prices</li>
          <li>Offer lower service quality</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Changes to This Policy
        </h2>
        <p>
          We reserve the right to update this notice. Updates will be posted on
          our website.
        </p>
      </section>

      {/* Section 9 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
        <p>
          <strong>Reet Technologies</strong>
        </p>
        <p>
          🌐{" "}
          <a
            className="text-blue-600 underline"
            href="https://www.reettechit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.reettechit.com
          </a>
        </p>
        <p>
          📧 Email:{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:enquire@reettechit.com"
          >
            enquire@reettechit.com
          </a>
        </p>
      </section>
    </div>
  );
}
