import React, { useEffect, useState } from 'react';

const getWindowSize = () => {
  return window.innerWidth;
};
const UseWindowWidth = () => {
  const [width, setWidth] = useState(getWindowSize());
  useEffect(() => {
    function handleResize () {
      setTimeout(function() {setWidth(()=>getWindowSize())}, 1000);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  return width;
};

export default UseWindowWidth;