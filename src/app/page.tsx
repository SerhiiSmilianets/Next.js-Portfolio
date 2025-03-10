import Image from 'next/image';
import { FC } from 'react';
import Avatar from '../../public/avatar.jpg';
import "./home.css";

const Home: FC = () => {
  return (
    <>      
      <div className="w-1/3 flex items-center justify-center p-6">
      <div className="profileImageWrapper">
        <div className="profileImageGlow"></div>
        <Image
          src={Avatar}
          alt="Profile Picture"
          layout="fill"
          className="profileImage"
        />
      </div>
        
      </div>
      <div className="w-2/3 flex flex-col justify-center pl-6 p-6">
        <h2 className="profileName">Serhii Smilianets</h2>
        <p className="certifiedText">Certified Salesforce Commerce Cloud Developer</p>
        <p className="jobTitle">Web developer</p>
      </div>
    </>
  );
};

export default Home;
