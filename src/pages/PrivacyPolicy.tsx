import React from 'react';


const PrivacyPolicy: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">Last updated: April 26, 2026</p>
    <p className="mb-4">
      This Privacy Policy explains how Germany Help Center ("we", "us", or "our") collects, uses, and protects your personal data in accordance with the General Data Protection Regulation (GDPR) and German data protection laws. We are committed to transparency, user rights, and data security.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">1. Data Controller</h2>
    <p className="mb-4">
      Germany Help Center<br />
      103, Pramukh Daradhan Apartment, Patidar Char Rasta, Near Patidar Bhavan, Mahidharpura, Surat - 395003<br />
      Email: contact@germanyhelpcenter.com
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">2. What Data We Collect</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Contact details (name, email, phone number)</li>
      <li>Information you provide via forms or email</li>
      <li>Usage data (IP address, browser type, pages visited, etc.)</li>
      <li>Other information you voluntarily provide</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">3. How and Why We Use Your Data</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To respond to your inquiries and provide services (Art. 6(1)(b) GDPR)</li>
      <li>To improve our website and services (Art. 6(1)(f) GDPR)</li>
      <li>To comply with legal obligations (Art. 6(1)(c) GDPR)</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">4. Legal Basis for Processing</h2>
    <p className="mb-4">
      We process your personal data only when we have a legal basis to do so, as required by GDPR. This includes your consent, the necessity to fulfill a contract, compliance with legal obligations, or our legitimate interests.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Sharing and Transfers</h2>
    <p className="mb-4">
      We do not sell or rent your personal data. We may share your data with trusted service providers who assist us in operating our website, or if required by law. If your data is transferred outside the European Economic Area (EEA), we ensure adequate protection as required by GDPR.
    </p>

    {/*
      Required the moment GA_MEASUREMENT_ID in src/lib/analytics.ts is set. Written
      to match what the code actually does: opt-in only, nothing loaded before
      consent, and the consent choice stored in localStorage rather than a cookie.
      If the analytics implementation changes, change this section with it.
    */}
    <h2 className="text-xl font-semibold mt-8 mb-2">6. Cookies and Website Analytics</h2>
    <p className="mb-4">
      This website sets no advertising or tracking cookies, and no analytics service runs unless you
      explicitly agree to it. We use no cookie walls and no “legitimate interest” tracking.
    </p>
    <p className="mb-4">
      <strong>Strictly necessary storage.</strong> We store two small preferences in your browser’s local
      storage: your light/dark theme choice, and your answer to the analytics request below. Both stay on
      your device, are never transmitted to us, and exist only so the site doesn’t ask you again. No consent
      is required for these under § 25(2) TTDSG.
    </p>
    <p className="mb-4">
      <strong>Google Analytics 4 — only with your consent.</strong> If you select “Allow analytics”, we load
      Google Analytics 4, provided by Google Ireland Limited, to understand which parts of this page are
      useful. The legal basis is your consent (Art. 6(1)(a) GDPR and § 25(1) TTDSG), which you may withdraw
      at any time by clearing this site’s data in your browser. Until you consent, no Google script is
      requested and no data is sent to Google. If you select “Decline”, nothing loads and the site works
      exactly the same.
    </p>
    <p className="mb-4">
      Where analytics is enabled, we transmit truncated (anonymised) IP addresses, pages viewed, approximate
      region, device and browser type, and which buttons were clicked. We do not send your name, email
      address, phone number or any enquiry content to Google, and we do not use Google Signals, advertising
      features or cross-device tracking. Data may be processed on Google servers outside the EEA on the
      basis of the EU–US Data Privacy Framework and the EU Standard Contractual Clauses. Analytics data is
      retained for a maximum of 14 months.
    </p>
    <p className="mb-4">
      You can also prevent Google Analytics entirely using Google’s browser add-on:{" "}
      <a
        href="https://tools.google.com/dlpage/gaoptout"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        tools.google.com/dlpage/gaoptout
      </a>
      .
    </p>
    <p className="mb-4">
      <strong>WhatsApp, phone and email.</strong> Our calls-to-action open WhatsApp, your phone dialler or
      your email client. When you choose to message us, that communication is processed by the relevant
      provider (for WhatsApp, Meta Platforms Ireland Limited) under their own privacy terms. We only receive
      what you send us.
    </p>
    <p className="mb-4">
      <strong>Fonts.</strong> This site loads typefaces from Google Fonts, which means your IP address is
      transmitted to Google when the page loads. See section 5 on transfers.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">7. Data Retention</h2>
    <p className="mb-4">
      We retain your personal data only as long as necessary for the purposes stated in this policy or as required by law.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">8. Your Rights Under GDPR</h2>
    <ul className="list-disc ml-6 mb-4">
      <li><strong>Right to Access</strong>: You can request information about the personal data we hold about you (Art. 15 GDPR).</li>
      <li><strong>Right to Rectification</strong>: You can request correction of inaccurate or incomplete data (Art. 16 GDPR).</li>
      <li><strong>Right to Erasure</strong>: You can request deletion of your data (“right to be forgotten”) (Art. 17 GDPR).</li>
      <li><strong>Right to Restrict Processing</strong>: You can request restriction of processing under certain conditions (Art. 18 GDPR).</li>
      <li><strong>Right to Data Portability</strong>: You can request your data in a structured, commonly used format (Art. 20 GDPR).</li>
      <li><strong>Right to Object</strong>: You can object to processing of your data (Art. 21 GDPR).</li>
      <li><strong>Right to Lodge a Complaint</strong>: You can lodge a complaint with a supervisory authority if you believe your rights are violated.</li>
    </ul>
    <p className="mb-4">
      To exercise any of these rights, please contact us at contact@germanyhelpcenter.com. We will respond promptly and transparently, as required by GDPR.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">9. Data Security</h2>
    <p className="mb-4">
      We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">10. Transparency and Communication</h2>
    <p className="mb-4">
      We are committed to providing information about our data processing in a concise, transparent, intelligible, and easily accessible form, using clear and plain language (Art. 12 GDPR).
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">11. Changes to This Policy</h2>
    <p className="mb-4">
      We may update this Privacy Policy from time to time. The latest version will always be posted on this page.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">12. Contact</h2>
    <p>
      If you have any questions about this Privacy Policy or your data, please contact us at contact@germanyhelpcenter.com.
    </p>
  </div>
);

export default PrivacyPolicy;
