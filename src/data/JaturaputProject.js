import MovieAddict from "../images/screenshots/Movie-Addict(1900x1080).png";
import Tesla from "../images/screenshots/Tesla(1900x1080).png";
import NutriKcal from "../images/screenshots/Nutri-Kcal(1900x1080).png";
import ColissionFatalityPrediction from "../images/screenshots/Colission-Fatality-Prediction(1900x1080).png";
import QueueMeMobileApp from "../images/screenshots/QueueMe-Mobile-App3(475x986).png";
import HeavenLandOracleSQLDeveloper from "../images/screenshots/HeavenLand-OracleSQLDeveloper(3000x1688)-300PxInch.png";
import MonalistChannel from "../images/screenshots/Monalist-Channel(1900x1080).png";
import ThaiTeaAndCakeCafe from "../images/screenshots/Thai-Tea-and-Cake-Cafe(1900x1080).png";
import BentoGridDesignV1 from "../images/screenshots/Bento-Grid-Design-v1(1920x1080).png";
import BentoGridDesignV2 from "../images/screenshots/Bento-Grid-Design-v2(1920x1080).png";
import FleetPulseDashboard from "../images/screenshots/Mockup-Drag-and-Drop-Eeature-Dashboard(1900x1080).png";
import DeepLearningChestXRayPneumoniaDetection from "../images/screenshots/Deep-Learning-Pneumonia-Detection(1900x1080).png";
import FleetZeroHackathon from "../images/screenshots/frontend-hackathon-next-stop-station(1900x1080).png";
import KiddoLandPlatform from "../images/screenshots/KiddoLand-Platform(1900x1080).png";
import AstroTrack from "../images/screenshots/Astro-Track(1900x1080).png";
import AmazonFashionDataset from "../images/screenshots/Amazon-Fashion-Dataset(1900x1080).png";
import RoadSenseAI from "../images/screenshots/RoadSense-AI(1900x1080).png";
import SearchRankingRecommenderSystem from "../images/screenshots/Search-Ranking-Recommender-System(1900x1080).png";
import JavaJDBCPlayerRegistrationSystem from "../images/screenshots/Java-JDBC-Player-Registration-System(1900x1080).png";

import MagazineDesign2 from "../images/screenshots/Magazine-Design2(7200x2480)-300PxInch.png";

import AWIIHouseWorkExperience from "../images/screenshots/AWIIHouse-Work-Experience(3508x2480)-300PxInch.png";
import UndergraduateArchitectureProject from "../images/screenshots/Undergraduate-Architecture-Project(2480x3508)-300PxInch.png";


const projects = [
    {
      image: SearchRankingRecommenderSystem,
      link: "https://recommender-system-engine-frontend.onrender.com/",
      github_frontend: "https://github.com/Jaturaput-Jongsubcharoen/Search-Ranking-Recommender-System",
      github_backend: null,
      title: "Search Ranking & Recommender System",
      type: "MACHINE LEARNING & FULL-STACK AI",
      software_and_tools: "Python, FastAPI, React, Information Retrieval, Search Ranking, TF-IDF, Cosine Similarity, Apriori, REST API, GitHub",
      work_types: "Individual Project",
      project_duration: {
        start: "2026-03-25",
        end: "2026-04-18",
      },
      detail: "Developed an interactive search ranking and recommendation system combining three machine learning and information retrieval approaches. Built a hybrid music search engine that retrieves and ranks catalog results using lexical and semantic signals, an Apriori association-rule engine for discovering cuisine and ingredient relationships, and a content-based music recommender using TF-IDF and cosine similarity. Integrated the models with a FastAPI backend and React frontend to demonstrate retrieval, ranking, recommendation, and similarity-based discovery through an interactive web application.",
    },
    {
      image: RoadSenseAI,
      link: null,
      github_frontend: "https://github.com/Jaturaput-Jongsubcharoen/RoadSense-AI-Frontend",
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/RoadSense-AI-Backend",
      title: "RoadSense AI - Road Intelligence & Agentic RAG System",
      type: "MACHINE LEARNING & GENERATIVE AI",
      software_and_tools: "Python, TensorFlow, EfficientNetB0, Flask, React, Ollama, Llama 3.1, FAISS, Sentence Transformers, Agentic RAG, REST API, GitHub",
      work_types: "Individual Project",
      project_duration: {
        start: "2025-10-02",
        end: "2025-12-25",
      },
      detail: "Developed a full-stack AI road intelligence platform combining computer vision, conversational AI, and Agentic RAG. Built an EfficientNetB0 image-classification pipeline that identifies seven road issue categories from uploaded images. Integrated a local Llama 3.1 assistant through Ollama and developed a document-grounded RAG workflow that extracts uploaded PDF, TXT, DOC, and DOCX content, generates embeddings, retrieves relevant passages with FAISS, and uses them to answer user questions. The React interface also provides real road-image examples and bundled road-safety reports for immediate testing.",
    },
    {
      image: AmazonFashionDataset,
      link: "https://client-jaturaput-portfolio.onrender.com/portfolio/Amazon_Fashion_Sentiment_Analysis_Machine_Learning_Report.pdf",
      github_frontend: null,
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/AmazonFashion_Dataset",
      title: "Amazon Fashion Sentiment & NLP Analysis",
      type: "MACHINE LEARNING & NLP",
      software_and_tools: "Python, Pandas, Scikit-learn, NLTK, VADER, TextBlob, NLP, GridSearchCV, Machine Learning, GitHub",
      work_types: "Group Project",
      project_duration: {
        start: "2025-03-02",
        end: "2025-04-20",
      },
      detail: "Developed a natural language processing and machine learning analysis pipeline using the Amazon Fashion dataset to evaluate customer-review sentiment. Applied text preprocessing and lexicon-based sentiment analysis using VADER and TextBlob, then evaluated and compared sentiment classification performance. Used supervised machine learning techniques and GridSearchCV for model development and hyperparameter optimization, demonstrating practical experience with NLP, sentiment analysis, model evaluation, and data-driven comparison.",
    },
    {
      image: AstroTrack,
      link: "https://client-jaturaput-portfolio.onrender.com/portfolio/Astro_Track_Project.pdf",
      github_frontend: "https://github.com/Jaturaput-Jongsubcharoen/Astro-Track-Frontend",
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/Astro-Track-Backend",
      title: "Astro Track - Astronomy Database Management System",
      type: "FULL-STACK & DATABASE DEVELOPMENT",
      software_and_tools: "Angular, TypeScript, ASP.NET Core, C#, REST API, Oracle SQL, PL/SQL, Docker, GitHub",
      work_types: "Group Project",
      project_duration: {
        start: "2025-01-01",
        end: "2025-04-01",
      },
      detail: "Developed a full-stack astronomy database management system using Angular, ASP.NET Core, C#, Oracle SQL, and PL/SQL. Designed a relational database for managing astronomical missions, observations, celestial objects, habitable planets, researchers, research papers, telescopes, affiliations, and events. Implemented REST API integration between the Angular frontend and ASP.NET Core backend while applying database normalization, relationships, stored database logic, and structured data management.",
    },
    {
      image: JavaJDBCPlayerRegistrationSystem,
      link: "https://client-jaturaput-portfolio.onrender.com/portfolio/Java_Player_Registration_System_Report.pdf",
      github_frontend: null,
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/Java-JDBC-Player-Registration-System",
      title: "Java JDBC Player Registration System",
      type: "JAVA & DATABASE DEVELOPMENT",
      software_and_tools: "Java, JavaFX, Spring Boot, Spring Data JPA, JDBC, Maven, Oracle SQL, H2, JUnit 5, Docker, GitHub Actions, CI/CD, REST API",
      work_types: "Individual Project",
      project_duration: {
        start: "2026-08-01",
        end: "2026-08-12",
      },
      detail: "Developed a Java player and game registration system using JavaFX, Spring Boot, Spring Data JPA, JDBC, and relational databases. Implemented player and game management, database operations, transaction management, and layered Service/DAO architecture. Added JUnit 5 automated testing, Docker containerization, and CI/CD with GitHub Actions. The JavaFX interface allows users to create, update, and display player and game records while demonstrating successful database connectivity and automated test execution.",
    },
    {
      image: DeepLearningChestXRayPneumoniaDetection,
      link: "https://final-groupproject-deeplearning-comp263.onrender.com/",
      github_frontend: "https://github.com/Jaturaput-Jongsubcharoen/Final_GroupProject_DeepLearning_COMP263_001_frontend",
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/Final_GroupProject_DeepLearning_COMP263_001_backend",
      title: "Deep Learning - Chest X-Ray Pneumonia Detection System",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "Python, TensorFlow, Keras, React, Flask, REST API, GitHub",
      work_types: "Group Project",
      project_duration: {
        start: "2026-02-16",
        end: "2026-04-20",
      },
      detail: "Developed an end-to-end deep learning system for pneumonia detection using chest X-ray images. Built and compared multiple models including Baseline CNN, Deep CNN, Wide CNN, Autoencoder Transfer Learning, ResNet50 Transfer Learning, and ResNet50 From Scratch. Created an interactive web application where users can upload X-ray images, select a model, view predictions and confidence scores, and compare performance metrics such as Accuracy, Precision, Recall, and F1-Score.",
    },
    {
      image: KiddoLandPlatform,
      link: "https://kiddoland-platform-ui.onrender.com",
      github_frontend: "https://github.com/premporiya/KiddoLand-Platform-UI",
      github_backend: "https://github.com/premporiya/KiddoLand-Platform-API",
      title: "KiddoLand - AI Storytelling Platform for Children",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "React, TypeScript, Material-UI, Python, FastAPI, Hugging Face AI, REST API, Vite, GitHub, Render",
      work_types: "Group Project",
      project_duration: {
        start: "2026-01-12",
        end: "2026-04-20",
      },
      detail: "Built a privacy-first AI storytelling web platform for children aged 3-10 as a COMP 385 Capstone group project. The React + TypeScript frontend supports text, voice, and image-based story creation with age-appropriate preferences. The Python FastAPI backend integrates Hugging Face AI models for story generation, rewriting, and optional text-to-speech. Includes child safety filtering, favorites and history management, and is designed with COPPA & GDPR compliance. Technically, there is no personal child data stored.",
    },
    {
      image: FleetZeroHackathon,
      link: "https://frontend-hackathon-next-stop-station.onrender.com/",
      github_frontend: null,
      github_backend: null,
      title: "FleetZero Innovation Jam – Next Stop Station (1st Place Hackathon)",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "React, JavaScript, REST API, AI, Digital Twin, GitHub, Render",
      work_types: "Group Project",
      project_duration: {
        start: "2025-10-06",
        end: "2025-10-10",
      },
      detail: "Competed in the FleetZero Innovation Jam during Reading Week and won 1st place as a team of five. The challenge was to use AI and Digital Twin technology to predict and prevent failures in electric bus fleets. Serving as Full-Stack Developer, I was responsible for the backend logic, UI design, and dashboard development. The Fleet Operator Dashboard displays real-time fleet health status — Healthy, Warning, Critical, and Maintenance — with an automated alert banner that triggers based on set thresholds. Buses are colour-coded for instant readability, and selecting a bus reveals its AI Health Score, anomaly alerts, and a 7-day battery performance forecast. A companion Driver Vehicle Monitor was also built as a simplified mobile-friendly view showing only the essential information drivers need. The project was a fast-paced 4-day sprint involving late-night debugging, rapid learning, and strong teamwork.",
    },
    {
      image: BentoGridDesignV2,
      link: "https://client-jaturaput-portfolio.onrender.com",
      github_frontend: "https://github.com/Jaturaput-Jongsubcharoen/Client-Jaturaput-Portfolio",
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/Server-Jaturaput-Portfolio",      
      title: "Bento Grid Design (Website-Mobile) Project - Version 2.0",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, JavaScript, React, Node, Express, GitHub, MongoDB Compass, Render, EmailJS, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2025-08-07",
        end: "2025-08-31",
      },
      detail: "This Bento Grid Design website (Version 2) enhances CSS skill further by playing with a cursor to make the website more attractive and userfriendly design. Users can hover over any element, including text titles, to experience interactive CSS effects. This website also serves as a portfolio. It also strengthened my React skills by learning how to structure files effectively and manage data flow between child and parent components. The project doubles as a portfolio showcase. The website is fully responsive, ensuring smooth usability on phone screens as well. This project further serves as a portfolio showcase.",
    },
    {
      image: BentoGridDesignV1,
      link: "https://client-jaturaput-portfolio.onrender.com/bento-Grid-design-backup4",
      github_frontend: "https://github.com/Jaturaput-Jongsubcharoen/Client-Jaturaput-Portfolio",
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/Server-Jaturaput-Portfolio",      
      title: "Bento Grid Design (Website) Project - Version 1.0",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, JavaScript, React, Node, Express, GitHub, MongoDB Compass,Render, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2024-12-09",
        end: "2024-12-23",
      },
      detail: "This is Version 1 of Bento Grid Design, created to enhance CSS skills by experimenting with cursor interactions that make the design more attractive and user-friendly. Users can hover over elements, including text titles, to experience interactive CSS effects. This version is optimized for desktop screens and does not fully support phone screens. The project also serves as a portfolio showcase.",
    },
    {
      image: ThaiTeaAndCakeCafe,
      link: "https://mackerjong.wixsite.com/home",
      github_frontend: null,
      github_backend: null,
      title: "Thai Tea and Cake Café (Business Website)",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "Wix, Wix Restaurant Menu, Wix CMS",
      work_types: "Individual Project",
      project_duration: {
        start: "2025-06-30",
        end: "2025-07-07",
      },
      detail: "A Wix-based website for an authentic Thai dessert café in Toronto, showcasing the menu, team, and brand story. Through this project, I gained hands-on experience using the Wix Restaurant Menu feature to structure and display menu items professionally. I also learned how to use Wix CMS to organise and manage image galleries efficiently, enabling easy content updates. This project helped me understand how to leverage Wix's built-in tools to build a functional, visually appealing business website without custom coding.",
    },
    {
      image: MonalistChannel,
      link: "https://mackerjong.wixsite.com/monalist-channel",
      github_frontend: null,
      github_backend: null,
      title: "Monalist Channel (Travel & Storytelling Website)",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "Wix, Wix Editor",
      work_types: "Individual Project",
      project_duration: {
        start: "2025-06-02",
        end: "2025-06-08",
      },
      detail: "Monalist Channel is a travel and storytelling platform built on Wix, designed to capture the essence of Thailand's cultural richness while sharing experiences from Toronto — bridging two cultures through video content. This project strengthened my Wix skills, particularly in designing and structuring page layouts using the Wix editor to create a visually engaging and user-friendly interface. It helped me understand how to arrange sections, apply custom styling, and balance content with media to deliver a cohesive look that reflects the brand identity.",
    },
    {
      image: HeavenLandOracleSQLDeveloper,
      link: "/pdf/Powerpoint-PDF_Amusement-Park_Group%208_Group-Project.pdf",
      github_frontend: null,
      github_backend: null,      
      title: "Amusement Park Database Management System",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "Oracle SQL Developer, draw.io, Power Point",
      work_types: "Group of 3",
      project_duration: {
        start: "2024-07-15",
        end: "2024-08-05",
      },
      detail: "This database system provides a comprehensive framework for managing an amusement park's operations. It ensures data integrity while tracking visitors, ticket sales, attraction management, staff schedules, and seasonal variations. Key tables include Visitor, Ticket, SeasonDate, Attraction, Staff, WorkShift, TicketPurchased, Recording, and TicketAccess, facilitating seamless record-keeping and operational efficiency.",
    },
    {
      image: QueueMeMobileApp,
      link: "https://bit.ly/ClinicMobileApp-Figma",
      github_frontend: null,
      github_backend: null,
      title: "Clinic Appointment (Mobile App) Design",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "Figma, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2024-11-21",
        end: "2024-12-05",
      },
      detail: "Designed the test design for Clinic Mobile App, mainly focused on appointment and arrangement flexibly, incorporating features such as AI Chatbot, Prescription, AI chatbot, prescription handling, medical news, and department navigation.",
    },
    {
      image: ColissionFatalityPrediction,
      link: "https://machine-learning-collision-fatality.onrender.com/",
      github_frontend: "https://github.com/Jaturaput-Jongsubcharoen/ML_client",
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/ML_server2",      
      title: "Colission Fatality Prediction (Website & Machine Learning) Project",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, JavaScript, Python, React, Trained ML Model (.pkl), Render",
      work_types: "Individual Project",
      project_duration: {
        start: "2025-04-31",
        end: "2025-05-28",
      },
      detail: "This web app predicts the likelihood of a fatal traffic collision in Toronto using machine learning models like Random Forest, KNN, SVM, Neural Networks, and Logistic Regression, based on user-selected road, driver, and environmental conditions. When you select a model, its performance is displayed to help you understand how well it predicts fatal outcomes by Jaturaput (Mac) Jongsubcharoen.",
    },
    {
      image: NutriKcal,
      link: "https://comp229-nutrisnap-client1.onrender.com/",
      github_frontend: "https://github.com/Jaturaput-Jongsubcharoen/COMP229-NutriSnap-Client1",
      github_backend: "https://github.com/Jaturaput-Jongsubcharoen/COM229-NutriSnap-Server1",      
      title: "Nutritional Tracking (Website) Project",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, JavaScript, React, Node, Express, GitHub, MongoDB Compass, Render, Photoshop",
      work_types: "Group of 5",
      project_duration: {
        start: "2024-11-14",
        end: "2024-12-12",
      },
      detail: "Handled all website functions on the website to connect between the MongoDB, backend server and frontend server and managed the deployment successfully with user-friendly design. All features were tied to user authentication; users without a user ID had to create one and log in first, with tokens used for verification.",
    },
    {
      image: Tesla,
      link: "http://studentweb.cencol.ca/jjongsub/Assignment3/assignment3.html",
      github_frontend: null,
      github_backend: null,
      title: "Tesla Specification (Website) Project",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2024-01-29",
        end: "2024-02-05",
      },
      detail: "Created a visually appealing and responsive website to showcase Tesla's specifications and features. Focused on delivering a clean, modern layout, ensuring compatibility across devices. Incorporated interactive elements such as hover effects, animations, and structured navigation for enhanced user experience. Ensured proper SEO techniques for better discoverability of the webpage.",
    },
    {
      image: MovieAddict,
      link: "http://studentweb.cencol.ca/jjongsub/Individual_Project/Individual_Project.html",
      github_frontend: null,
      github_backend: null,
      title: "Movie-Addict (Website) Project",
      type: "WEB & MOBILE DESIGN",
      software_and_tools: "HTML, CSS, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2024-03-25",
        end: "2024-04-08",
      },
      detail: "Designed streaming service website that announces movies, allowing users to rent/purchase them",
    },
    {
      image: MagazineDesign2,
      link: "https://online.fliphtml5.com/iikvd/lmou/?1639471606477#p=2",
      github_frontend: null,
      github_backend: null,       
      title: "Magazine Design",
      type: "MAGAZINE DESIGN",
      software_and_tools: "3D SketchUp, 2D AutoCAD, Enscape, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2022-10-07",
        end: "2022-10-14",
      },
      detail: "Created an interactive and visually appealing magazine layout to present articles, advertisements, and images effectively. Focused on utilizing creative typography and graphics for an engaging reading experience. Integrated features for smooth navigation, such as hyperlinks and clickable elements, to enhance accessibility in digital formats.",
    },
    {
      image: AWIIHouseWorkExperience,
      link: "https://online.fliphtml5.com/ukqkz/yexy/#p=2",
      github_frontend: null,
      github_backend: null,        
      title: "Wittawii Company Work Experience",
      type: "ARCHITECTURAL DESIGN",
      software_and_tools: "3D SketchUp, 2D AutoCAD, Enscape, Photoshop",
      work_types: "Individual Project",
      project_duration: {
        start: "2022-01-01",
        end: "2022-11-11",
      },
      detail: "Worked as an architectural designer for residential and commercial projects. Designed detailed 3D models and rendered realistic visualizations to present to clients. Collaborated closely with team members to refine designs based on feedback. Produced floor plans and construction documents using 2D AutoCAD while ensuring adherence to project timelines and quality standards.",
    },
    {
      image: UndergraduateArchitectureProject,
      link: "https://online.fliphtml5.com/ukqkz/ybin/#p=1",
      github_frontend: null,
      github_backend: null,      
      title: "Undergraduate Architecture Project",
      type: "ARCHITECTURAL DESIGN",
      software_and_tools: "3D SketchUp, 2D AutoCAD, Enscape, V-Ray, Photoshop, Illustrator",
      work_types: "Individual Project",
      project_duration: {
        start: "2016-08-08",
        end: "2021-05-27",
      },
      detail: "Developed an innovative architectural design project as part of undergraduate coursework. Conducted extensive research to understand user needs and environmental impact, integrating sustainability into the project. Created 3D models and rendered photorealistic images using V-Ray for presentations. Produced detailed site plans, elevations, and conceptual drawings to communicate the design intent effectively.",
    },

];
export default projects