import React, { useContext } from "react";
import SelectMain from "../app/components/SelectMain";
import ArticlesMain from "../app/components/ArticlesMain";
import { AppContext } from "../context/AppContext";
import Spinner from "../app/components/Spinner";

const MainApp = () => {
  const { data } = useContext(AppContext);
  return (
    <>
      <SelectMain />
      {data.loading ? <Spinner /> : <ArticlesMain />}
    </>
  );
};

export default MainApp;
