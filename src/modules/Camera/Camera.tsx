import * as React from 'react';
import {CameraWrapper, CameraContainer, PhotoContainer, CameraCancelButton} from './StyledCamera'
import {TitleH1, Paragraph, GenericCameraMessage} from '../../styled-components/commons'
import text from './text';
import {CameraMessage, CameraMessageCorrect} from '../../components/CameraMessage'
import Light from '../../light.svg';
import Correct from '../../correct.svg';
import {document1, document2, document3} from '../../mocked-photos-links'
import { ThemeProvider } from 'styled-components'

const Camera: React.FC<{ hasPhotoTakenCorrectly: boolean, isLightSufficient: boolean }> = ({ children, hasPhotoTakenCorrectly, isLightSufficient }) => {

    const photo = () => {
        return (
          <CameraContainer />
        ) 
    }

      return(
        <CameraWrapper>
          <TitleH1>{text.title}</TitleH1>
          <Paragraph>{text.paragraph}</Paragraph>
          {photo()}
          {hasPhotoTakenCorrectly &&  <CameraMessageCorrect src={Correct} text={text.takenCorrectly} />}
          {!isLightSufficient && <CameraMessage src={Light} text={text.message} />}
          
          <CameraCancelButton>Cancel</CameraCancelButton>
          {children}
        </CameraWrapper>
      ) 
}

export default Camera;