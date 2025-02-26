import React from "react";
import Link from "next/link";
import "../styles/global.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <header className="hero">
        <h1>Web Developer & E-Commerce Specialist</h1>
        <p>Building Scalable & Futuristic Digital Experiences</p>
        <div className="cta-buttons">
          <Link href="/projects"><button className="btn-primary">View Projects</button></Link>
          <Link href="/contact"><button className="btn-secondary">Contact Me</button></Link>
        </div>
      </header>
      
      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="icons">
          <img src="/icons/sfcc.png" alt="Salesforce Commerce Cloud" />
          <img src="/icons/react.png" alt="React" />
          <img src="/icons/nextjs.png" alt="Next.js" />
          <img src="/icons/nodejs.png" alt="Node.js" />
          <img src="/icons/graphql.png" alt="GraphQL" />
          <img src="/icons/tailwind.png" alt="Tailwind CSS" />
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <div className="project-card">Next-Gen E-Commerce Platform</div>
          <div className="project-card">AI-Driven Shopping Experience</div>
          <div className="project-card">Headless CMS Storefront</div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Your Name | <Link href="/contact">Get in Touch</Link></p>
      </footer>
    </div>
  );
};

export default Home;

// global.css
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #e0e0e0;
  background: #0a0f1d;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

.cta-buttons button {
  margin: 10px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
}

.btn-primary {
  background-color: #00d4ff;
  color: #0a0f1d;
}

.btn-secondary {
  background-color: #f4f6f9;
  color: #333;
}

.tech-stack {
  text-align: center;
  margin-top: 60px;
}

.tech-stack .icons img {
  width: 60px;
  margin: 12px;
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.7));
}

.projects {
  margin-top: 60px;
}

.project-list {
  display: flex;
  gap: 24px;
  justify-content: center;
}

.project-card {
  background: linear-gradient(135deg, #232526, #414345);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 6px 12px rgba(0, 255, 255, 0.3);
  text-align: center;
  color: #e0e0e0;
}

.footer {
  margin-top: 60px;
  text-align: center;
  padding: 20px;
  background: #1b1b1b;
  border-radius: 12px;
  color: #e0e0e0;
}
