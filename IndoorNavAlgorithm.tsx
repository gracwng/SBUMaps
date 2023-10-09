import Buildings from './mapRecords'

// index of gray/hallway and door tiles: 
let HALLWAYTILE = 6;
 
enum Tiles {
    HallwayTile = 6,
    LeftDoor = 908,
    CenterDoor = 909,
    RightDoor = 910,
    OpenRightDoor = 305,
    OpenLeftDoor = 304
}

// create a map that corresponds the index of a door to its corresponding room number

var doorRoomMap = new Map();
var doorIndexMap = new Map();
var hallwayIndexMap = new Map();
// adjacency list of each valid tiles' index
var adjLst: [];
let indoorTileMap = Buildings.freyHall.freyFloor2.array;

const makeAdjLst = (doorRoomMap: Map <number, number>, doorIndexMap: Map <number, boolean>, hallwayIndexMap: Map <number, boolean>, adjLst: number[][], 
indoorTileMap: Buildings, buildingName: string, floorNumber: string) => {
    const currentMap = indoorTileMap.buildingName.floorNumber
    const rows = currentMap.rows
    const cols = currentMap.cols
    // for (const tile of currentMap.array){   
        for (let i = 0; i < currentMap.array.length; i++){
            const tileNumber = currentMap.array[i]
        switch(tileNumber){
            case (Tiles.HallwayTile):
                const adjObject = checkSurroundingTiles(tileNumber, i, currentMap.array, rows, cols)
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

const checkSurroundingTiles = (tileNumber: number, tileIndex: number, mapArray: number[], rows: number, cols: number) => {
    let indexAbove = -1
    let indexBelow = -1
    let indexRight = -1
    let indexLeft = -1
    let node: number [] = []
    // Index of tile above current tile: numCol tiles back
    if (tileIndex - cols > 0){
        indexAbove = tileIndex + cols
        // if (mapArray[indexAbove] === Tiles.HallwayTile || Tiles.LeftDoor || Tiles.CenterDoor)
        if (Object.values(Tiles).includes(mapArray[indexAbove])) {

        node.push(mapArray[tileIndex])

    } 
    // Index below current tile: numCol tiles forward
    if (tileIndex + cols < (rows*cols)) indexBelow = tileIndex 
    // Index left of tile: 1 tile back
    if (tileIndex + 1)
    // Index right of tile: 1 tile forward

}

const newMaps = {
    doorRoomMap,
    doorIndexMap,
    hallwayIndexMap,
  };

  // Return the object
  return newMaps;

}
// const params = makeAdjLst(doorRoomMap, doorIndexMap, hallwayIndexMap, adjLst, indoorTileMap);

// const { doorRoomMap, doorIndexMap, hallwayIndexMap, adjLst, indoorTileMap } = params;


