
//typings imports
import { GRID, NUMBERS } from 'typings'

interface RowInput {
    grid: GRID
    row: number
    value: NUMBERS
}

/**
 * 
 * @param input Object with 9X9 Sudoku Grid, row index and value
 * @returns function returns true if the value is already being used in the current grid row.
 */

function isInRow({ grid, row, value }: RowInput): boolean {
    return grid[row].includes(value)
}

export default isInRow 
