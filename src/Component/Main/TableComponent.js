import React from "react";
import { useSelector } from "react-redux";
import filteredData from "../../Helpers/FilteredData";
import ShowTable from "./ShowTable";

const TableComponent = ({ data }) => {
  const option = useSelector((state) => state.option);
  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      {option ? (
        <ShowTable list = {(filteredData(data, option))} />
      ) : (
        <ShowTable data={data}/>
      )}
    </div>
  );
};

export default TableComponent;
