import React from "react";
import { useSelector } from "react-redux";
import filteredData from "../../Helpers/FilteredData";
import FilteredTable from "./FilteredTable";
import Pagination from "./Pagination";

const TableComponent = ({ data }) => {
  const option = useSelector((state) => state.option);
  const dataFromRedux = useSelector((state) => state.dataList);
  const items = [dataFromRedux];
  const itemsPerPage = 2;
  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      {option ? (
        <FilteredTable list = {(filteredData(data, option))} />
      ) : (
        <Pagination items={items} itemsPerPage={itemsPerPage}/>
      )}
    </div>
  );
};

export default TableComponent;
