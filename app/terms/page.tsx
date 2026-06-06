import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | YoBro Marketing Agency",
  description: "Terms and Conditions for YoBro Marketing Agency.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="pt-32 pb-section-padding px-margin-mobile md:px-section-padding max-w-4xl mx-auto min-h-screen">
      <h1 className="font-display text-display-md md:text-display-lg text-crisp-white mb-8">
        Terms &amp; Conditions
      </h1>
      
      <div className="prose prose-invert prose-lg text-on-surface-variant max-w-none">
        <p className="mb-6 text-on-surface-variant">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p className="mb-8">
          These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with YoBro Marketing Agency 
          website and services operated by YoBro Marketing Agency ("us", "we", or "our"). 
          Please read these Terms and Conditions carefully before using our services.
        </p>
        
        <p className="mb-8">
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
          These Terms apply to all visitors, users and others who access or use the Service.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">1. Services</h2>
        <p className="mb-8">
          YoBro Marketing Agency provides digital marketing services, including but not limited to Social Media Management (SMM), 
          Content Creation, Lead Generation, and Reel Editing. The specific details, deliverables, and timelines for these 
          services will be agreed upon in a separate Service Agreement or Proposal.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">2. Accounts and Payment</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Billing:</strong> You must provide accurate and complete billing information. By submitting such payment information, you automatically authorize YoBro Marketing Agency to charge all fees incurred through your account to any such payment instruments.</li>
          <li><strong>Refunds:</strong> Except when required by law, paid subscription fees are non-refundable. Certain refund requests for Subscriptions may be considered by YoBro Marketing Agency on a case-by-case basis and granted at the sole discretion of YoBro Marketing Agency.</li>
        </ul>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">3. Intellectual Property</h2>
        <p className="mb-8">
          The Service and its original content, features, and functionality are and will remain the exclusive property of 
          YoBro Marketing Agency and its licensors. The Service is protected by copyright, trademark, and other laws of both 
          the applicable country and foreign countries. Our trademarks and trade dress may not be used in connection with any 
          product or service without the prior written consent of YoBro Marketing Agency.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">4. Client Responsibilities</h2>
        <p className="mb-8">
          To ensure the success of our marketing campaigns, the Client agrees to provide necessary access to relevant platforms 
          (e.g., social media accounts, website backend) and timely feedback or approvals on deliverables. Delays caused by the 
          Client may affect project timelines and outcomes.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">5. Limitation of Liability</h2>
        <p className="mb-8">
          In no event shall YoBro Marketing Agency, nor its directors, employees, partners, agents, suppliers, or affiliates, 
          be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of 
          profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access 
          or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; 
          and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort 
          (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">6. Changes to Terms</h2>
        <p className="mb-8">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
          we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change 
          will be determined at our sole discretion.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">7. Contact Us</h2>
        <p className="mb-8">
          If you have any questions about these Terms, please contact us at:<br /><br />
          <strong>YoBro Marketing Agency</strong><br />
          Email: <a href="mailto:Yobromarketing3@gmail.com" className="text-primary-fixed hover:underline">Yobromarketing3@gmail.com</a><br />
          WhatsApp: <a href="https://wa.me/918510062139" className="text-primary-fixed hover:underline">+91 85100 62139</a>
        </p>
      </div>
    </main>
  );
}
