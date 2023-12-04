import React from "react";
import { useSelector } from "react-redux";
import filteredData from "../../Helpers/FilteredData";
import FilteredTable from "./FilteredTable";
import PaginationComponent from "./PaginationComponent";

const TableComponent = ({ data }) => {
  const option = useSelector((state) => state.option);
  
  const items = data;
  const itemsPerPage = 10;

  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      {option ? (
        <FilteredTable list={filteredData(data, option)} />
      ) : (
        <PaginationComponent beers={items} itemsPerPage={itemsPerPage} />
      )}
    </div>
  );
};

export default TableComponent;
