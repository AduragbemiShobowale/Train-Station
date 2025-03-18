import React, { useState } from "react";
import "./FaqFile.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import NotFound from "./NotFound";

const faqs = [
  {
    question: "How can I create an account?",
    answer:
      "You can access the registration form by clicking on the Sign-Up/Register Now button on our platforms.",
  },
  {
    question: "I have registered and logged in, how do I get a ticket?",
    answer: [
      "1. Select the Originating and Destination stations.",
      "2. Select your desired journey date.",
      "3. Click on the Find My Train button to show available trains for your trip.",
      "4. Select train and coach (e.g., Business, Standard, First).",
      "5. Click on the dropdown under 'Please select a coach' to see coach details.",
      "6. Select a coach, pick a seat, and fill in all passenger details.",
      "7. After providing all the necessary information, click on the 'Make Payment' button to initiate the payment process and book your ticket.",
      "Once you complete all the steps, a QR-based ticket will be generated and sent to your email. You can access your booked tickets in your booking history.",
    ],
  },
  {
    question: "I forgot my password.",
    answer: "You can click on the Forget Password link to set a new password.",
  },
  {
    question: "How long is my ticket valid for?",
    answer: "Your ticket is valid until the date of expected travel.",
  },
  {
    question:
      "Is it necessary to carry a printout of the E-ticket while traveling?",
    answer:
      "No, it is not necessary to carry a printout. Passengers can show the E-ticket on their mobile or email with a valid ID proof to the ticket checker during the journey.",
  },
  {
    question: "Can I buy a ticket for next week?",
    answer: "No, you can buy for the same day or the next day only.",
  },
  {
    question: "Can I get a refund?",
    answer: "Currently, NRC has a NO REFUND policy.",
  },
  {
    question: "Can I book a return ticket?",
    answer:
      "No, this feature is currently not available. You are required to book one-way tickets.",
  },
  {
    question:
      "I bought my online ticket from Ebute-Metta to Ibadan, but I am stuck at Agbado, can I board from Agbado?",
    answer:
      "Yes, you can board from the nearest station, if your ticket covers it.",
  },
  {
    question:
      "I made payment for a ticket, and I got debited, but I didn’t get a ticket?",
    answer:
      "On the Menu tab, go to your profile, click on 'My Tickets', and check ticket history. If you can't find your tickets, call customer support or email info@gsds.ng with the payment receipt details, booking information, and reference number.",
  },
];

const FaqFile = ({ searchQuery }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="faq-box">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <h2>{faq.question}</h2>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {Array.isArray(faq.answer) ? (
                    <ul>
                      {faq.answer.map((step, i) => (
                        <li className="pb-3" key={i}>
                          {step}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </div>
      <p className="faq-footer">
        Can't find the answer you are looking for?{" "}
        <span className="faq-link">Send us a message</span>
      </p>
    </div>
  );
};

export default FaqFile;
