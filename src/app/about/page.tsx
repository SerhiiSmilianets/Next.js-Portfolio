import type { Metadata } from "next";
import { WorkingExperience } from '@/components/about/experience/Experience'
import { getCompanies, getSummaryInfo } from '@/lib/serverData';
import {Company} from '@/interfaces';
import Image from 'next/image';
import Avatar from '../../../public/avatar.jpg';
import '@/styles/about.css';

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me and my background",
  keywords: ["About Me", "Profile", "Background", "Experience"],
};

export default async function About() {
  const companies : Company[] = await getCompanies();
  const summary : string = await getSummaryInfo();

  return (
    <div>
      <h1 className='page-title'>About Me</h1>

      <section className="about-section-container animate-fadeIn">
        <div className="about-profile-image-container">
          <Image
            src={Avatar}
            alt="Profile Picture"
            className="about-profile-image"
            fill
            priority={true}
            quality={100}
          />
        </div>
        <div className="about-profile-description-container">
          <p className="about-profile-description">
            {summary}
          </p>
        </div>
      </section>

      <hr/>

      <h2 className="section-title animate-fadeIn">Skills:</h2>
      <section className="section-container animate-fadeIn">
        <ul>
          <li><strong>Education:</strong> Specialist degree in Information Technology Odesa National Academy of Communications</li>
          <li><strong>Languages:</strong> English(B2+), Ukrainian(Native)</li>
          <li><strong>Leadership & Soft Skills:</strong> Leadership, Developing Others, Driving Change and Innovation, Communication, Teamwork and Collaboration, Adaptability</li>
          <li><strong>Technologies:</strong> Salesforce B2C Commerce Cloud, Salesforce Reference Architecture(SFRA), SiteGenesis, JS, HTML, CSS/SASS/SCSS, jQuery, React.js, Next.js, Node.js, Express, Git, AI</li>
        </ul>
      </section>

      <hr/>

      <h2 className="section-title animate-fadeIn">Experience:</h2>
      <section className="section-container animate-fadeIn">
        <WorkingExperience companies={companies}/>
      </section>
    </div>
  );
}

