import React,{ useState } from "react";
import axios from "axios";
import { options} from './apikey';


export const Quotes = () => {
 
  const [quotes, setquotes] = useState("Quotes");

  //buttonHandler
  const giveAdvice = () => {
    axios.request(options).then((response) => {
      setquotes(response.data);
    });
  };
  return (
    <React.Fragment>
      <section className="appQuotes">
        <div className="card">
          <h2 className="heading">{quotes}</h2>
          <button type="button" onClick={giveAdvice} className="quote-btn">
            Get a Quote
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Quotes;
