import { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 700;
    setIsMobile(isMobile);
  }, []);
  return {
    isMobile,
  };
};

export default useMobile;
