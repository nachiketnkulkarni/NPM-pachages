import { useEffect, useRef } from "react";

function index(callback, delay) {
  const savedCallback = useRef();

  //remember latest function
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function apiCall() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(apiCall, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default index;
