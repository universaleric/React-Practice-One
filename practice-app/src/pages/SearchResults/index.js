import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCity, faPhone, faLink } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import "./style.css";

library.add(faClock, faCity, faPhone, faLink);

function SearchResults() {
  const location = useLocation();
  const data = location.state.response;
  console.log(
    "This is the list from the results page: " + JSON.stringify(data.features)
  );

  return (
    <div className="shelter-container container-fluid">
      {data.features !== undefined && data.features !== null ? (
        <ul className="shelter-list list-group">
          {data.features.map((shelter) => (
            <Fade bottom>
            <li className="shelter-item list-group-item" key={shelter.id}>
              {shelter.attributes.Name !== undefined && shelter.attributes.Name !== null ? (
              <div>
                <h3>{shelter.attributes.Name}</h3>
              </div>) : (
        <></>
      )}
      {shelter.attributes.hours !== undefined && shelter.attributes.hours !== null ? (
              <div>
                <FontAwesomeIcon icon="fa-regular fa-clock" />{" "}
                {shelter.attributes.hours}
              </div>) : (
        <></>
      )}
      {shelter.attributes.addrln1 !== undefined && shelter.attributes.addrln1 !== null ? (
              <div>
                <FontAwesomeIcon icon="fa-solid fa-city" />{" "}
                {shelter.attributes.addrln1}, {shelter.attributes.city}
              </div>) : (
        <></>
      )}
      {shelter.attributes.phones !== undefined && shelter.attributes.phones !== null ? (
              <div>
                <FontAwesomeIcon icon="fa-solid fa-phone" />{" "}
                {shelter.attributes.phones}
              </div>) : (
        <></>
      )}
      {shelter.attributes.url !== undefined && shelter.attributes.url !== null && shelter.attributes.url !== "NULL" ? (
              <div>
                <FontAwesomeIcon icon="fa-solid fa-link" />{" "}
                <strong><a href={"https://" + shelter.attributes.url}>{shelter.attributes.url}</a></strong>
              </div>) : (
        <></>
      )}
      {shelter.attributes.description !== undefined && shelter.attributes.description !== null ? (
              <div className="shelterDescription">
                <em>{shelter.attributes.description}</em>
              </div>) : (
        <></>
      )}
            </li></Fade>
          ))}
        </ul>
      ) : (
        <h3>No Results To Display</h3>
      )}
    </div>
  );
}

export default SearchResults;
