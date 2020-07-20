export function selectData(data) {
  console.log(data)
  return {
    type: 'SELECT_DATA',
    data
  };
}
