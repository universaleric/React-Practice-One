import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

library.add(faMagnifyingGlass);

function Home() {
  return (
      <div className="home container-fluid">
        <h2 className="homeFont">Let's find a place for you to stay!</h2>
        <form className="d-flex" role="search">
          <input
            className="homeBar form-control me-2"
            type="search"
            placeholder="Type in a city or zip code"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
  );
}

export default Home;
