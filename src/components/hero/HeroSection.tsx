import styles from "@/styles/modules/hero-section.module.css";
import Avatar from '../../../public/avatar.jpg';
import Image from 'next/image';
import React from 'react';

export const HeroSection: React.FC = () => {
//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.textBlock}>
//         <h1 className={styles.title}>
//           Salesforce Commerce Cloud <br /> Fullstack Developer
//         </h1>
//         <p className={styles.subtitle}>
//           I build scalable e-commerce solutions using SFRA, OCAPI, and SCAPI. With 6+ years of experience, I focus on performance, code quality and business value.
//         </p>
//         <div className={styles.buttons}>
//           <a href="#projects" className="btn-primary">View Projects</a>
//           <a href="/SerhiiSmilianetsCV.pdf" className="btn-secondary" download>Download CV</a>
//         </div>
//       </div>
//       <div>
//       <Image
//             src={Avatar}
//             alt="Profile Picture"
//             // fill
//             priority
//             className={styles.avatar}
//           />
//         {/* <img src="/avatar.jpg" alt="Serhii Smilianets" className={styles.avatar} /> */}
//       </div>
//     </section>
//   );


return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 md:px-12 bg-black text-white">

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Salesforce Commerce Cloud <br /> Fullstack Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I build scalable e-commerce solutions using SFRA, OCAPI, and SCAPI. With 6+ years of experience, I focus on performance, code quality and business value.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="rounded-2xl px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-lg transition"
          >
            View Projects
          </a>
          <a
            href="/SerhiiSmilianetsCV.pdf"
            className="rounded-2xl px-6 py-3 border border-gray-400 hover:border-white text-gray-300 hover:text-white transition"
            download
          >
            Download CV
          </a>
        </div>
      </div>


      <div className="md:w-1/3 flex justify-center">
      <Image
            src={Avatar}
            alt="Profile Picture"
            // fill
            priority
            className="w-48 h-48 rounded-full border-4 border-violet-600 shadow-lg object-cover"
          />
        {/* <img
          src="/avatar.jpg"
          alt="Serhii Smilianets"
          className="w-48 h-48 rounded-full border-4 border-violet-600 shadow-lg object-cover"
        /> */}
      </div>
    </section>
  );
}
