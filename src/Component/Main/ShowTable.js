import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import formatMethodValue from "../../Helpers/FormatMethodValue";

const ShowTable = ({ list, data }) => {
  const [selectedData, setSelectedData] = useState([]);
  const myArray = [];

  console.log(data);
  console.log(myArray && myArray);
  console.log(selectedData);

  useEffect(() => {
    myArray.push(list);
    if (myArray.length === 0) {
      setSelectedData(data);
    } else {
      setSelectedData(myArray);
    }
  }, []);

  return (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Contributed By</th>
          <th>First Brewed</th>
          <th>Brewers Tips</th>
          <th>Tagline</th>
          <th>Description</th>
          <th>abv</th>
          <th>ibu</th>
          <th>target_fg</th>
          <th>target_og</th>
          <th>ebc</th>
          <th>srm</th>
          <th>ph</th>
          <th>Attenuation_level</th>
          <th>Volume</th>
          <th>boil_volume</th>
          <th>Method</th>
          <th>Ingredients</th>
          <th>Food Pairing</th>
        </tr>
      </thead>
      <tbody>
        {selectedData && selectedData.map((item, id) => (
            console.log(item)
        //   <tr key={id}>
        //     <td>{item.name}</td>
        //     <td>
        //       <img src={item.image_url} alt="img-url" />
        //     </td>
        //     <td>{item.contributed_by}</td>
        //     <td>{item.first_brewed}</td>
        //     <td>{item.brewers_tips}</td>
        //     <td>{item.tagline}</td>
        //     <td>{item.description}</td>
        //     <td>{item.abv}</td>
        //     <td>{item.ibu}</td>
        //     <td>{item.target_fg}</td>
        //     <td>{item.target_og}</td>
        //     <td>{item.ebc}</td>
        //     <td>{item.srm}</td>
        //     <td>{item.ph}</td>
        //     <td>{item.attenuation_level}</td>
        //     <td>
        //       {item.volume.value} {item.volume.unit}
        //     </td>
        //     <td>
        //       {item.boil_volume.value} {item.boil_volume.unit}
        //     </td>
        //     <td>
        //       <ul>
        //         {Object.entries(item.method).map(([key, value], subIndex) => (
        //           <li key={subIndex}>
        //             <strong>{key}</strong>
        //             <p>
        //               <li>{formatMethodValue(key, value)}</li>
        //             </p>
        //           </li>
        //         ))}
        //       </ul>
        //     </td>
        //     <td>
        //       <ul>
        //         {Object.entries(item.ingredients).map(
        //           ([key, value], subIndex) => (
        //             <li key={subIndex}>
        //               <strong>{key}</strong>
        //               <p>
        //                 {Array.isArray(value) ? (
        //                   value.map((x) => (
        //                     <li>
        //                       {x.name}: {x.amount.value} {x.amount.unit}
        //                     </li>
        //                   ))
        //                 ) : (
        //                   <span>{value}</span>
        //                 )}
        //               </p>
        //             </li>
        //           )
        //         )}
        //       </ul>
        //     </td>
        //     <td>
        //       {item.food_pairing.map((item) => (
        //         <li>{item}</li>
        //       ))}
        //     </td>
        //   </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ShowTable;
