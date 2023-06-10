import React, { useReducer } from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "../reducers/appReducer";
import { types } from "../reducers/types";
import { dataAxios } from "../assets/axios/dataAxios";

const init = () => {
  return {
    hits: null,
    fav: JSON.parse(localStorage.getItem("fav")) || [],
    select: null,
    loading: null,
    message: null,
    page: null,
  };
};

const AppProvider = ({ children }) => {
  const [data, dispatch] = useReducer(appReducer, {}, init);

  const getData = async (query, page = 0) => {
    dispatch({ type: types.loading });
    localStorage.setItem("select", query);
    try {
      const { data } = await dataAxios.get(`?query=${query}&page=${page}`);
      dispatch({
        type: types.getData,
        payload: {
          hits: data.hits,
          select: query,
          message: "Data Received Successfully",
          page,
        },
      });
    } catch (e) {
      dispatch({
        type: types.appError,
        payload: {
          message: "Error",
        },
      });
    }
  };

  const saveFavorites = (id) => {
    dispatch({ type: types.loading });
    const hit = data.hits.find((hit) => hit.objectID === id);

    const newFavs = hit.isFav
      ? data.fav.filter((hit) => hit.objectID != id)
      : [...data.fav, { ...hit, isFav: true }];

    localStorage.setItem("fav", JSON.stringify(newFavs));

    dispatch({
      type: types.saveFavorite,
      payload: {
        fav: newFavs,
        id,
      },
    });
  };

  return (
    <AppContext.Provider value={{ data, getData, saveFavorites }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
