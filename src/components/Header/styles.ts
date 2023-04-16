import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
        
        width: 84.95px;
        height: 40px;

        
        
    }
`

export const Location = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    width: 9.5rem;
    height: 2.5rem;

    background: ${(props) => props.theme["purple-light"]};

    flex-grow: 0;
    border-radius: 6px;

    color: ${(props) => props.theme["purple-100"]};

    span {
        font-size: 14px;
        line-height: 130%;
        color: ${(props) => props.theme["purple-dark"]};
    }

`

export const Navigator = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;

    nav {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;

        border-radius: 6px;

        background: ${(props) => props.theme["yellow-light"]    };
        color: ${(props) => props.theme["yellow-dark"]};
        
        span {
            color: ${(props) => props.theme["yellow-dark"]};
        }
        
        
    }
`