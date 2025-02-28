'use client'

import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function About() {
  const careerStartDate = new Date('2018-09-12');
  const [experinceYears, setExperinceYears] = useState(0);
  
  useEffect(() => {
    const currentDate = new Date();
    const diff = currentDate.getTime() - careerStartDate.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    setExperinceYears(years);
  }, []);

  return (
    <div>
      <Head>
        <title>About Serhii Smilianets</title>
        <meta name="description" content="Learn more about Serhii Smilianets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About Me</h1>
        
        <section>
          <h2>Summary</h2>
          <p>
            I am a seasoned software engineer with over {experinceYears} years of experience, specializing in the Salesforce Commerce Cloud platform. My expertise covers both front-end and back-end development using technologies like SiteGenesis, SFRA, jQuery, native JavaScript, and Vue.js. I began my career as a front-end developer and later transitioned to back-end development. Throughout my journey, I have contributed to high-impact projects for companies such as Continente, Moleskine, Sonae Fashion, and Bugaboo. I am a disciplined worker, detail-oriented, independent thinker, and a continuous learner who is always ready to help and achieve goals.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li><strong>Academic Disciplines:</strong> English Writing, English, English Speaking, Ukrainian, Object-Oriented Programming</li>
            <li><strong>Engineering Practices:</strong> Salesforce Commerce Cloud (Backend), CSS Fundamentals, BEM Methodology, Accessibility in HTML/CSS, Salesforce Commerce Cloud (Frontend), Software Release Management, Software Engineering Processes, Software Engineering Practices, Software Design, Engineering Excellence, Cloud Fundamentals, GenAI Pair Programming, Prompt Engineering for Dev Productivity, Technical Documentation Writing (English)</li>
            <li><strong>Leadership & Soft Skills:</strong> Leadership, Developing Others, Driving Change and Innovation, Communication, Teamwork and Collaboration, Adaptability, Ownership, Consultancy, Business Acumen, Diversity, Equity, and Inclusion, Scrum</li>
            <li><strong>Technologies:</strong> Salesforce B2C Commerce, Salesforce B2B Commerce, Salesforce Integration, Webpack, VueJS, Bootstrap CSS, jQuery, ReactJS, HTTP, HTML/CSS Markup, Git, JSON, AJAX, JavaScript, CSS Modules, Node.js, Browser APIs, JavaScript in Browser, Cross-browser HTML/CSS markup, Cross-Mobile Platform JavaScript, JavaScript Performance, JavaScript Development Tools, JS Web Components, JSDoc, ECMAScript, SASS/SCSS, Chrome DevTools, Jira, Salesforce Commerce Cloud, Yarn, Gitlab, Visual Studio Code, NPM, Salesforce Marketing Cloud, REST API</li>
          </ul>
        </section>

        <section>
          <h2>Work Experience</h2>
          <ul>
            <li>
              <strong>EPAM Systems (Sephora ME):</strong> Developed custom hooks, managed data import/export jobs, and configured databases for Salesforce Commerce Cloud.
            </li>
            <li>
              <strong>Emakina:</strong> Worked on projects for Muchachomalo, Hans Anders, Wolford, Mizuno, Floris van Bommel, and Bugaboo. Responsibilities included server-side solutions, bug fixes, integrations, and system updates.
            </li>
            <li>
              <strong>Tryzens (Whittard):</strong> Implemented shipping schedules, customer service adaptations, and "Notify me later" logic.
            </li>
            <li>
              <strong>OSF Digital:</strong> Contributed to projects for Sonae Fashion, Moleskine, Baccarat, Continente, Ubisoft, Etnia Barcelona, Bouclair, and Cigars. Roles ranged from front-end and back-end development to full-stack development, handling various responsibilities such as authentication, order management, page design, and bug fixing.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
