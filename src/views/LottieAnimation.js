import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://lottie.host/1b4f304b-7a5f-443f-b49d-98a0c38d54b3/01vpJuBpfC.json', // Path to the animation JSON
    });

    return () => animation.destroy(); // Cleanup animation on unmount
  }, []);

  return <div ref={containerRef} style={{ width: '300px', height: '300px' }} />;
};

export default LottieAnimation;
