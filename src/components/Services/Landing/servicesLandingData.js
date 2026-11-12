// Copy for the /services landing page, taken from the old isupportz.com
// /services/ page. Category ids and page hrefs match Navbar/menuLinks.js, so
// the mega menu's category links (/services#sap…) land on these bands.
export const INTRO = {
    title: "Step into the digital realm with our",
    titleAccent: "innovative services",
    body: "Our team is committed to providing an unparalleled experience for our clients. With Support Studio, you can anticipate outstanding customer service, cutting-edge solutions, and a dedication to achieving tangible results for your business.",
};

export const CATEGORIES = [
    {
        id: "sap",
        title: "SAP Services",
        paragraphs: [
            "SAP services encompass the comprehensive work involved in implementing and managing SAP systems for businesses. These services can range from configuring basic SAP modules for specific business processes to developing intricate, integrated solutions that drive complex enterprise operations.",
            "From initial setup and customization to ongoing support and optimization, SAP services ensure that organizations can leverage the full potential of their SAP investments to enhance efficiency, streamline workflows, and achieve strategic objectives.",
        ],
        cards: [
            { title: "Rise with SAP", href: "/services/rise-with-sap", desc: "Rise with SAP empowers businesses to transform and streamline their operations by integrating and managing finances, operations, and customer relationships efficiently through the SAP S/4HANA ERP suite." },
            { title: "Grow with SAP", href: "/services/grow-with-sap", desc: "Grow with SAP enables businesses to scale efficiently by integrating and managing finances, operations, and customer relationships through the SAP S/4HANA ERP suite." },
            { title: "SAP SuccessFactors", href: "/services/sap-successfactors", desc: "SAP SuccessFactors integrates employee data, recruitment, performance, and development for a streamlined approach to managing your workforce from hire to retire." },
            { title: "SAP Ariba", href: "/services/sap-ariba", desc: "SAP Ariba simplifies procurement processes, enhances supplier collaboration, and enables real-time insights for smarter, data-driven decisions." },
            { title: "SAP CX", href: "/services/sap-cx", desc: "SAP CX enables businesses to deliver personalized, seamless customer experiences across all channels, backed by real-time insights." },
            { title: "SAP Analytics Cloud", href: "/services/sap-analytics-cloud", desc: "SAP SAC offers real-time data insights, powerful analytics, and seamless integration across business functions for informed decision-making." },
            { title: "AMS Support", href: "/services/sap-ams", desc: "SAP AMS support ensures ongoing system maintenance and optimization, enhancing business operations with regular updates and improvements." },
            { title: "ECC to S/4HANA Conversion", href: "/services/sap-conversion-ecc-to-s4hana", desc: "Transforming from SAP ECC to S/4HANA parallels upgrading an old operating system to a newer, more efficient version." },
            { title: "Rollout", href: "/services/sap-rollout", desc: "SAP Rollout ensures seamless implementation across global locations, standardizing processes, minimizing risks, and enhancing operational efficiency for consistent performance." },
            { title: "Migration", href: "/services/sap-migration", desc: "SAP Migration ensures seamless transition of systems, data, and applications, enhancing performance, reducing risks, and supporting strategic growth efficiently." },
            { title: "T&M", href: "/services/sap-tm", desc: "SAP T&M streamlines project management by tracking time and expenses, ensuring accurate billing, efficient resource allocation, and improved profitability." },
        ],
    },
    {
        id: "microsoft",
        title: "Microsoft",
        paragraphs: [
            "Microsoft Dynamics 365 is a cloud-based suite combining ERP and CRM solutions. It integrates applications like sales, finance, and operations, enhancing business efficiency and decision-making through real-time data insights.",
            "Dynamics 365’s modular structure allows businesses to tailor solutions to their needs. With AI and analytics capabilities, it supports automation, predictive insights, and personalized customer experiences, driving digital transformation.",
        ],
        cards: [
            { title: "Microsoft Dynamics 365", href: "/services/microsoft-dynamics-365", desc: "Dynamics 365 integrates CRM and ERP capabilities, helping businesses manage operations, customer relationships, and financials efficiently and effectively." },
            { title: "Power BI", href: "/services/power-bi", desc: "Power BI is a business analytics tool by Microsoft that visualizes data, creating interactive dashboards and reports for informed decisions." },
            { title: "AMS", href: "/services/microsoft-ams", desc: "An AMS streamlines software lifecycle management, ensuring efficient deployment, maintenance, and support of applications within organizations." },
            { title: "Migration", href: "/services/microsoft-migration", desc: "Migrating from any ERP to Microsoft involves careful planning, data transfer, system integration, and user training to ensure seamless transition." },
            { title: "Rollout", href: "/services/microsoft-rollout", desc: "Rolling out Microsoft solutions involves planning, deployment, and training to ensure seamless integration and adoption across an organization." },
        ],
    },
    {
        id: "cloud",
        title: "Cloud",
        paragraphs: [
            "Cloud technology delivers computing services like storage, processing, and networking over the internet. It offers scalable resources, enabling businesses to access and manage data remotely and efficiently.",
            "By reducing the need for physical infrastructure, cloud technology lowers costs and enhances flexibility. It supports collaboration, data backup, and disaster recovery, ensuring continuity and resilience for organizations of all sizes.",
        ],
        cards: [
            { title: "Google Cloud Platform", href: "/services/google-cloud-platform", desc: "Google Cloud Platform provides scalable cloud services, including computing, storage, AI, and data analytics solutions." },
            { title: "Amazon Web Services", href: "/services/amazon-web-services", desc: "AWS is a cloud platform offering scalable computing power, storage, and services to enhance business efficiency." },
            { title: "Azure", href: "/services/azure", desc: "Azure is a cloud platform offering computing, storage, AI, and analytics services for scalable solutions." },
        ],
    },
    {
        id: "digital-transformation",
        title: "Digital Transformation",
        paragraphs: [
            "Embracing digital transformation helps businesses stay competitive by adopting advanced technologies like AI, IoT, and big data. This shift fosters agility, enabling companies to respond swiftly to market changes and customer demands.",
            "RPA (Robotic Process Automation) automates repetitive tasks using software robots to streamline business processes, improving efficiency, reducing errors, and freeing employees to focus on higher-value tasks. With its ability to integrate with existing systems, it ensures seamless automation across departments, from finance to HR.",
        ],
        cards: [
            { title: "Robotic Process Automation", href: "/services/robotic-process-automation", desc: "Streamline operations with intelligent bots, reducing manual effort, boosting accuracy, and enhancing efficiency across business processes." },
            { title: "AI & Machine Learning", href: "/services/ai-ml", desc: "We use algorithms to analyze data, automation, predictions, and intelligent decision-making." },
            { title: "E-Invoicing", href: "/services/e-invoicing", desc: "Transform invoicing with digital solutions, ensuring compliance, reducing errors, and accelerating payment cycles for seamless financial operations." },
            { title: "Internet of Things", href: "/services/internet-of-things", desc: "The Internet of Things connects devices to collect and exchange data, enabling smart, automated systems." },
            { title: "Big Data", href: "/services/big-data", desc: "Big Data involves analyzing vast datasets to uncover insights, patterns, and trends for informed decisions." },
            { title: "Cyber Security", href: "/services/cyber-security", desc: "Protect critical assets with advanced cybersecurity solutions, defending against threats and ensuring data integrity and operational resilience." },
        ],
    },
    {
        id: "design-development",
        title: "Design & Development",
        paragraphs: [
            "The development phase involves coding, testing, and deploying the designed solutions. This process transforms concepts into operational software or products, ensuring they meet user requirements and performance standards.",
        ],
        cards: [
            { title: "Full Stack Development", href: "/services/full-stack-development", desc: "Full-stack development involves building both front-end and back-end components of applications for comprehensive, functional solutions." },
            { title: "UI/UX Design", href: "/services/ui-ux-design", desc: "UI/UX design focuses on creating intuitive, engaging interfaces and experiences to improve user satisfaction and interaction." },
            { title: "Software Development", href: "/services/software-development", desc: "Software development creates and maintains applications through coding, testing, and deployment to meet user needs." },
        ],
    },
];
