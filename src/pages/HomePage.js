import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [city, setCity] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city) {
      history.push({ pathname: `${city.toLowerCase()}` });
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="homeContainer">
      <h1>Please Enter A City To Search Restaurants</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city" aria-required="true">
          <span className="inputLabel">City:</span>
          </label>
          <input
            id="city"
            name="city"
            placeholder="Enter a city"
            type="text"
            value={city}
            onChange={handleChange}
          />
          <input className="inputBtn" type="submit" value="Submit" onChange={()=>{}}/>
      </form>
    </div>
  );
};

export default HomePage;