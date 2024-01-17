const data = [
  {
    guid: "1",
    name: "Документация",
    data: {
      isShow: true,
      isChild: true,
      parentTab: "",
      isExpanded: false,
      parentTabForTree: "",
    },
  },
  {
    guid: "2",
    name: "6",
    data: {
      isShow: false,
      isChild: true,
      isExpanded: true,
      parentTabForTree: "1",
    },
  },
  {
    guid: "4",
    name: "5",
    data: {
      isShow: true,
      isChild: false,
      isExpanded: false,
      parentTabForTree: "2",
    },
  },
  {
    guid: "3",
    name: "чтоб был",
    data: {
      isChild: false,
      isExpanded: false,
      parentTabForTree: "",
    },
  },
];

// function buildTree(items, parentGuid = "") {
//   debugger
//   return items.filter(item => item.data.parentTabForTree === parentGuid).map(item => {
//     const children = buildTree(items, item.guid);
//     if (children.length) {
//       item.children = children;
//     }
//     return item;
//   });
// }

// function buildTree(items, parentGuid = "") {
//   debugger
//   let tree = [];

//   for (let i = 0; i < items.length; i++) {
//     let item = items[i];

//     if (item.data.parentTabForTree === parentGuid) {
//       let children = buildTree(items, item.guid);

//       if (children.length > 0) {
//         item.children = children;
//       }

//       tree.push(item);
//     }
//   }

//   return tree;
// }

// function buildTree(data) {
//   const hashTable = Object.create(null);
//   const dataTree = [];
//   data.forEach((item) => (hashTable[item.guid] = { ...item, childNodes: [] }));
//   debugger;
//   console.log(hashTable);
//   data.forEach((item) => {
//     if (item.data.parentTabForTree) {
//       hashTable[item.data.parentTabForTree].childNodes.push(hashTable[item.guid]);
//     } else {
//       dataTree.push(hashTable[item.guid]);
//     }
//   });
//   return dataTree;
// }

function buildTree(data) {
  const hashTable = Object.create(null);
  const dataTree = []
  for (item of data) {
    hashTable[item.guid] = {...item, childNodes: []}
  }
  console.log({hashTable})
  for (item of data) {
    debugger
    if (hashTable[item.data.parentTabForTree]) {
      hashTable[item.data.parentTabForTree].childNodes.push(hashTable[item.guid])
    } else {
      dataTree.push(hashTable[item.guid])
    }
  }
  return dataTree
}
// const createDataTree = dataset => {
//   const hashTable = Object.create(null);
//   dataset.forEach(aData => hashTable[aData.ID] = {...aData, childNodes: []});
//   const dataTree = [];
//   dataset.forEach(aData => {
//     if(aData.parentID) hashTable[aData.parentID].childNodes.push(hashTable[aData.ID])
//     else dataTree.push(hashTable[aData.ID])
//   });
//   return dataTree;
// };

// const tree = buildTree(data);
// console.log(JSON.stringify(tree, null, 2)); // Вывести дерево в формате JSON

const tree = buildTree(data);
console.log(JSON.stringify(tree, null, 2)); // Вывести дерево в формате JSON
console.log(tree); // Вывести дерево в формате JSON
