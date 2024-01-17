const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];
console.log(graph)

// очередь
function searchNeighbor (start, end) {
 let searchQueue = graph[start]
 while (searchQueue.length > 0) {
    let person = searchQueue.shift()
    if (graph[person].includes(end)) {
        return true
    }
    if (graph[person]) {
        searchQueue.push(...graph[person])
    }
 }
   
 return false
}

console.log(searchNeighbor('you', 'jonny'))