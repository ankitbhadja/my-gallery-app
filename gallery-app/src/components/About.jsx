// import at the top of your component file
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.header
      id="about"
      className="container mx-auto my-5 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Profile Photo Column */}
          <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-indigo-100 p-8 flex flex-col items-center">
          <div
  className="w-48 h-48 rounded-full profile-img border-4 border-white shadow-lg mb-6 bg-cover bg-center"
  style={{ backgroundImage: "url('../../ankit.jpeg')" }}
/>

            <h1 className="text-4xl font-bold text-center text-dark">
              <span className="text-primary">ANKIT</span>
              <br />
              <span className="text-secondary">BHADJA</span>
            </h1>
            <h2 className="text-xl font-medium text-gray-600 mt-2 text-center md:text-left">
              Backend Developer
            </h2>
            <div className="mt-6 w-full space-y-4">
              {/* Email */}
<div className="flex items-center">
  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
    <i className="fas fa-envelope" />
  </div>
  <p className="ml-3 text-sm text-gray-500">
    Email:{" "}
    <a
      href="mailto:ankitbhadja1@gmail.com"
      className="text-primary hover:underline ml-1"
    >
      ankitbhadja1@gmail.com
    </a>
  </p>
</div>

{/* Phone */}
<div className="flex items-center mt-4">
  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
    <i className="fas fa-phone" />
  </div>
  <p className="ml-3 text-sm text-gray-500">
    Phone:{" "}
    <a
      href="tel:+919978255694"
      className="text-primary hover:underline ml-1"
    >
      +91 9978255694
    </a>
  </p>
</div>


              {/* Social Links */}
              <div className="mt-6 flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary Column */}
          <div className="md:w-2/3 p-8 space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Backend Developer with 3.5 years of experience in building scalable,
                efficient, and cloud-native applications. Proficient in Node.js,
                NestJS, AWS Serverless architecture, RabbitMQ, and microservice systems.
                Adept at designing backend systems, writing complex business logic,
                handling asynchronous processing with queues, and working with databases
                like MongoDB and Postgres. Familiar with frontend basics using React.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Career Objective
                </h3>
                <p className="text-gray-700">
                  Seeking opportunities to leverage my backend development expertise in
                  creating robust, scalable applications while continuing to expand my
                  knowledge in cloud technologies and microservice architectures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Key Strengths
                </h3>
                <ul className="text-gray-700 list-disc list-inside">
                  <li>Microservice architecture design</li>
                  <li>Serverless application development</li>
                  <li>Database optimization</li>
                  <li>API development and integration</li>
                  <li>Problem-solving and debugging</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-2 px-6 rounded-full transition-all duration-300"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default AboutSection;
