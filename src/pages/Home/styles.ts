import styled from "styled-components";

export const HomeContainer = styled.div `
    display: flex;
    flex-direction: row;
    padding: 5.8rem 0;
    width: 100%;

    gap: 3.5rem;

    img {
        width: 29.75rem;
        height: 22.5rem
        
    }

`

export const CardsContainer = styled.div`

`

export const AllContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleContainer = styled.div`
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
    border: 1px solid transparent;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    align-self: stretch;
`

export const SubtitleContainer = styled.div`
    align-self: stretch;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    font-stretch: 100;

    color: ${(props) => props.theme["base-subtitle"]};
`

export const ProductsArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    flex-wrap: wrap;
`