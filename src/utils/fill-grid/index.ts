
import { GRID, NUMBERS } from 'typings'
import { shuffle } from 'utils'

const gridTemplate: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/** recursive backtracking algorithm to check for all possible solutions to grid
 * @param grid: 9x9 Sudoku Grid;
*/

function fillGrid(grid: GRID) {
    let row = 0
    let col = 0 

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9)
        col = i % 9 

        if (grid[row][col] === 0) {
            shuffle(numbers)

            for (let value of numbers) {
                //is it not in grid row?
                if (grid[row].includes(value)) {
                    //is it no in the grid col? 
                    for (let i = 0; i < 9; i++) {
                        if (value === grid[i][col]) return true 
                    }
                }
                //is it not in grid column?
                //is it not in grid square?
                //if this is the case 
                grid[row][col] = value 
                //check grid if it is full. if yes, stop and return true
                //otherwise we run fillGrid(grid)
            }

            break
        }
    }

    grid[row][col] = 0
}

export default fillGrid