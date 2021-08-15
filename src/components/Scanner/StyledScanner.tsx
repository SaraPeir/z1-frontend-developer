import styled from 'styled-components';
import {colors} from '../../styled-components/variables';
import './Scanner.scss'

export const ScannerLine = styled.div`
    background-color: red; 
    width: 100%;
    height: 0;
    position: absolute;
    top: 5%;
    z-index: 100;
    animation: ${props =>
        props.theme.isBeingAnalyzed && 'example 4s'};
    animation-delay: 1s;
`