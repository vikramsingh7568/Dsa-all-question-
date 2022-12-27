

const matrix =[
    [0,1,0],
    [1,0,1],
    [0,1,0]
]
console.log(matrix[0][0])

// Adjacency List of the graph 
// vertices are stored in a map like data structure , and every vertex stores a list of its 
// adjacent vertices
// A-> B
// B-> A,c
// C-> B

adjacencyList = {
    'A': ["B"],
    'B': ['A','C'],
    'C': ['B']
}
console.log(adjacencyList)

// Adjacency Matrix vs Adjacency List
// With an adjacency list, we only need to store the values for the edges that exist.
// With adjacency matrix, you store vlues irrespective of whether and edge an edge exist or
// not. Storage wise, and adjacency list is way more efficient 

//With adjacency list, inserting and finding adjacent nodes is constant time
// complexity whereas with adjacency matrix, it is linear time complexity.

//An adjacency list allows you to store additional values with an edge such as 
// wieght of the edge. with adjacency matrix, suc information would have 

// to be stored extrnally


// Adjacency List Representaiton


