import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    background: ${({ primary }) => ( primary ? '#f26a2e' : '#077Bf1')};
    white-space: nowrap;
    padding: ${({ big }) => ( big ? '16px 40px' : '10px 32px')};
    color: #ffffff;
    font-size: ${({ big }) => ( big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => ( round ? '50px' : 'none')};

    &:hover {
        background: ${({ primary }) => ( primary ? '#077Bf1' : '#f26a2e')};
        transform: translateY(-2px);
    }
`;