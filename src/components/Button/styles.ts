import { cssVar, transparentize } from "polished";
import styled, { css } from "styled-components";


interface ButtonProps {
    outline: boolean
    btnColor?: string
}

export const Container = styled.button<ButtonProps>`

    outline: none;
    border-radius: 43.5px;
    font-wieght: 700;
    font-size: 1.2ren;
    text-transform: uppercase;
    display: block;
    width: 100%;
    padding: 20px 0;
    transition: ease-in .4s;


    ${({outline, btnColor}) => outline ? css`
    border: 1px solid ${btnColor ? btnColor : '#5E3EA1'};
    background-color: var(--white);
    color: ${btnColor ? btnColor : '#5E3EA1'};

    &:hover{
        transition: ease-in .2s;
    background-color: ${btnColor ? transparentize(0.7, btnColor)
        : '#F5F0FF'};
    color: ${btnColor ? btnColor : '#5E3EA1'};
    }
    `: css`
    border: none;
    background-color: ${btnColor ? btnColor : '#5E3EA1'};
    color: var(--white);

    &:hover{
    background-color: ${btnColor ? transparentize(0.7, btnColor)
        : '#F5F0FF'};
    color: ${btnColor ? btnColor : '#5E3EA1'};
    }
    `}
`;