import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | YoBro Marketing Agency",
  description: "Privacy Policy for YoBro Marketing Agency.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-section-padding px-margin-mobile md:px-section-padding max-w-4xl mx-auto min-h-screen">
      <h1 className="font-display text-display-md md:text-display-lg text-crisp-white mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose prose-invert prose-lg text-on-surface-variant max-w-none">
        <p className="mb-6 text-on-surface-variant">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p className="mb-8">
          At YoBro Marketing Agency, we value your privacy and are committed to protecting your personal data. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
          our website or use our services. Please read this Privacy Policy carefully.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect information about you in a variety of ways. The information we may collect includes:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when registering with the Site or when choosing to participate in various activities related to the Site.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          <li><strong>Cookies:</strong> We may use cookies and similar tracking technologies to track the activity on our Site and hold certain information.</li>
        </ul>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">2. Use of Your Information</h2>
        <p className="mb-6">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Administer promotions, and contact you regarding your account or order.</li>
          <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
          <li>Email you regarding your account or order.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
          <li>Increase the efficiency and operation of the Site.</li>
        </ul>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">3. Disclosure of Your Information</h2>
        <p className="mb-6">
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
        </ul>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">4. Tracking Technologies</h2>
        <h3 className="text-xl text-on-surface mt-6 mb-3 font-semibold">Cookies and Web Beacons</h3>
        <p className="mb-8">
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">5. Security of Your Information</h2>
        <p className="mb-8">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="font-headline-md text-headline-md text-crisp-white mt-12 mb-4">6. Contact Us</h2>
        <p className="mb-8">
          If you have questions or comments about this Privacy Policy, please contact us at:<br /><br />
          <strong>YoBro Marketing Agency</strong><br />
          Email: <a href="mailto:Yobromarketing3@gmail.com" className="text-primary-fixed hover:underline">Yobromarketing3@gmail.com</a><br />
          WhatsApp: <a href="https://wa.me/918510062139" className="text-primary-fixed hover:underline">+91 85100 62139</a>
        </p>
      </div>
    </main>
  );
}
