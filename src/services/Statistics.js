function calculateTotal(data, attribute) {
  if (!data || data.length === 0) {
      return 0;
    }
  return data.reduce((total, item) => total + item[attribute], 0);
}

function formatNumber(number, value) {
  if (number >= value) {
    const millionValue = (number / value).toFixed(2);
    if(String(value).length === 8) {
      return `${millionValue}B`;
    }
    else if(String(value).length === 7) {
      return `${millionValue}M`;
    }
    else {
      return `${millionValue}K`;
    }
  }
  return number;
};

export { calculateTotal, formatNumber };
