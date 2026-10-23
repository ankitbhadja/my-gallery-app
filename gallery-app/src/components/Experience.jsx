

const Experience = () => {
  return (
    <>
  {/* Experience Section */}
  <section
    id="experience"
    className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-dark">
          Professional Experience
        </h2>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-16 bg-primary rounded-full" />
          <div className="h-1 w-8 bg-secondary rounded-full ml-2" />
        </div>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
        {/* Project 1 */}
        <div className="mb-12 md:mb-0 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
              <div className="bg-white rounded-xl shadow-md p-6 project-card">
                <h3 className="text-xl font-bold text-primary">Real Estate</h3>
                <p className="text-gray-500 mt-1">May 2022 – Feb 2023</p>
                <div className="mt-3 flex flex-wrap gap-2 md:justify-end">
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    AWS Lambda
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    AWS Queue
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Serverless
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    MongoDB
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Elastic Search
                  </span>
                </div>
                <p className="mt-4 text-gray-700">
                  Built a scalable and cost-effective real estate data gathering
                  system by moving from EC2-based architecture to a fully
                  serverless model with monitoring.
                </p>
                <ul className="mt-3 text-gray-700 list-disc list-inside md:list-outside">
                  <li>
                    Migrated data fetching services from EC2 to serverless
                    (Lambda + SQS) to reduce costs and improve reliability.
                  </li>
                  <li>
                    Designed and implemented a mapping layer to normalize
                    different data provider formats.
                  </li>
                  <li>
                    Developed CloudWatch dashboards for real-time tracking of
                    fetched property counts and error rates.
                  </li>
                  <li>
                    Improved data sync reliability by introducing better error
                    handling and retry mechanisms.
                  </li>
                  <li>
                    Automated service scaling to handle variable load without
                    manual intervention.
                  </li>
                  <li>
                    Eliminated EC2 crash issues and improved system uptime
                    significantly.
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white" />
            <div className="md:w-1/2 md:pl-12" />
          </div>
        </div>
        {/* Project 2 */}
        <div className="mb-12 md:mb-0 relative md:mt-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12" />
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white" />
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white rounded-xl shadow-md p-6 project-card">
                <h3 className="text-xl font-bold text-primary">
                  Decentralized Verification System
                </h3>
                <p className="text-gray-500 mt-1">March 2023 – August 2023</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Nest.js
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Postgres
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Redis
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    RabbitMQ
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    AWS S3
                  </span>
                </div>
                <p className="mt-4 text-gray-700">
                  Worked on a blockchain-based verification platform ensuring
                  transparency across the product lifecycle (e.g., food supply
                  chain).
                </p>
                <ul className="mt-3 text-gray-700 list-disc list-inside">
                  <li>
                    Built microservice-to-microservice communication using SQS
                    queues to decouple services.
                  </li>
                  <li>
                    Implemented a new role-based authorization system across the
                    platform.
                  </li>
                  <li>
                    Integrated CQRS (Command Query Responsibility Segregation)
                    pattern into services for better scalability.
                  </li>
                  <li>
                    Improved code quality across teams by setting up ESLint and
                    Prettier with strict rules.
                  </li>
                  <li>
                    Optimized service communication flow, reducing message
                    delays between microservices.
                  </li>
                  <li>
                    Contributed to blockchain interaction modules ensuring
                    tamper-proof data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="mb-12 md:mb-0 relative md:mt-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
              <div className="bg-white rounded-xl shadow-md p-6 project-card">
                <h3 className="text-xl font-bold text-primary">
                  Mental Health Support Platform
                </h3>
                <p className="text-gray-500 mt-1">Sep 2023 – Oct 2024</p>
                <div className="mt-3 flex flex-wrap gap-2 md:justify-end">
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    RabbitMQ
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Postgres
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Airtable
                  </span>
                </div>
                <p className="mt-4 text-gray-700">
                  Developed a mental health app allowing users to track pain
                  points on an avatar and engage in quests with their support
                  network.
                </p>
                <ul className="mt-3 text-gray-700 list-disc list-inside md:list-outside">
                  <li>
                    Designed the microservice architecture and queue system from
                    scratch for service communication.
                  </li>
                  <li>
                    Built an avatar-based pain tracking system with pain
                    intensity markers.
                  </li>
                  <li>
                    Integrated Airtable data sync via custom cron jobs and
                    scheduled processes.
                  </li>
                  <li>
                    Implemented a complex logic engine to auto-assign
                    personalized assessments and activities.
                  </li>
                  <li>
                    Managed database structure using Liquibase for safe schema
                    changes.
                  </li>
                  <li>
                    Handled multi-environment deployment setups, managing
                    staging, production releases, and environment variables.
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white" />
            <div className="md:w-1/2 md:pl-12" />
          </div>
        </div>
        {/* Project 4 */}
        <div className="relative md:mt-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12" />
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white" />
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white rounded-xl shadow-md p-6 project-card">
                <h3 className="text-xl font-bold text-primary">
                  Crypto Trading Platform
                </h3>
                <p className="text-gray-500 mt-1">Oct 2024 – Present</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    RabbitMQ
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Postgres
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    AWS S3
                  </span>
                  <span className="skill-pill bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    AWS EC2
                  </span>
                </div>
                <p className="mt-4 text-gray-700">
                  Architected and developed a crypto trading platform supporting
                  manual trading, grid bots, DCA bots, and secured user exchange
                  connections.
                </p>
                <ul className="mt-3 text-gray-700 list-disc list-inside">
                  <li>
                    Architected major backend modules including demo trading and
                    grid bot functionality without prior domain knowledge.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};

export default Experience;
