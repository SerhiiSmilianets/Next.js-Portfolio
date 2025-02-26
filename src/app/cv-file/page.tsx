import styles from '@/styles/CVPage.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <section className={styles.header}>
      <Image
        src="/placeholder-avatar.png"
        alt="Serhii Smilianets Avatar"
        width={150}
        height={150}
        className={styles.avatar}
      />
      <h1>Serhii Smilianets</h1>
      <p>Salesforce Commerce Cloud Developer</p>
      <p>
        📧 <a href="mailto:smilyanets1991@gmail.com">smilyanets1991@gmail.com</a>
      </p>
      <p>📞 +380968310994</p>
      <p>
        🔗 <Link href="https://www.linkedin.com/in/serhii-smilianets-3425021b8/" target="_blank">LinkedIn</Link>
      </p>
    </section>
  );
};

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const experienceData = [
  {
    company: "EPAM Systems",
    period: "10/2021 - Present",
    projects: [
      {
        name: "Sephora ME",
        activities: [
          "Contributed by writing and updating custom hooks for Salesforce Commerce Cloud API.",
          "Managed import/export jobs and configured databases."
        ]
      },
      {
        name: "Muchachomalo",
        activities: [
          "Addressed bugs and updated server-side solutions.",
          "Integrated new modules like GA4."
        ]
      },
      {
        name: "Hans Anders",
        activities: [
          "Focused on bug fixes and updated server-side logic for an optician store project.",
          "Enhanced Google Maps data processing."
        ]
      },
      {
        name: "Wolford",
        activities: [
          "Fixed bugs and implemented server-side solutions.",
          "Updated product feed jobs for a luxury retailer."
        ]
      },
      {
        name: "Mizuno",
        activities: [
          "Worked on bug fixes, updated Adyen, and implemented custom features for jersey customization."
        ]
      }
    ]
  },
  {
    company: "Tryzens",
    period: "10/2021 - 02/2022",
    projects: [
      {
        name: "Whittard",
        activities: [
          "Developed a custom shipping schedule.",
          "Created 'Notify Me Later' functionality.",
          "Configured SiteGenesis Page Designer."
        ]
      }
    ]
  },
  {
    company: "OSF Digital",
    period: "09/2018 - 10/2021",
    projects: [
      {
        name: "Continente",
        activities: [
          "Developed critical features like login/register, customer activation, and order history.",
          "Integrated third-party OMS."
        ]
      },
      {
        name: "Moleskine",
        activities: [
          "Implemented the Order Details and History system.",
          "Optimized address and shipping logic."
        ]
      },
      {
        name: "Sonae Fashion",
        activities: [
          "Created new category landing pages.",
          "Implemented video logic on product pages."
        ]
      },
      {
        name: "Bouclair",
        activities: [
          "Managed the transition from SiteGenesis to SFRA.",
          "Implemented wishlist functionality."
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <Section title="Experience">
      {experienceData.map((exp, index) => (
        <div key={index} className={styles.experienceItem}>
          <h3>{exp.company}</h3>
          <p><strong>{exp.period}</strong></p>
          {exp.projects.map((project, idx) => (
            <div key={idx} className={styles.project}>
              <h4 className={styles.projectName}>{project.name}</h4>
              <ul>
                {project.activities.map((activity, actIdx) => (
                  <li key={actIdx}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </Section>
  );
};

const certificationsData = [
  "Salesforce Certified B2C Commerce Developer"
];

const Certifications = () => {
  return (
    <Section title="Certifications">
      <ul>
        {certificationsData.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </Section>
  );
};

const CVPage = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Section title="Summary">
        <p>
          A dynamic Fullstack Developer with over 6 years of experience in Salesforce Commerce Cloud platform, offering
          proficiency in both Front-End and Back-End development. Skilled in various technologies including Site Genesis,
          SFRA, jQuery, native JavaScript, Vue.js, React.js, SCSS, Sass, Adyen, OCAPI, SCAPI, SLAS, and Services.
        </p>
      </Section>
      <Section title="Skills">
        <p>
          JavaScript, Salesforce Commerce Cloud, HTML, SCSS/SASS, ISML, React.js, Node.js, XML, JSON, OCAPI/SCAPI/SLAS,
          Next.js, Services, 3rd Party Integrations, SFCC Custom API Hooks.
        </p>
      </Section>
      <Experience />
      <Section title="Education">
        <p>Specialist of Telecommunication Technologies, Odesa National Telecommunications Academy (2009 - 2014)</p>
      </Section>
      <Certifications />
    </main>
  );
};

export default CVPage;
