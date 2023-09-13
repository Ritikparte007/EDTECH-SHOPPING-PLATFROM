import React from "react";
import Header from "./Header";
import "./Aboutus.css";
import Footer from "./Footer";

function Faq() {
  return (
    <>
      <Header></Header>
      <>
        <div className="Aboutus-12">
          <div className="headingabout">
            <h1>FaQ</h1>
          </div>
          <div className="aboutus-123">
            <div className="Containerabout123">
              <h3>Q1: How can I earn money through the referral program for games course?</h3>
              <p>A1: To earn money through our referral program, simply sign up for the program on our website. Once registered, you'll receive a unique referral link that you can share with friends, family, or anyone interested in our virtual products. When someone uses your referral link to make a purchase, you'll earn a commission.</p>
              <h3>Q2: What are virtual products?</h3>
              <p>A2: Virtual products are intangible items that exist in digital format. In our case, they could include digital downloads, online courses, software licenses, e-books, or other digital content that provides value to users.</p>
              <h3>Q3: How do I get my unique referral link?</h3>
              <p>A3: After you've signed up for our referral program, you'll find your unique referral link in your account dashboard. This link contains a special code that tracks the users who click on it and make purchases.</p>
              <h3>Q4: Is there a limit to how much I can earn through referrals</h3>
              <p>A4: There's typically no strict limit to how much you can earn through referrals. The more people you refer who make purchases, the more you can earn. However, we encourage you to review the referral program terms for any specific restrictions or limitations.</p>
              <h3>Q5: How will I receive my earnings from the referral program?</h3>
              <p>A5: Your earnings will be deposited into your account on our website. You can then choose to withdraw the earnings through a payment method provided by us, such as PayPal, bank transfer, or other available options.</p>
              <h3>Q6: Can I refer people from any location?</h3>
              <p>A6: In most cases, our referral program is open to participants from various locations. However, some legal or operational restrictions might apply depending on local laws and regulations. It's a good idea to check the eligibility criteria in the terms and conditions.</p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    </>
  );
}

export default Faq;
