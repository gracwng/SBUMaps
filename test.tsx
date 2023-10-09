enum Tiles {
    HallwayTile = 6,
    LeftDoor = 908,
    CenterDoor = 909,
    RightDoor = 910,
    OpenRightDoor = 305,
    OpenLeftDoor = 304
}

const isValueIncluded = Object.values(Tiles).includes(304);
console.log(isValueIncluded); // This will print 'true' or 'false' to the console
