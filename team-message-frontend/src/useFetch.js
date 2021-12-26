import React from "react";
const url = "hi";
const useFetch = (url) => {
  console.log("HOHO");
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("shubham");
        const res = await fetch(url, {
          method: "GET",
          mode: "no-cors",
          referrerPolicy: "unsafe-url",
        });
        const json = await res.json();
        setResponse(json);
        console.log(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};

export default useFetch;
