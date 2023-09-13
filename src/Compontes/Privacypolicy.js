import React from "react";
import Header from "./Header";
import "./Aboutus.css";
import Footer from "./Footer";

function Privacypolicy() {
  return (
    <>
      <Header></Header>
      <>
        <div className="Aboutus-12">
          <div className="headingabout">
            <h1>Privacy policy</h1>
          </div>
          <div className="aboutus-123">
            <div className="Containerabout123">
              <h2>Terms of use</h2>
              <p>
              Your privacy is important to [Your Company Name] ("us", "we", or "our"). This Privacy Policy outlines 
              how your personal information is collected, used, and shared when you use our website [URL] (the "Service").
              </p>
              <h1>Information We Collect</h1>
              <p>We collect personal information that you provide to us directly, such as your name, email address, mailing address, and payment information when you make a purchase or sign up for an account. We may also collect information about your use of the Service,
                 such as log data (including your IP address), device information, and browsing activity.</p>
                 <h1>How We Use Your Information</h1>
                 <p>We use the information we collect to provide and improve our services, process transactions, communicate with you, and ensure compliance with our legal obligations. We may use your email address to send you updates about our products, promotions, and other relevant information. If you wish to opt-out of these communications, you can do so
                     by following the unsubscribe instructions in the email.</p>
                     <h1>Sharing Your Information</h1>
                     <p>We do not sell, rent, or trade your personal information
                         to third parties for marketing purposes. We may share your
                          information with trusted service providers who help us operate
                           our website and provide services to you (e.g., payment processors, analytics tools), 
                           but only to the extent necessary to perform these services.</p>
                           <h1>Cookies and Tracking Technologies</h1>
                           <p>We use cookies and similar tracking technologies to improve your experience on our website and gather information about your interactions. You can adjust your browser settings to refuse cookies, but this
                             may limit certain features of the Service.</p>
                             <h1>Data Security</h1>
                             <p>We take reasonable measures to protect your personal information from unauthorized access, loss, misuse, disclosure, or alteration. However, please note that no method of
                                 transmission over the internet or electronic storage is completely secure.</p>
                                 <h1>Children's Privacy</h1>
                                 <p>Our Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information.</p>
            </div>
          </div>
        </div>
          <Footer></Footer>
      </>
    </>
  );
}

export default  Privacypolicy;
