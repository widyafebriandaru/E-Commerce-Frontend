import Header from '../Header';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
   const navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-600 h-[57px]">
        <Header />
      </div>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>
        <div className="prose">
          <h2 className="font-bold mb-4">1. Introduction</h2>
          <p>
            Welcome to our website. This website is owned and operated by ABC Clothing Company. These terms of service outline the rules and regulations for the use of our website.
          </p>
          <p>
            By accessing this website, we assume you accept these terms of service in full. Do not continue to use our website if you do not accept all of the terms of service stated on this page.
          </p>

          <h2 className="font-bold mt-8 mb-4">2. License to Use</h2>
          <p>
            Unless otherwise stated, ABC Clothing Company and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from this website for your own personal use subject to restrictions set in these terms of service.
          </p>
          <p>
            You must not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Republish material from this website</li>
            <li>Sell, rent, or sub-license material from this website</li>
            <li>Reproduce, duplicate, or copy material from this website</li>
            <li>Redistribute content from this website</li>
          </ul>

          <h2 className="font-bold mt-8 mb-4">3. User Content</h2>
          <p>
            In these terms of service, &quot;your user content&quot; refers to material (including without limitation text, images, audio material, video material, and audio-visual material) that you submit to this website, for whatever purpose.
          </p>
          <p>
            You grant to ABC Clothing Company a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your user content in any existing or future media. You also grant to ABC Clothing Company the right to sub-license these rights and the right to bring an action for infringement of these rights.
          </p>

          <h2 className="font-bold mt-8 mb-4">4. Limitations of Liability</h2>
          <p>
            ABC Clothing Company will not be liable to you (whether under the law of contact, the law of torts, or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>For any direct, indirect, special, or consequential loss</li>
            <li>For any business losses, loss of revenue, income, profits, or anticipated savings</li>
            <li>For any loss of or damage to data</li>
            <li>For any loss of goodwill or reputation</li>
            <li>For any other indirect or consequential loss</li>
          </ul>

          <h2 className="font-bold mt-8 mb-4">5. Governing Law</h2>
          <p>
            These terms of service shall be governed by and construed in accordance with the laws of the United States. Any disputes relating to these terms of service will be subject to the exclusive jurisdiction of the courts of the United States.
          </p>

          <p className="mt-8">
            If you have any questions about our Terms of Service, please contact us at <a onClick={() => navigate("/contact")} href="" className='text-slate-800 font-medium text-lg hover:font-bold'>here</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
