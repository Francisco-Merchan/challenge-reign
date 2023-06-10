import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ArticleCard from "./ArticleCard";
import PaginationComponent from "./PaginationComponent";

const ArticlesMain = () => {
  const { data } = useContext(AppContext);
  console.log(data.hits);
  return (
    <>
      <section className="section-articles-main">
        {data?.hits?.map((hit, index) => (
          <ArticleCard key={index} {...hit} />
        ))}
      </section>
      {data?.hits && <PaginationComponent />}
    </>
  );
};

export default ArticlesMain;
