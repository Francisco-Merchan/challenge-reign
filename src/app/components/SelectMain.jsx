import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SelectMain = () => {
  const { getData, data } = useContext(AppContext);

  const handleChangeSelect = ({ target }) => {
    getData(target.value, 0);
  };
  return (
    <div className="main-select-container">
      <select className="main-select" onChange={handleChangeSelect}>
        <option
          selected={data.select === null}
          className="main-select-option"
          disabled
        >
          {/* <span>Select your news</span> */}
          Select your news
        </option>

        <option
          selected={data.select === "reactjs"}
          value="reactjs"
          className="main-select-option"
        >
          {/* <img src="https://cdn.zeplin.io/5ef1360ffa198a4932d1bb92/assets/C6E98893-4D99-4C78-81F3-81D5142B8DB1.png" /> */}
          {/* <span>React</span> */}
          React
        </option>

        <option
          selected={data.select === "angular"}
          value="angular"
          className="main-select-option"
        >
          {/* <img src="https://cdn.zeplin.io/5ef1360ffa198a4932d1bb92/assets/014FF507-E4D2-484D-9012-4E9E6FB33FB4.png" /> */}
          {/* <span>Angular</span> */}
          Angular
        </option>

        <option
          selected={data.select === "vuejs"}
          value="vuejs"
          className="main-select-option"
        >
          {/* <img src="https://cdn.zeplin.io/5ef1360ffa198a4932d1bb92/assets/338294A7-A538-4B1B-8947-5A4968B53951.png" /> */}
          {/* <span>Vite</span> */}
          Vue
        </option>
      </select>
    </div>
  );
};

export default SelectMain;
