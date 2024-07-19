import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="flex-grow flex items-center justify-center text-center text-white">
      <div>
        <h1 className="custom-text-size font-bold">Welcome.</h1>
        <p className="text-xl my-4">Manage your tasks easliy with ............</p>
        <div className="my-4">
          <input type="text" placeholder="Search..." className="bg-white p-2 text-black rounded-md w-64" />
          <button className="p-2 ml-2 bg-blue-600 rounded-md hover:bg-blue">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
