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
            const adjObject = checkNeighbors(index, map, rows, cols);
            adjLst.set(index, adjObject);
            if (tileNumber != Tiles.HallwayTile)
            hallwayTileIndices.add(index)
          }
          
    }
    return {adjLst, hallwayTileIndices}
}

export function checkNeighbors (index: number, map: number[], rows: number, cols: number): Set <number> {
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







// const params = makeAdjLst(doorRoomMap, doorIndexMap, hallwayIndexMap, adjLst, indoorTileMap);

// const { doorRoomMap, doorIndexMap, hallwayIndexMap, adjLst, indoorTileMap } = params;


