import React, { useState } from "react";
import { Form, FormControl, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { selectOption } from "../../Redux/Slice/OptionSlice";

const SearchBarWithDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const data = useSelector((state) => state.dataList);
  const selectedOption = useSelector((state) => state.option);
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownSelect = (selectedOption) => {
    dispatch(selectOption(selectedOption));
    setShowDropdown(false);
  };

  return (
    <>
      <Form inline>
        <div className="search-bar">
          <FormControl
            type="text"
            value={selectedOption}
            placeholder="Search by first_brewed.."
            onClick={handleSearchClick}
            className="input-text"
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} style={{color: "#5f5d54"}}/>
          </button>
        </div>
        <Dropdown show={showDropdown} onSelect={handleDropdownSelect}>
          <Dropdown.Menu className="dropdown-menu">
            {data.dataList.map((item) => (
              <Dropdown.Item eventKey={item.first_brewed}>
                {item.first_brewed}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </>
  );
};

export default SearchBarWithDropdown;
