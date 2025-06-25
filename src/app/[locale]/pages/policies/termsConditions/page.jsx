import React from "react";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-28 text-gray-800 font-sans leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Terms and Conditions – Reet Technologies
      </h1>
      <p className="text-sm mb-8 text-center">
        Effective Date: <strong>[09/06/2025]</strong>
      </p>

      <p className="mb-6">
        Welcome to Reet Technologies. By accessing and using our website (
        <a
          className="text-blue-600 underline"
          href="https://www.reettechit.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.reettechit.com
        </a>
        ) and services, you agree to comply with and be bound by the following
        Terms and Conditions. Please read them carefully.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By using our website or services, you agree to these Terms and
          Conditions. If you do not agree, please do not use our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Description of Services
        </h2>
        <p>
          Reet Technologies offers a variety of IT services, including software
          development, ERP and CRM solutions, mobile app development, and
          web-based platforms. We reserve the right to modify or discontinue any
          aspect of the services at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Provide accurate and current information during registration or
            while using our services
          </li>
          <li>Maintain confidentiality of login credentials</li>
          <li>Use our platform only for lawful purposes</li>
          <li>Do not attempt to hack, disrupt, or misuse any features</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Intellectual Property Rights
        </h2>
        <p>
          All content, trademarks, logos, code, and visuals on our website are
          the property of Reet Technologies or its licensors. Unauthorized use
          is strictly prohibited and may lead to legal action.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Privacy Policy</h2>
        <p>
          Your use of our platform is also governed by our Privacy Policy, which
          outlines how we collect, use, and protect your data. By accepting
          these terms, you also agree to our Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Limitations of Liability
        </h2>
        <p>Reet Technologies will not be held liable for:</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>
            Any direct, indirect, or incidental damages arising from the use of
            our services
          </li>
          <li>Data loss, service interruptions, or technical issues</li>
          <li>
            Third-party content or website links accessed through our platform
          </li>
        </ul>
        <p className="mt-2">
          Use our services at your own risk. All services are provided “as is”
          and “as available.”
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. External Links and Third-Party Tools
        </h2>
        <p>
          We may include links to third-party websites or tools. Reet
          Technologies is not responsible for the content, practices, or privacy
          policies of these external services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Termination of Access</h2>
        <p>
          We reserve the right to terminate or suspend your access to our
          services at our discretion without notice if you violate any terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Reet Technologies, its
          officers, employees, and affiliates from any claims, liabilities,
          damages, or costs resulting from your misuse of our platform or
          violation of these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          10. Modifications to Terms
        </h2>
        <p>
          We may revise these Terms and Conditions from time to time. Updates
          will be posted on this page. Continued use of the website after any
          such changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          11. Governing Law and Jurisdiction
        </h2>
        <p>
          These Terms are governed by the laws of India. Any disputes will be
          subject to the exclusive jurisdiction of the courts in{" "}
          <strong>[Your City, India]</strong>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms, please
          contact:
        </p>
        <div className="mt-2">
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
        </div>
      </section>
    </div>
  );
}
