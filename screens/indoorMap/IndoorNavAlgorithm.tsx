import {buildings} from './mapRecords'

// IDs for tiles 
enum Tiles {
    HallwayTile = 6,
    LeftDoor = 908,
    CenterDoor = 909,
    RightDoor = 910,
    OpenRightDoor = 305,
    OpenLeftDoor = 304
}

//Set of hallway indices
var hallwayTileIndices: Set <number> = new Set();

// adjacency list of each valid tiles' index
var adjLst: Map <number, Set<number>> = new Map();

// how can I make the code below dynamic? 
let buildingFloorObject = buildings.freyHall.floor2

// const currentMap = indoorTileMap.buildingName.floorNumber.array

// this method returns an adjacency list map of vertices and their valid edges, a set of hallwayTiles for the bfs algorithm
export function makeAdjLst (map: number[], rows: number, cols: number) {
    if (!map || !Array.isArray(map) || map.length === 0) {
        throw new Error('Invalid map data. Please provide a valid non-empty map array.');
      }
      if (rows <= 0 || cols <= 0) {
        throw new Error('Invalid rows or cols. Please provide positive values.');
      }    
    var hallwayTileIndices: Set <number> = new Set();
    var adjLst: Map <number, Set<number>> = new Map();

    // loop through entire map
    for (let index = 0; index < rows*cols; index++){
        const tileNumber = map[index]
        if (
            tileNumber === Tiles.HallwayTile ||
            tileNumber === Tiles.LeftDoor ||
            tileNumber === Tiles.CenterDoor ||
            tileNumber === Tiles.RightDoor ||
            tileNumber === Tiles.OpenRightDoor ||
            tileNumber === Tiles.OpenLeftDoor
          ) {
            // adjObject are the neighbors of the current node
            const adjObject = checkNeighbors(index, map, rows, cols);
            adjLst.set(index, adjObject);
            if (tileNumber != Tiles.HallwayTile)
            hallwayTileIndices.add(index)
          }
          
    }
    return {adjLst, hallwayTileIndices}
}

export function checkNeighbors (index: number, map: number[], rows: number, cols: number): Set <number> {
    if (!map || !Array.isArray(map) || map.length === 0) {
        throw new Error('Invalid map data in checkNeighbors function. Please provide a valid non-empty map array.');
      }
    cols = cols + 1
    let indexAbove = -1
    let indexBelow = -1
    let indexRight = -1
    let indexLeft = -1
    let neighbors: Set<number> = new Set();
    // Index of tile above current tile: numCol tiles back
    if ((index - (cols)) > 0){
        indexAbove = index - cols 
        // if the index is a hallway or door tile, then add to neighbors list
        if (Object.values(Tiles).includes(map[indexAbove]))
        neighbors.add(indexAbove)
        // console.log('indexAbove', indexAbove, 'mapValue', map[indexAbove])
    } 
    // Index below current tile: numCol tiles forward
    if (index + cols < ((rows*cols)+1)){
        indexBelow = index + cols 
        if (Object.values(Tiles).includes(map[indexBelow]))
        neighbors.add(indexBelow)
        // console.log('indexBelow', indexBelow, 'mapValue', map[indexBelow])
        
    } 
    // Index left of tile: 1 tile back
    if ((index > 0) && ((index-1) % cols !== 0)){
        indexLeft = index - 1
        if (Object.values(Tiles).includes(map[indexLeft]))
        neighbors.add(indexLeft)
        // console.log('indexLeft', indexLeft, 'mapValue', map[indexLeft])

    }
    // Index right of tile: 1 tile forward
    if ((index) % cols !== 0){
        indexRight = index + 1
        if (Object.values(Tiles).includes(map[indexRight]))
        neighbors.add(indexRight)
        // console.log('indexRight', indexRight, 'mapValue', map[indexRight])
       
    }

    return neighbors

}

export function bfs (adjLst: Map <number, Set<number>>, start: number, target: number, isVisited: Set <number>, hallwayTileIndices: Set<number>): number[]{
    if (!(adjLst instanceof Map) || typeof start !== 'number' || typeof target !== 'number' || !(isVisited instanceof Set) || !(hallwayTileIndices instanceof Set)) {
        throw new Error('Invalid parameters. Please provide valid arguments.');
      }      
    // in js and ts, sets/arrays/objects are passed by reference so the underlying object is referred to by the same memory address. that's why I am creating a new set and setting it to isVisited
    isVisited = new Set(hallwayTileIndices)
    isVisited.delete(start)
    isVisited.delete(target)
        // I will take an iterative approach using a while loop and a queue (in the form of an array) to keep track of potential neighbors
    let queue: number[][] = [];
    // initialize queue with the starting node in its own array (because it will be built on as we traverse the queue)
    queue.push([start]);
    while (queue.length !== 0){
        // pop first element (list) of the queue
        // The shift method may return undefined if the array is empty. So, it's a good practice to check if the array is not empty before using shift
        let currLst: number[] | undefined = queue.shift();
        if (currLst === undefined) throw new Error("currLst is empty")
        // get last element in list (without removing it) and mark it as visited
        let currIndex:number = currLst[currLst.length - 1]
        isVisited.add(currIndex)
        // find neighbors of that element
        let neighbors: Set <number> | undefined = adjLst.get(currIndex)
        if (neighbors === undefined) throw new Error("neighbors set is empty")
        // for each unvisited neighbor, if it's the destination node, add destination node to the current list and return it
        for (const neighbor of neighbors){
            if (neighbor === target) {
                currLst.push(neighbor)
                return currLst
            }
         // else if it's unvisited add it to the current list (as a new list) and push it into the end of the queue
            else if (!isVisited.has(neighbor)) {
                let newLst: number [] = [...currLst, neighbor]
                queue.push(newLst)
            }           
        }
    }
    // In the end, if the queue is empty and the final set is the start node, return “no neighbor” 
    // make sure method that takes this result handles it properly
    return []    
        
        

}

// Write a script to generate the X and Y path of a line given a path generated by the BFS algorithm 
export function generatePath (pathIndices: number [], cols: number, tileSize: number): string {
    if (!pathIndices || !cols || !tileSize) {
        throw new Error('Invalid parameters. Please provide valid arguments.');
      }
    // Will need a string (initialized to “M”)
    let s: string = ""
    // For each number in the set, convert it into x and y coordinates
    // Except for the first coordinate, attach a space and a “L” to the string, and then attach the x coordinate to the string, a space, and then the y coordinate
    for (let index of pathIndices){
        s += " L"
        let colX = ((index % (cols + 1)) * tileSize) + tileSize/2
        // I'm attaching "+ tileSize/2" because the path/line we draw has to appear in the middle of the hallwaytile
        // let rowY = (Math.floor(index/cols) * tileSize) + tileSize/2
        let rowY = (Math.floor(index/(cols+1)) * tileSize) + tileSize/2

        s += colX + " " + rowY
    }
    // Extract the rest of the string starting from the third character and concatenate the new characters.
    s = "M" + s.slice(2);
    return s;
}

// ChooseDoorIndices method: when the user enters their desired room numbers (which will be from the fixed list we created), 
    // we will send those room numbers to a function that will determine the door indices that will give them the shortest path.
    // function below returns start and end index for the bfs algorithm
export function chooseDoorIndices (start: string, end: string, map: Map <string, number []> , cols: number){
    // Input: start room number (string), end room number (string), map of associations (map: key= string, value = array), number of columns (number)
    if (map === undefined) throw new Error("Map is empty")
    if (!(map.has(start) && map.has(end))) throw new Error("Invalid start and end")
    // get all possible door indices for the start room number and end room number
    const startDoorIndices = map.get(start);
    const endDoorIndices = map.get(end);
    if (startDoorIndices === undefined || endDoorIndices === undefined) {
        throw new Error("Start or end door indices array are undefined");
    }    
    // If the value (which is an array) is of size 1, then just return their corresponding door indices. 
    if (startDoorIndices.length === 1 && endDoorIndices.length === 1) {
        return { start: startDoorIndices[0], end: endDoorIndices[0] };
    }
    // Else find all possible combinations of start and end indices. 
    // HOW: loop through every element in startDoorIndices, and loop through every element in endDoorIndices, 
    // combine them in an array and add it to a new list
    const allCombinations: { start: number; end: number }[] = [];

    for (const startIndex of startDoorIndices) {
        for (const endIndex of endDoorIndices) {
        allCombinations.push({ start: startIndex, end: endIndex });
        }
    }
    // Calculate distances for each combination and find the minimum distance
    let minDistance = Number.MAX_VALUE;
    let minDistanceIndices: { start: number; end: number } = { start: 0, end: 0 };

    for (const combination of allCombinations) {
        const startCoordinates = getCoordinates(combination.start, cols);
        const endCoordinates = getCoordinates(combination.end, cols);

        const distance = calculateDistance(startCoordinates, endCoordinates);

        if (distance < minDistance) {
        minDistance = distance;
        minDistanceIndices = combination;
        }
    }

    return minDistanceIndices;
    }
    // Convert indices to x and y coordinates, find distance between the coordinates, somehow store those values, and return the minimum distanced indices 
    // for every element in the new list, index 0 of the array is the startdoorIndex, and index 1 is the endDoorIndex
    // take those indices out, convert them to x and y coordinates and calculate the distance between them.
    // set it as the shortest distance, and compare to all other calculated distances 
    // Helper function to convert indices to x and y coordinates
function getCoordinates(index: number, cols: number): { x: number; y: number } {
    const x = index % (cols+1);
    const y = Math.floor(index / (cols+1));
    return { x, y };
  }
  
  // Helper function to calculate Euclidean distance between two points
  function calculateDistance(point1: { x: number; y: number }, point2: { x: number; y: number }): number {
    const deltaX = point2.x - point1.x;
    const deltaY = point2.y - point1.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
    





// const params = makeAdjLst(doorRoomMap, doorIndexMap, hallwayIndexMap, adjLst, indoorTileMap);

// const { doorRoomMap, doorIndexMap, hallwayIndexMap, adjLst, indoorTileMap } = params;


