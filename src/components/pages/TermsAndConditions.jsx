import Header from "../Header";

const TermsAndConditions = () => {
  return (
    <>
    <div className="bg-slate-600 h-[57px]">
          <Header />
        </div>
    <div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-6'>Terms and Conditions</h1>

      <p className='mb-4'>
        Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website and the purchase of products from our online store. By accessing or using our website and making a purchase, you agree to be bound by these terms and conditions. Please read them carefully before using our website or making a purchase.
      </p>

      <h2 className='text-2xl font-bold mb-4'>1. General</h2>
      <p className='mb-4'>
        By using our website, you agree to comply with all applicable laws and regulations. You must be at least 18 years old or have the permission of a parent or guardian to use our website and make a purchase. We reserve the right to refuse service to anyone for any reason at any time.
      </p>

      <h2 className='text-2xl font-bold mb-4'>2. Product Information</h2>
      <p className='mb-4'>
        We strive to provide accurate and up-to-date product information, including descriptions, pricing, and images. However, we cannot guarantee that all information on our website is error-free or complete. The colors and appearance of products may vary depending on your device's screen settings.
      </p>

      <h2 className='text-2xl font-bold mb-4'>3. Pricing and Payments</h2>
      <p className='mb-4'>
        All prices on our website are listed in the local currency and are subject to change without notice. We accept various payment methods, including major credit cards and online payment platforms. By providing your payment information, you represent and warrant that you are authorized to use the payment method and that the information provided is accurate and complete.
      </p>

      <h2 className='text-2xl font-bold mb-4'>4. Shipping and Delivery</h2>
      <p className='mb-4'>
        We offer shipping to select locations. The shipping fees and estimated delivery times will be provided at checkout. Please note that delivery times may vary depending on the shipping carrier and your location. Once your order is shipped, we will provide you with a tracking number to track your package's status.
      </p>

      <h2 className='text-2xl font-bold mb-4'>5. Returns and Refunds</h2>
      <p className='mb-4'>
        We want you to be satisfied with your purchase. If you are not happy with your order, please contact our customer support within 14 days of receiving the product. We will provide instructions for returning the item and offer a refund or exchange, subject to our return policy. Please note that certain items may be non-returnable or may have specific conditions for returns.
      </p>

      <h2 className='text-2xl font-bold mb-4'>6. Intellectual Property</h2>
      <p className='mb-4'>
        All content on our website, including text, images, logos, and product descriptions, is protected by intellectual property laws and is the property of our company. You may not use, reproduce, or distribute any of our content without prior written permission from us.
      </p>

      <h2 className='text-2xl font-bold mb-4'>7. Privacy Policy</h2>
      <p className='mb-4'>
        We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and safeguard your data.
      </p>

      <h2 className='text-2xl font-bold mb-4'>8. Governing Law and Jurisdiction</h2>
      <p className='mb-4'>
        These terms and conditions are governed by and construed in accordance with the laws of [your jurisdiction]. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [your jurisdiction].
      </p>

      <p className='mb-4'>
        These terms and conditions constitute the entire agreement between you and us regarding the use of our website and the purchase of products. If any provision of these terms and conditions is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
      </p>
    </div>
    </>
  );
}

export default TermsAndConditions;
