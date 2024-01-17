  
  const arr1 = [
    {id: 1, name: 'Tom'},
    {id: 1, name: 'Tom'},
    {id: 2, name: 'Nick'},
    {id: 2, name: 'Nick'},
  ];

  const arr2 = [
    {id: 1, name: 'Tom'},
    {id: 1, name: 'Tom'},
    {id: 1, name: 'Alice'},
    {id: 3, name: 'Nick'},
    {id: 5, name: 'Nick'},
    {id: 2, name: 'Bob'},
  ]


  function merge(arr1, arr2) {
    const dataArr = []
    dataArr.push(...arr1, ...arr2)
    console.log(dataArr)
    const uniqueIds = [];

    const unique = dataArr.filter(element => {
      const isDuplicate = uniqueIds.includes(element.id);
    
      if (!isDuplicate) {
        uniqueIds.push(element.id);
    
        return true;
      }
    
      return false;
    });

    return unique
  }
console.time("merge");
const arr3 = merge(arr1, arr2);
console.log(arr3)
console.timeEnd("merge");


console.log(JSON)
// console.log(JSON.stringify(ru))