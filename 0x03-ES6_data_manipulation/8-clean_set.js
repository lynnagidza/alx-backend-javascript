export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const valuesArray = Array.from(set);
  const filteredValues = valuesArray.filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
  return cleanedValues.join('-');
}
