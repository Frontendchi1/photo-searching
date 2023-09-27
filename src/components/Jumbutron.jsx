import React, { useState } from 'react';

function Jumbutron({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const jumbutronStyle = {
    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVv_NLgONGe_Cpht4K14DOwxLEI7Yb-Qf6bw&usqp=CAU')`,
    color: isDarkMode ? 'white' : 'black', // Adjust text color based on dark mode state
  };

  const overlayStyle = {
    backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)', // Adjust overlay opacity based on dark mode state
  };
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative ${isDarkMode ? 'dark:bg-dark-primary' : 'bg-gray-900'}`}
      style={jumbutronStyle}
    >
      <div className='absolute inset-0' style={overlayStyle}></div>
      <div className='py-10 text-center max-w-md mx-auto w-full relative z-10'>
        <h1 className={`text-4xl font-bold mb-5 text-white`}>Find Images</h1>
       
        {children}
      </div>
    </div>
  );
}

export default Jumbutron;
