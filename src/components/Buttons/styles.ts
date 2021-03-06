import styled from "styled-components";

export const Btn = styled.button`
    width: 5rem;
    height: 5rem;
    background-color: #303030;
    color: #eff0f1bb;
    border-radius: 0.5rem;
    cursor: pointer;

    /* &:hover {U
        background-color: #1f222f;
    } */

    &:active {
        background-color: #1f2222;
    }
`;

export const Container = styled.div`
    width: 22rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;
`;
