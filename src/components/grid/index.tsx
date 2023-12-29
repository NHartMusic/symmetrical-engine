
import React, { FC, Children } from 'react'

const Grid: FC = () => {

    return (
        <div className="grid-container">
            {Children.toArray([...Array(9)].map((_, rowIndex) => (
                <div className="grid-row-container">
                        {Children.toArray([...Array(9)].map((_, colIndex) => (
                            <div className="block"></div>
                        ))
                    )}
                </div>
                ))
            )}
        </div>
    )
}

export default Grid 
