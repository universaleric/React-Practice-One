import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./style.css";

library.add(faMagnifyingGlass);

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);

  const handleInputChange = (event) => {
    const data = event.target.value;
    console.log(data);
    setSearch(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/LMS_Data_Public/MapServer/158/query?where=ZIP='" +
      search +
      "'or CITY='" +
      search +
      "'&outFields=*&returnGeometry=false&outSR=4326&f=json")
      .then((response) => {
        console.log(response.data);
        let results = response.data
        let test = results.features;
        console.log(test)
        navigate("/results",{state:{response:results}})
      })
      .catch((err) => console.log(err));
    };

  return (
    <div className="homeBackground">
    <div className="home container-fluid">
      <h2 className="homeFont">Let's find a place for you to stay!</h2>
      <form className="d-flex" role="search">
        <input
          className="homeBar form-control me-2"
          type="search"
          placeholder="Type in a city or zip code"
          aria-label="Search"
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>
    </div>
  );
}

export default Home;
