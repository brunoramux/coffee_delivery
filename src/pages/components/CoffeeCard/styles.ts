import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 16rem;
   height: 19.375rem;
   border-radius: 6px 36px;
   align-items: center;
   background: ${(props) => props.theme["base-card"]};

   img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -20px;
   }
   margin-top: 2.5rem;

`

export const BadgeArea = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 4px;
   padding: 0px;
`

export const Badge = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 5rem;
   height: 1.3rem;
   padding: 4px 8px;
   border-radius: 100px;
   font-size: 10px;
   line-height: 130%;
   font-style: normal;
   font-weight: 700;


   background: ${(props) => props.theme["yellow-light"]};
   color: ${(props) => props.theme["yellow-dark"]};
   margin-top: 12px;

`

export const MainCard = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   margin-top: 1rem;
   align-items: center;
   justify-content: center;
   
`

export const Title = styled.span` 
   font-family: 'Baloo 2', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 130%;
   color: ${(props) => props.theme["base-subtitle"]};
`

export const Subtitle = styled.span`
   text-align: center;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;

   color: ${(props) => props.theme["base-label"]};
   margin: 0 1.25rem;
`

export const Footer = styled.footer`
   display: flex;
   flex-direction: row;
   margin-top: 2rem;
   margin-right: 1.5rem;
   margin-left: 1.5rem;
   margin-bottom: 1.25rem;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   color: ${(props) => props.theme["base-text"]};
   align-items: center;
   justify-content: center;
   

`

export const Price = styled.span`
   font-family: 'Baloo 2', sans-serif;
   font-style: normal;
   font-weight: 800;
   font-size: 24px;
   line-height: 130%;
   color: ${(props) => props.theme["base-text"]};
   margin-left: 0.2rem;

`

export const BotaoContainer = styled.div` 
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 0.5rem;
   gap: 4px;
   background: ${(props) => props.theme["base-button"]};
   border-radius: 6px;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: ${(props) => props.theme["base-title"]};
   margin-left: 1.5rem;
`

export const QuantityButton = styled.button` 
   color: ${(props) => props.theme["purple-100"]};
   border: none;
   background: transparent;
`

export const AddCartButton = styled.button`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 0.5rem;
   background: ${(props) => props.theme["purple-dark"]};
   color: ${(props) => props.theme["base-card"]};
   border-radius: 6px;
   border: none;
   margin-left: 0.5rem;
   

`