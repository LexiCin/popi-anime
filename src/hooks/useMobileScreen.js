import { useEffect, useState } from "react";

export default function useMobileScreen(breakpoint = 400) {
  const [isSmallScren, setIsSmallScren] = useState(false);

  useEffect(() => {
    const checkScren = () => {
      setIsSmallScren(window.innerWidth <= breakpoint);
    };

    checkScren();

    window.addEventListener("resize", checkScren);

    return () => window.removeEventListener("resize", checkScren);
  }, [breakpoint]);

  return isSmallScren;
}
