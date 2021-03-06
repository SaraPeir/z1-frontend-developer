import styled from 'styled-components';
import {PhotoGenericContainer, GenericWrapper, NoStyledButton} from '../../styled-components/commons'
import {colors} from '../../styled-components/variables'
import Wood from '../../wood.jpeg';

export const CameraWrapper = styled(GenericWrapper)`
    background-size: cover;
    background-color: ${colors.cameraBackground};
    color: ${colors.whiteColor};
    position: relative;
    padding-top: 100px;
`

export const CameraContainer = styled(PhotoGenericContainer)`
    width: 290px;
    height: 180px;
    margin-top: 56px;
    background-color: ${colors.whiteColor};
    border: ${props =>
        props.theme.apiHasBeenCalled && (props.theme.hasPhotoBeenTakenCorrectly ? `2px solid ${colors.acceptedColor}` : `2px solid ${colors.errorColor}`)};
    background-image: url(${Wood});
    background-size: cover;
`

export const PhotoContainer = styled(PhotoGenericContainer)`
    border: ${props =>
        props.theme.isAccepted ? `2px solid ${colors.acceptedColor}` : `2px solid ${colors.errorColor}`};
`

export const CameraCancelButton = styled(NoStyledButton)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 126px;
`