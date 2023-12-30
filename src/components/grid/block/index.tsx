
import { FC } from 'react'
import { Container } from './styles'

interface BlockProps {
    colIndex: number
    rowIndex: number
}

const Block: FC<BlockProps> = ({ colIndex, rowIndex }) => {
    return(
        <Container className="block" id={`block-${rowIndex}-${colIndex}`} />
    )
}

export default Block 
