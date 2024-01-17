// // поиск кратчайшего пути в графе
// //
// //              7
// //       B - - - - - F\
// //      /        /  |  \ 1
// //  2  /      2/    |   \
// //   /       D      |     G
// // A\      /        | 1
// //   \   5/         |
// //  1 \  /          |
// //      C - - - -  E
// //            2
// //
// //

// const graph = {};
// graph.a = {b: 2, c: 1};
// graph.b = {f: 7};
// graph.c = {d: 5, e: 2};
// graph.d = {f: 2};
// graph.e = {f: 1};
// graph.f = {g: 1};
// graph.g = {};

function showShortPath(graph, start, end) {
  debugger;
  const distances = {}; // Хранение расстояний от начальной вершины
  const visited = {}; // посещенные вершины
  const parents = {}; // Хранение предков вершин
  // Инициализация расстояний и предков
  for (let node in graph) {
    parents[node] = null;
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (true) {
    let closestNode = null; // ближайщий узел
    let shortestDistance = Infinity;
    // debugger
    // Находим ближайшую непосещенную вершину
    for (let node in graph) {
      if (visited[node] === undefined && distances[node] < shortestDistance) {
        shortestDistance = distances[node];
        closestNode = node;
      }
    }
    if (closestNode === null || closestNode === end) {
      break; // Путь не найден или достигнута конечная вершина
    }
    visited[closestNode] = true;

    // Обновление расстояний и предков для соседних вершин
    for (let neighbor in graph[closestNode]) {
      let distance = graph[closestNode][neighbor]; // b 2
      let totalDistance = distances[closestNode] + distance; // 2

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        parents[neighbor] = closestNode;
      }
    }
  }

  if (parents[end] === null) {
    return "путь не найден"; // Путь не найден
  }

  // Восстановление пути от конечной вершины к начальной
  const path = [end];
  let parent = parents[end];
  while (parent !== null) {
    path.unshift(parent);
    parent = parents[parent];
  }

  return { path, distances }; // Возвращаем найденный путь и дистанция
}

const graph = {};
graph.a = { b: 6, c: 2 };
graph.b = { d: 1 };
graph.c = { b: 3, d: 3 };
graph.d = {};

function shortestDistance(graph, start, end) {
  const parents = {}; // предки вершин
  const distances = {}; // расстояние
  let visited = new Set();

  for (let node in graph) {
    parents[node] = null;
    distances[node] = Infinity;
  }

  // начальную точку ставим дистаницию ноль
  distances[start] = 0;
  while (true) {
    let closestNode = null; // ближайщий узел
    let shortestDistance = Infinity;
    // Находим ближайшую непосещенную вершину

    for (let node in graph) {
      if (!visited.has(node) && distances[node] < shortestDistance) {
        closestNode = node;
        shortestDistance = distances[node];
      }
    }
    if (closestNode === null || closestNode === end) {
      break; // Путь не найден или достигнута конечная вершина
    }
    visited.add(closestNode);
    debugger;

    for (let neighbor in graph[closestNode]) {
      let distance = graph[closestNode][neighbor];
      let totalDistance = distances[closestNode] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        parents[neighbor] = closestNode;
      }
    }
  }
  if (parents[end] === null) {
    return "путь не найден"; // Путь не найден
  }
  // Восстановление пути от конечной вершины к начальной
  const path = [end];
  let parent = parents[end];
  while (parent !== null) {
    path.unshift(parent);
    parent = parents[parent];
  }

  return { path, distances }; // Возвращаем найденный путь и дистанция
}
const shortestPathFromAToG = shortestDistance(graph, "a", "d");
console.log("Shortest path:", shortestPathFromAToG);
