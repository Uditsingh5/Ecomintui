import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is Blue carbon?",
      answer: "Blue carbon refers to carbon captured and stored by coastal and marine ecosystems, particularly mangrove forests, seagrass beds, and salt marshes. These ecosystems are highly effective at sequestering carbon dioxide from the atmosphere and storing it in their biomass and sediments for long periods."
    },
    {
      id: 2,
      question: "How is carbon sequestration verified in marine environments?",
      answer: "Carbon sequestration in marine environments is verified through a combination of satellite imagery analysis, ground-based measurements, scientific sampling of sediments and biomass, and continuous monitoring systems. Our AI-powered platform uses advanced remote sensing technology to track and validate carbon storage in real-time."
    },
    {
      id: 3,
      question: "Can blue carbon credits be traded on voluntary carbon markets?",
      answer: "Yes, blue carbon credits can be traded on voluntary carbon markets. Our blockchain-based registry ensures transparency and immutability of transactions. These credits are verified according to international standards and can be purchased by organizations looking to offset their carbon footprint through marine ecosystem conservation."
    },
    {
      id: 4,
      question: "What makes blue carbon different from terrestrial carbon projects?",
      answer: "Blue carbon ecosystems store carbon at much higher rates per unit area compared to terrestrial forests. They can sequester carbon for centuries in underwater sediments, making them more permanent. Additionally, these ecosystems provide multiple co-benefits including coastal protection, biodiversity conservation, and sustainable livelihoods for coastal communities."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <section className="w-full min-h-screen py-12 px-4 flex items-start justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-[hsl(0,0%,70%)] leading-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-[hsl(0,0%,50%)] leading-snug max-w-[90%] mt-0">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="space-y-4 w-full">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg will-change-auto ${
                  openIndex === index ? 'glass-card' : 'bg-transparent'
                }`}
                style={{ contain: 'layout' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[hsla(0,0%,100%,0.7)] font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                      <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 text-[hsla(0,0%,100%,0.7)]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                  style={{ contain: 'layout style' }}
                >
                  <div className={`px-6 pb-6 transform transition-all duration-500 ${
                    openIndex === index 
                      ? 'translate-y-0 scale-100' 
                      : '-translate-y-4 scale-95'
                  }`}>
                    <div className="w-full h-0.5 mb-4 rounded-full overflow-hidden">
                      <div className={`h-full transform transition-transform duration-700 ${
                        openIndex === index ? 'translate-x-0' : '-translate-x-full'
                      } animate-pulse`} style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))' }}></div>
                    </div>
                    <div className={`text-[hsl(0,0%,70%)] leading-snug transform transition-all duration-600 delay-100 ${
                      openIndex === index 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-2 opacity-0'
                    }`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;