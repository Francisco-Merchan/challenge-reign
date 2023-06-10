export const appReducer = (initialState = {}, action) => {
  switch (action.type) {
    case "loadingData":
      return {
        ...initialState,
        loading: true,
      };
    case "getData":
      return {
        ...initialState,
        loading: false,
        hits: action.payload.hits.map((hit) => ({ ...hit, isFav: false })),
        message: action.payload.message,
        select: action.payload.select,
        page: action.payload.page,
      };

    case "saveFavorite":
      return {
        ...initialState,
        loading: false,
        fav: action.payload.fav,
        hits: initialState.hits.map((hit) =>
          hit.objectID === action.payload.id
            ? { ...hit, isFav: !hit.isFav }
            : hit
        ),
      };

    case "appError":
      return {
        ...initialState,
        loading: false,
        hits: null,
        message: action.payload.message,
      };

    default:
      return initialState;
  }
};
