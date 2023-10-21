import {buildings} from './mapRecords'

// index of gray/hallway and door tiles: 
// let HALLWAYTILE = 6;
 
enum Tiles {
    HallwayTile = 6,
    LeftDoor = 908,
    CenterDoor = 909,
    RightDoor = 910,
    OpenRightDoor = 305,
    OpenLeftDoor = 304
}

// map that corresponds a room number with the indices of the door
var doorRoomMap: Map <number, number> = new Map();

//Set of hallway indices
var isVisited: Map <number, Boolean> = new Map();

// adjacency list of each valid tiles' index
var adjLst: Map <number, Set<number>> = new Map();

// how can I make the code below dynamic? am I referencing them correctly?
let buildingFloorObject = buildings.freyHall.floor2

let indoorMap: number[] = buildingFloorObject.array
let indoorMapRows: number = buildingFloorObject.rows
let indoorMapCols: number = buildingFloorObject.cols
// const currentMap = indoorTileMap.buildingName.floorNumber.array

// this method returns an adjacency list map of vertices and their valid edges, a map of hallway and door tiles for an isVisited boolean map
const makeAdjLst = (map: number[], rows: number, cols: number) => {
    //use a set instead of a map for isVisited
    var hallwayTilesIndex: Set <number> = new Set();
    var adjLst: Map <number, Set<number>> = new Map();

    for (let index = 0; index < rows*cols; index++){
        const tileNumber = map[index]
        switch(tileNumber){
            case (Tiles.HallwayTile):
                const adjObject = checkNeighbors(index, map, rows, cols)
                break;
            case (Tiles.LeftDoor):
                break;
            case (Tiles.CenterDoor):
                break;
            case (Tiles.RightDoor):
                break;
            case (Tiles.OpenRightDoor):
                break;
            case (Tiles.OpenLeftDoor):
            break;
            default: break;
        }
}
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
        console.log('indexAbove', indexAbove, 'mapValue', map[indexAbove])
    } 
    // Index below current tile: numCol tiles forward
    if (index + cols < ((rows*cols)+1)){
        indexBelow = index + cols 
        if (Object.values(Tiles).includes(map[indexBelow]))
        neighbors.add(indexBelow)
        console.log('indexBelow', indexBelow, 'mapValue', map[indexBelow])
        
    } 
    // Index left of tile: 1 tile back
    if ((index > 0) && ((index-1) % cols !== 0)){
        indexLeft = index - 1
        if (Object.values(Tiles).includes(map[indexLeft]))
        neighbors.add(indexLeft)
        console.log('indexLeft', indexLeft, 'mapValue', map[indexLeft])

    }
    // Index right of tile: 1 tile forward
    if ((index) % cols !== 0){
        indexRight = index + 1
        if (Object.values(Tiles).includes(map[indexRight]))
        neighbors.add(indexRight)
        console.log('indexRight', indexRight, 'mapValue', map[indexRight])
       
    }

    return neighbors

}




// const params = makeAdjLst(doorRoomMap, doorIndexMap, hallwayIndexMap, adjLst, indoorTileMap);

// const { doorRoomMap, doorIndexMap, hallwayIndexMap, adjLst, indoorTileMap } = params;


