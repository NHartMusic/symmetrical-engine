
import { FC } from 'react'

interface BlockProps {
    colIndex: number
    rowIndex: number
}

const Block: FC<BlockProps> = ({ colIndex, rowIndex }) => {
    return(
        <div className="block">
           | {rowIndex} 
           {colIndex} |
        </div>
    )
}

export default Block 
