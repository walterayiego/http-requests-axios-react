import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      const { joke } = data;
      setJoke(joke);
    } catch (error) {
      console.log(error);
    }
    console.log("fetch dad joke");
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        Random Joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;
