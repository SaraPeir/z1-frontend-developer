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
    margin: 24px auto;
    position: relative;
`

export const GenericLabel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 30px;
    min-width: 102px;
    border-radius: 12px;
    padding: 8px;
    color: ${colors.whiteColor};
    size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    z-index: 100;
    position: absolute;
    bottom: -23px;
    right: 24px;
`

export const GenericCameraMessage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    color: ${colors.whiteColor};
    size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`
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
    margin: 16px 30px;
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

export const NoStyledButton = styled.button`
    color: ${colors.whiteColor};
    background: none;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
    border: none;
    margin: auto;
`

