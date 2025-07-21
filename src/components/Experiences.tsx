export default function Experiences() {
  return (
    <section id="experiences" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg animate-fade-in">
                <h3 className="text-xl font-semibold">{"Cognizant Technology Solutions Pvt Ltd"}</h3>
                <h3 className="font-light">{"Software Engineer"}</h3>
                <ul className="list-disc text-left mt-4 text text-justify">
                  <li>Designed and developed scalable web applications across front-end and back-end.</li>
                  <li>Engineered scalable backend components to handle high-volume product registrations and claims.</li>
                  <li>Implemented real-time claim validation and automated approval logic, reducing manual review time by 50%.</li>
                  <li>Designed role-based access control and secure workflows, ensuring compliance with internal audit standards and reducing data access issues by 90%.</li>
                  <li>Collaborated cross-functionally with QA, DevOps, and product teams in Agile sprints, delivering features consistently within timelines.</li>
                  <li>Automated build and deployment pipelines using Jenkins, reducing manual deployment time by 70% and enabling consistent CI/CD across development and production environments.</li>
                </ul>
              </div>

               <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg animate-fade-in">
                <h3 className="text-xl font-semibold">{"Thin Air Technologies Pvt Ltd"}</h3>
                <h3 className="font-light">{"Software Engineer"}</h3>                
                <ul className="list-disc text-left mt-4 text-justify">
                  <li>Designed and developed scalable modules on Google Cloud Platform (GCP), improving deployment efficiency and uptime to 99.9% across both OrderDesk™ and BlackTicket applications.</li>
                  <li>Integrated UltraCash and Cashfree payment gateways, enabling secure digital payments and reducing transaction failures by 40%.</li>
                  <li>Built Android-based guest-facing and restaurant-facing mobile solutions for BlackTicket, increasing table reservations and digital orders by 50% post-launch.</li>
                  <li>Orchestrated end-to-end transaction management workflows, integrating menu, order, and billing systems with POS infrastructure (iDine), which reduced order discrepancies by 30%.</li>
                  <li>Utilized GCP services such as Cloud Functions, Firebase, and App Engine to build fault-tolerant and scalable backend systems, improving platform responsiveness under peak loads.</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}