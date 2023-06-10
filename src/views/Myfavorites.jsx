import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ArticleCard from "../app/components/ArticleCard";

const Myfavorites = () => {
  const { data } = useContext(AppContext);

  return (
    <section className="section-articles-main">
      {data?.fav?.map((hit, index) => (
        <ArticleCard key={index} {...hit} />
      ))}
    </section>
  );
};

export default Myfavorites;
