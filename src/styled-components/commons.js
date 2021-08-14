import styled from 'styled-components';
import {colors} from './variables';

// containers
export const GenericWrapper = styled.div`
    width: 100%;
    height: 100vh;
`

export const PhotoGenericContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 160px;
    padding: 8px 0;
    border-radius: 12px;
    margin: auto;
    position: relative;
`



    // padding: 0;
    // margin: auto;
    // border-radius: 12px;
    // position: relative;
    // border: 2px solid ${colors.errorColor};

// typos
export const TitleH1 = styled.h1`
    font-size: 21px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin: 0;
`

export const Paragraph = styled.p`
    font-size: 16px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`

// buttons
export const ButtonPrimary = styled.button`
    height: 48px;
    max-width: 160px;
    box-shadow: 0 10px 20px -5px rgba(47,0,121,0.3);
    border-radius: 24px;
    background-color: ${colors.primaryColor};
    border: none;
    margin: auto;
    padding: 0 12px;
    position: absolute;
    z-index: 100;
    color: ${colors.whiteColor};
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
`

