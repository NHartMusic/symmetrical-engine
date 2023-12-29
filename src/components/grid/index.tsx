
import { FC, Children } from 'react'
//components
import Block from './block'
//styles
import { Container, Row } from './styles'

const Grid: FC = () => {

    return (
        <Container className="grid-container">
            {Children.toArray([...Array(9)].map((_, rowIndex) => (
                <Row className="grid-row-container">
                        {Children.toArray([...Array(9)].map((_, colIndex) => (
                            <Block colIndex={colIndex} rowIndex={rowIndex} />
                        ))
                    )}
                </Row>
                ))
            )}
        </Container>
    )
}

export default Grid 
