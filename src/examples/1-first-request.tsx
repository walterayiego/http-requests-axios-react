import { useEffect } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";
const url2 = "http://localhost:4000";
export const api = axios.create({
  baseURL: url2,
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need (e.g., authorization)
  },
});

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      // const res = await api.get("/");
      const { data } = await api.get("/users");
      console.log(data, "data");
    } catch (error) {
      console.log(error);
      // alert(error.message);
    }
  };

  const fetchDataFetch = async () => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("first axios request");
  }, []);

  return (
    <div>
      <h2>first request</h2>
      <button onClick={fetchData}>fetch data</button>
      <br></br>
      <br></br>
      <button onClick={fetchDataFetch}>fetch data fetch</button>
    </div>
  );
};

export default FirstRequest;
