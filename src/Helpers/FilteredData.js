const filteredData = (data, option) => {
  const filtered = data.find((list) => list.first_brewed === option);
  return filtered;
};

export default filteredData;
