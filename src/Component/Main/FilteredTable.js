import React from "react";
import { Table } from "react-bootstrap";
import formatMethodValue from "../../Helpers/FormatMethodValue";

const FilteredTable = ({ list }) => {
  return (
    <div className="table-responsive">
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
            <th>Attenuation Level</th>
            <th>Volume</th>
            <th>boil_volume</th>
            <th>Method</th>
            <th>Ingredients</th>
            <th>Food Pairing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{list.name}</td>
            <td>
              <img src={list.image_url} alt="img-url" />
            </td>
            <td>{list.contributed_by}</td>
            <td>{list.first_brewed}</td>
            <td>{list.brewers_tips}</td>
            <td>{list.tagline}</td>
            <td>{list.description}</td>
            <td>{list.abv}</td>
            <td>{list.ibu}</td>
            <td>{list.target_fg}</td>
            <td>{list.target_og}</td>
            <td>{list.ebc}</td>
            <td>{list.srm}</td>
            <td>{list.ph}</td>
            <td>{list.attenuation_level}</td>
            <td>
              {list.volume.value} {list.volume.unit}
            </td>
            <td>
              {list.boil_volume.value} {list.boil_volume.unit}
            </td>
            <td>
              <ul>
                {Object.entries(list.method).map(([key, value], subIndex) => (
                  <li key={subIndex}>
                    <strong>{key}</strong>
                    <p>
                      <li>{formatMethodValue(key, value)}</li>
                    </p>
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {Object.entries(list.ingredients).map(
                  ([key, value], subIndex) => (
                    <li key={subIndex}>
                      <strong>{key}</strong>
                      <p>
                        {Array.isArray(value) ? (
                          value.map((x) => (
                            <li>
                              {x.name}: {x.amount.value} {x.amount.unit}
                            </li>
                          ))
                        ) : (
                          <span>{value}</span>
                        )}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </td>
            <td>
              {list.food_pairing.map((item) => (
                <li>{item}</li>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FilteredTable;
