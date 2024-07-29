import { useEffect, useState } from "react";

export default function useWidth(){
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setCurrentWidth(window.innerWidth))
        return window.removeEventListener('resize', () => setCurrentWidth(window.innerWidth))
      }, []);

      return currentWidth;
}