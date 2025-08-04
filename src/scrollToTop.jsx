import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // or "smooth" if you want a scroll animation
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
