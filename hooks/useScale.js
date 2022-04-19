import { useEffect, useRef, useState } from "react";

const useScale = () => {
  const ref = useRef();

  const [scale, setScale] = useState(1);

  const scaleFunc = () => {
    const scale = Math.min(
      document.documentElement.clientWidth / 1080,
      document.documentElement.clientHeight / 1080
    );
    setScale(scale);
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      scaleFunc();
    });
  }, []);

  useEffect(() => {
    scaleFunc();
    if (ref.current) {
      ref.current.style.transform = "scale(" + scale + ")";
    }
  }, [scale]);

  return { ref, scale };
};

export default useScale;
