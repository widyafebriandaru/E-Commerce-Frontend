import Header from "../Header";


const FAQ = () => {
  return (
    <>
    <div className="bg-slate-600 h-[57px]">
          <Header />
        </div>
    <div className='container mx-auto pt-20 py-10 '>
      <h1 className='text-center font-extrabold text-4xl'>FAQ</h1>

      <div className=' container mx-auto sm:p-20 p-4 '>
        <div className='space-y-4 '>
          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>1.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: How do I determine my size for clothing items?</p>
              <p>A: We provide a detailed size chart on each product page to help you find the perfect fit. Simply refer to the measurements and compare them to your own to make an informed decision.</p>
            </div>
          </div>
          
          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>2.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: What payment methods do you accept?</p>
              <p>A: We accept major credit cards, debit cards, and PayPal for secure and convenient online payments.</p>
            </div>
          </div>

          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>3.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: How long does shipping take?</p>
              <p>A: Shipping times may vary depending on your location. Typically, orders are processed within 1-2 business days, and delivery takes an additional 3-7 business days. You can track your order using the provided tracking number.</p>
            </div>
          </div>

          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>4.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: What is your return/exchange policy?</p>
              <p>A: We offer a hassle-free return and exchange policy. If you&apos;re not satisfied with your purchase, you can return it within 30 days for a refund or exchange. Please refer to our Returns & Exchanges page for more details.</p>
            </div>
          </div>

          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>5.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: Can I cancel my order?</p>
              <p>A: Orders can be canceled within 24 hours of purchase. Please contact our customer support team as soon as possible with your order details to request a cancellation.</p>
            </div>
          </div>

          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>6.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: Do you offer international shipping?</p>
              <p>A: Yes, we offer international shipping to many countries. Shipping rates and times may vary, so please check our Shipping Information page for more details.</p>
            </div>
          </div>

          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>7.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: Are the product images accurate representations of the items?</p>
              <p>A: Yes, we strive to provide high-quality product images that accurately represent the items. However, please note that colors may vary slightly due to monitor settings.</p>
            </div>
          </div>

          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>8.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: How can I contact your customer support team?</p>
              <p>A: You can reach our customer support team by email, phone, or through the contact form on our website. We are available to assist you with any questions or concerns you may have.</p>
            </div>
          </div>

          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>9.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: Are there any promotions or discounts available?</p>
              <p>A: Yes, we regularly offer promotions and discounts on selected items. Keep an eye on our website or subscribe to our newsletter to stay updated on the latest deals.</p>
            </div>
          </div>

          <div className='flex'>
            <div className=' rounded-full  flex items-start justify-start mr-4'>
              <span className='font-semibold text-lg'>10.</span>
            </div>
            <div>
              <p className='font-semibold'>Q: Can I track the status of my order?</p>
              <p>A: Yes, once your order is shipped, we will provide you with a tracking number. You can use this number to track the status of your order through our website or the shipping carrier&apos;swebsite.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default FAQ;
