
import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        align-items: center;
        background-color: ${theme.colors.white};
        border: solid 1px ${theme.colors.black};
        cursor: pointer;
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 0;
        font-size: 20px;
        font-weight: bold;
        justify-content: center;
        transition: ${theme.transition};
        user-select: none;

        &:before {
            padding-top: 100%;
            content: '';
        }

        &:hover {
            background-color: ${theme.colors.lightBlue};
        }
    `}
`
