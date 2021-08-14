import styled from 'styled-components';
import {PhotoContainer, GenericWrapper} from '../../styled-components/commons'
import {colors} from '../../styled-components/variables'


export const HomeWrapper = styled(GenericWrapper)`
    background-color: ${colors.whiteColor};
    position: relative;
`

export const HomeDefaultPhotoContainer = styled(PhotoContainer)`
    padding: 24px 18px 18px;
    margin: auto;
    background-color: ${colors.whiteColor};
    box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
    position: relative;
`

