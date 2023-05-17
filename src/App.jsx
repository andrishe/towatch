import "./App.css";
import { TVShowAPI } from "./Api/tvShow";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/image/Logo.png";

import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const populars = await TVShowAPI.fetchPopulars();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires");
    }
  }

  async function fetRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);

      if (recommendations.length > 0) {
        setRecommendationList(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries recommendées");
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche de la série ");
    }
  }

  return (
    <div
      className="main_container"
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "balck",
      }}
    >
      <div className="header">
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="Watowatch"
              subTitles="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className="tv_show_details">
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className="recommended_shows">
        {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            onClickItem={setCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
