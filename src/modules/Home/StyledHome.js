import styled from 'styled-components';
import {PhotoContainer, GenericWrapper} from '../../styled-components/commons'
import {colors} from '../../styled-components/variables'

export const HomeWrapper = styled(GenericWrapper)`
    background-color: ${colors.whiteColor};
`

export const HomeDefaultPhotoContainer = styled(PhotoContainer)`
    padding: 24px 18px 18px;
    margin: auto;
    background-color: ${colors.whiteColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

