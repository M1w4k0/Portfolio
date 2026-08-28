import React from "react";
import "./Projects.css";
import Skillsmenu from "../../Components/Skillsmenu/Skillsmenu";

export default function Projectsoff() {

  
  const projects = [
    {
    title1: "HR Data Analytics",
    title2: "Power BI dashboard",
    src: "../assets/dashboardPBI.png",
    path: "/projects/hr-analytics"
  },

  {
    title1: "Machine Learning",
    title2: "Business POC",
    src: "../assets/mockupPOC.png",
    path: "/projects/ml-business-poc"
  },

  {
    title1: "Fraud Detection",
    title2: "Predictive analytics",
    src: "../assets/workflowknime.png",
    path: "/projects/fraud-detection"
  },

    {
      title1: "YOWL UGC",
      title2: "Platform",
      src: "../assets/broxw.png",
      path: "/projects/yowl"
    },
    {
      title1: "Business data",
      title2: "analysis report",
      src: "../assets/ndata.png",
      path: "/projects/business-data"
    },
    {
      title1: "Myshop e-commerce",
      title2: "website",
      src: "../assets/myshop2.png",
      path: "/projects/myshop"
    },
    {
      title1: "CRM",
      title2: "scandinavian launch",
      src: "../assets/scandinaves2.png",
      path: "/projects/crm-scandinavia"
    },
    // {
    //   title1: "Machine learning",
    //   title2: "certification",
    //   src: "../assets/ML.jpg",
    //   path: "/projects/machine-learning"
    // },
    {
      title1: "Snack'Up",
      title2: "startup challenge",
      src: "../assets/snack1.png",
      path: "/projects/snackup"
    }
  ];

  return (
    <>
      <section className="ready">
        <div className="cc-case__num">( 03 )</div>

        <header className="ready__header">
          <h2 className="ready__title">
            A preview of what<br />
            I’ve been building:
          </h2>
        </header>

        <div className="ready__sideword">
          <span>Get things built.</span>
        </div>
      </section>


      {/* TABLE OF CONTENT */}
      <section className="Fondmain">
        <main className="main">
          <div className="gallery">

            <p className="gallerytitle">
              Table of content
            </p>

            {projects.map((project, index) => (
              <Skillsmenu
                project={project}
                key={index}
              />
            ))}

          </div>
        </main>
      </section>


      {/* SKILLS */}
      <section className="skills-test">

        <h1 className="skills-big">
          SKILLS
        </h1>

        <h1 className="skills-title">
          & tools I master
        </h1>

       <div className="skills-questions">

  <p>Data Analysis & Insight Generation</p>
  <p>Applied Machine Learning</p>
  <p>Python, SQL & Data Manipulation</p>
  <p>Dashboarding</p>
  <p>Data Visualization & Storytelling</p>

  <p>Exploratory Data Analysis</p>
  <p>Statistical Analysis & Data Mining</p>
  <p>Customer Segmentation & Clustering</p>

  <p>AWS SageMaker & Cloud ML Deployment</p>
  <p>Business Intelligence & KPI Analysis</p>
  <p>Reporting & Performance Monitoring</p>
  <p>A/B Testing</p>

  <p>CRM Analytics & Campaign Performance</p>
  <p>Full-Stack Web Development</p>
  <p>MySQL & Relational Database Design</p>

  <p>Project Management</p>
  <p>Business & Data Strategy</p>
  <p>Problem Solving & Analytical Thinking</p>
  <p>UX-Driven Product Thinking</p>

</div>

      </section>


      {/* LOGOS */}
      <section className="press-logos">

        <div className="press-grid">

          <a
            href="https://emarsys.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/emarsyslogo.png"
              alt="Emarsys Marketing Platform"
            />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/GitHublogo.png"
              alt="GitHub"
            />
          </a>

          <a
            href="https://www.mysql.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/sqllogo.png"
              alt="MySQL Database"
            />
          </a>

          <a
            href="https://jupyter.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/jupyterlogo.png"
              alt="Jupyter Notebook"
            />
          </a>

          <a
            href="https://www.eulerian.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/eulerienlogo.png"
              alt="Eulerian Analytics"
            />
          </a>

          <a
            href="https://www.python.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/pythonlogo.jpg"
              alt="Python Programming Language"
            />
          </a>

          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/reactlogo.png"
              alt="React JavaScript Library"
            />
          </a>

          <a
            href="https://powerbi.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/powerbilogo.png"
              alt="Microsoft Power BI"
            />
          </a>

          <a
            href="https://www.php.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/phplogo.png"
              alt="PHP Backend Language"
            />
          </a>

          <a
            href="https://www.thankyouanalytics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/tyalogo.png"
              alt="Thank You Analytics"
            />
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/jslogo.png"
              alt="JavaScript Programming Language"
            />
          </a>

          <a
            href="https://www.dartagnan.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/dartagnanlogo.png"
              alt="Dartagnan Email Builder"
            />
          </a>

          <a
            href="https://pandas.pydata.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/pandaslogo.jpg"
              alt="Pandas"
            />
          </a>

          <a
            href="https://numpy.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Numpy.png"
              alt="NumPy"
            />
          </a>

          <a
            href="https://scikit-learn.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/scikitlearnlogo.png"
              alt="Scikit-learn"
            />
          </a>

          <a
            href="https://www.knime.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/knimelogo.jpg"
              alt="KNIME Analytics Platform"
            />
          </a>

          <a
            href="https://www.microsoft.com/microsoft-365/excel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/excellogo.jpg"
              alt="Microsoft Excel"
            />
          </a>

          <a
            href="https://aws.amazon.com/sagemaker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/sagemakerlogo.png"
              alt="AWS SageMaker"
            />
          </a>

        </div>

      </section>
    </>
  );
}