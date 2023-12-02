const formatMethodValue = (key, value) => {
  if (key === "mash_temp") {
    if (Array.isArray(value) && value.length > 0) {
      const firstMashTemp = value[0];
      if (firstMashTemp.temp && firstMashTemp.temp.value) {
        const tempValue = firstMashTemp.temp.value;
        const tempUnit = firstMashTemp.temp.unit;
        return `value: ${tempValue} ${tempUnit}`;
      } else {
        return `Invalid temperature data`;
      }
    } else {
      return `Invalid temperature data`;
    }
  } else if (key === "fermentation" || key === "twist") {
    if (value && value.temp && value.temp.value) {
      return `value: ${value.temp.value} ${value.temp.unit}`;
    } else {
      return `${value}`;
    }
  } else {
    return `Unknown data format`;
  }
};

export default formatMethodValue;
