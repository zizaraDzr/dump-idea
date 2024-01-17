// вызов стеком
const tree = {
  value: 1,
  children:[
    {
      value:2,
      children: [
        {value: 3}
      ]
    },
    {
      value:4,
      children: [
        {value: 5},
        {value: 6}
      ]
    },
  ]
}

const rowNode = {
  key: null,
  data: {
    employeeName: 'Marguerite Stanley'
  },
  parent: {
    key: "Bryan Butler",
    data: {
      employeeName: 'Bryan Butlery'
    },
    parent: {
      key: "Mabel Ward",
      data: {
        employeeName: 'Mabel Ward'
      },
      parent: {
        key: "Kathryn Powers",
        data: {
          employeeName: 'Kathryn Powers'
        },
        parent: {
          key: null,
        }
      }
    }
  }
}

function getTreeValues(tree) {
  debugger
  const stack = [tree];
  const result = [];
  while(stack.length > 0) {
    const node = stack.pop();
    if (node.value !== undefined) {
      result.push(node.value)
    }
    if (node.children?.length) {
      stack.push(...node.children)
    }
  }
  return result
}
function getRouteToNode (rowNode) {
  debugger
  // if (!rowNode.parent) {
  //   return []
  // }
    const route = [];
  
    while (rowNode.parent) {
      route.unshift(rowNode.key ? rowNode.key : rowNode.data.employeeName);
      rowNode = rowNode.parent;
    }
  
    return route;
  // return [
  //   ...this.getRouteToNode(rowNode.parent),
  //   rowNode.key ? rowNode.key : rowNode.data.employeeName
  // ]
}

// // recurcive
// function getTreeValuesRecurcive(node) {
//   const values = []

//   function traverse(node) {
//     values.push(node.value)

//     if (node.children) {
//       node.children.forEach(item => {
//         traverse(item)
//       })
//     }
//   }
//   traverse(node)

//  return values
// }
// console.log(getTreeValues(tree))/// [1,4,6,5,2,3]
console.log(getRouteToNode(rowNode))/// [1,4,6,5,2,3]