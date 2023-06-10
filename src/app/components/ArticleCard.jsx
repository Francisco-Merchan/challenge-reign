import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const ArticleCard = ({ story_title, story_url, author, objectID, isFav }) => {
  const { saveFavorites } = useContext(AppContext);

  const handleFavorite = (id) => {
    saveFavorites(id);
  };

  return (
    <article className="article-main">
      <Link to={story_url} target="_blank">
        <div>
          <p className="article-main-hours">2 hours ago by {author}</p>
          <p className="article-main-text">{story_title}</p>
        </div>
      </Link>
      <div className="article-main-fav-icon">
        <img
          onClick={() => handleFavorite(objectID)}
          src={
            isFav
              ? "https://cdn.zeplin.io/5ef1360ffa198a4932d1bb92/assets/50A062FF-2C1E-4F53-9DDF-16A4B0AC0BA6.svg"
              : "https://cdn.zeplin.io/5ef1360ffa198a4932d1bb92/assets/5B13AAF5-2303-4476-864F-55F0F10D444E.svg"
          }
        />
      </div>
    </article>
  );
};

export default ArticleCard;
