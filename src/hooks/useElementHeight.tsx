import React, { useState, useEffect, useRef } from 'react';

const useElementHeight = (): [number, React.RefObject<HTMLDivElement>] => {
  const [elementHeight, setElementHeight] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setElementHeight(elementRef.current.offsetHeight);
    }
  }, [elementRef.current]);

  return [elementHeight, elementRef];
};

export default useElementHeight;
