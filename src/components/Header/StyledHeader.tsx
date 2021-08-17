import styled from 'styled-components';
import {colors, typo} from '../../styled-components/variables';

export const HeaderWrapper = styled.div`
    border-bottom: 1px solid rgba(47,0,121,0.1);
    padding: 20px;
    margin-bottom: 32px;
    color: ${colors.primaryColor};
    font-size: ${typo.titleFontSize};
    font-family: ${typo.fontFamily};
    font-weight: ${typo.fontWeightBold};
    font-style: ${typo.italic};
    margin-bottom: 32px;
`