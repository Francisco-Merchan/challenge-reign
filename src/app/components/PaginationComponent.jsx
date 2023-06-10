import React, { useContext } from "react";
import Pagination from "rc-pagination";
import "../../assets/pagination.less";
import { AppContext } from "../../context/AppContext";

const PaginationComponent = () => {
  const { data, getData } = useContext(AppContext);

  const handleChangePage = (e) => {
    getData(data.select, e);
  };

  return (
    <Pagination
      current={data.page === 0 ? 1 : data.page}
      total={200}
      onChange={handleChangePage}
    />
  );
};

export default PaginationComponent;
