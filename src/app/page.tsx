import Image from 'next/image';
import { FC } from 'react';
import Avatar from '../../public/avatar.jpg';

const Home: FC = () => {
  return (
    <>      
      <div className="w-1/3 flex items-center justify-center p-6">
        <Image
          src={Avatar}
          alt="Profile Picture"
          width={600}
          className="border-4 border-gray-300"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-center pl-6 p-6">
        <h1 className="text-5xl font-bold">Serhii Smilianets</h1>
        <p className="text-gray-600 text-2xl mt-4">Certified Salesforce Commerce Cloud Developer</p>
        <p className="text-gray-600 text-2xl mt-4">Web developer</p>
      </div>
    </>
  );
};

export default Home;
