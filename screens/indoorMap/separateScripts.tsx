// Scripts to help with creating a list of indices for tiles
// Prompt: I need to create a list of all hallway tile indices on a specific floor

// This is a script to generate all indices for a specific type of tile given a map

// This is a script to help generate the x and y coordinates of a tile given a map and the num of rows and cols, and index


// This is a script to help convert XY coordinates into a single index
export function convertXYToIndex (inputRow: number, inputCol: number, totCols: number){
    return (inputRow * (totCols + 1) + inputCol)
}
