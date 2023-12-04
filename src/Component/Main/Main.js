import React, { useEffect } from "react";
import TableComponent from "./TableComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../Redux/actionTypes/dataAction";

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataList);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => dispatch(addData(response.data)));
  }, []);

  return (
    <div className="container-fluid">
      <TableComponent data={data.dataList} />
    </div>
  );
};

export default Main;
