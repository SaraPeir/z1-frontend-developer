import styled from 'styled-components';
import {PhotoGenericContainer, GenericWrapper} from '../../styled-components/commons'
import {colors} from '../../styled-components/variables'


export const HomeWrapper = styled(GenericWrapper)`
    background-color: ${colors.whiteColor};
    position: relative;
`

export const HomeDefaultPhotoContainer = styled(PhotoGenericContainer)`
    padding: 18px 18px;
    margin-top: 24px;
    background-color: ${colors.whiteColor};
    box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
`

export const PhotoContainer = styled(PhotoGenericContainer)`
    border: 2px solid ${colors.errorColor};
    margin: 24px auto;
`
