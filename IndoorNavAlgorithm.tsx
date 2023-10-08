import Buildings from './mapRecords'

// index of gray/hallway tile: 
let hallwayTile = 6;

// index of door tiles:
let leftDoor = 908
let centerDoor = 909
let rightDoor = 910
let openRightDoor = 305
let openLeftDoor = 304

// create a map that corresponds the index of a door to its corresponding room number

var doorRoomMap = new Map();
var doorIndexMap = new Map();
var hallwayIndexMap = new Map();
var adjLst: [];
let indoorTileMap = Buildings.freyHall.freyFloor2;

const makeAdjLst = (doorRoomMap: Map <number, number>, doorIndexMap: Map <number, boolean>, hallwayIndexMap: Map <number, boolean>, adjLst: number[][], indoorTileMap: number []) => {
for (const tile of indoorTileMap){   
    switch(tile){
        case (hallwayTile):
            break;
        case (leftDoor):
            break;
        case (centerDoor):
            break;
        case (rightDoor):
            break;
        case (openRightDoor):
            break;
        case (openLeftDoor):
        break;
    }
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


