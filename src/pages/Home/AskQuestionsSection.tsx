import React from "react";
import { motion } from "motion/react";
interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "How can AI improve my company's operations?",
    answer:
      "Skyline's AI-driven systems help automate processes, optimize decision-making, and improve resource allocation, leading to more efficient and effective business operations.",
  },
  {
    question: "What type of cloud services does Skyline offer?",
    answer:
      "We provide scalable cloud solutions designed to integrate seamlessly with your current systems, enhancing performance, security, and flexibility.",
  },
  {
    question: "How does Skyline ensure data security?",
    answer:
      "Our solutions include advanced security protocols and regular system testing to safeguard your data and ensure privacy in all your business operations.",
  },
  {
    question: "What kind of technological consulting does Skyline provide?",
    answer:
      "Our team of experts provides consulting services to help you choose and implement the right technological solutions to optimize your business and drive growth.",
  },
];

const AskQuestionsSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };
  return (
    <section
      className="ask-questions section-bg1 section-padding30 fix"
      id="help"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            {/* Section Title */}
            <div className="section-tittle text-center mb-90">
              <h2>Frequently Asked Questions</h2>
              <p>
                At Skyline, we offer advanced technological and software
                solutions to empower your business. From AI-driven systems to
                cloud services, our expert team is ready to support you every
                step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {questions.map((q, index) => (
            <motion.div
              key={index}
              className="col-lg-6 col-md-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
            >
              <div className="single-question d-flex mb-50">
                <span> Q.</span>
                <div className="pera">
                  <h2>{q.question}</h2>
                  <p>{q.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="more-btn text-center mt-20">
              <a
                href="#"
                className="btn"
              >
                Go to Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestionsSection;
