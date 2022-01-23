import { useRef, useState, useEffect } from "react";

export default function useDebounce<T>(
  value: T,
  delay: number,
  cb?: () => void
) {
  const [debounceVal, setDebounceVal] = useState(value);
  const previousVal = useRef(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (previousVal.current !== value) {
        setDebounceVal(value);
        previousVal.current = value;

        if (cb) {
          cb();
        }
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, cb]);

  return debounceVal;
}
