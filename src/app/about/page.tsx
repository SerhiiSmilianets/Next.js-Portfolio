import styles from '@/ui/about/about.module.css';
import { WorkingExperience } from '@/ui/about/experience/experience'
import {getExpYears} from '@/app/lib/dateHelper'
import { getCompanies } from '@/app/lib/serverData';
import {Company} from '@/interfaces';

export default async function About() {
  const experienceYears = getExpYears();
  const companies : Company[] = await getCompanies();

  return (
    <div>
      <h1 className='page-title'>About Me</h1>

      <section className={styles.aboutSectionContainer}>
        <p>
          I’m a Software Engineer with over {experienceYears} years of experience working with Salesforce Commerce Cloud (SFCC) as both a Front-End and Back-End Developer. I started my career in front-end development, focusing on JavaScript, jQuery, and SCSS, but eventually transitioned into back-end development, learning everything on my own. Over time, I became a Full-Stack Developer, handling everything from UI styling to complex server-side integrations.

          I’ve worked on several high-profile eCommerce projects, including Continente, Bugaboo and Sephora. My responsibilities have ranged from bug fixing and performance optimization to implementing new features, integrating third-party services, and enhancing checkout processes. I’m skilled in JavaScript (both front-end and back-end), SFRA, SiteGenesis, Next.js, React.js, and Node.js.

          I also hold a Salesforce Commerce Cloud Developer certification, and I’m always eager to expand my expertise. I thrive in dynamic environments, love solving complex problems, and enjoy collaborating with teams to build efficient and scalable solutions. My approach to work is detail-oriented, disciplined, and goal-driven, and I’m always open to learning something new.
        </p>
      </section>

      <h2 className={styles.sectionTitle}>Skills</h2>
      <section className={styles.sectionContainer}>
        <ul>
          <li><strong>Education:</strong> Specialist degree in Information Technology Odesa National Academy of Communications</li>
          <li><strong>Languages:</strong> English(B2+), Ukrainian(Native)</li>
          <li><strong>Leadership & Soft Skills:</strong> Leadership, Developing Others, Driving Change and Innovation, Communication, Teamwork and Collaboration, Adaptability</li>
          <li><strong>Technologies:</strong> Salesforce B2C Commerce Cloud, Salesforce Reference Architecture(SFRA), SiteGenesis, JS, HTML, CSS/SASS/SCSS, jQuery, React.js, Next.js, Node.js, Express, Git, AI</li>
        </ul>
      </section>

      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <section className={styles.sectionContainer}>
        <WorkingExperience companies={companies}/>
      </section>
    </div>
  );
}
