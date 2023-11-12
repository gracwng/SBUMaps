import { convertXYToIndex } from './separateScripts'

test('generate indices', () => {
    // export function convertXYToIndex (inputRow: number, inputCol: number, totCols starting from index 0: number){
        console.log(convertXYToIndex(8, 4, 42))
        console.log(convertXYToIndex(8, 10, 42))
})

