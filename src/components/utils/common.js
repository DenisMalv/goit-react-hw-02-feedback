const ucFirstChar = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

export default ucFirstChar