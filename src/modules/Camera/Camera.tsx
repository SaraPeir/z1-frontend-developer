import * as React from 'react';
import {CameraWrapper, CameraContainer, PhotoContainer, CameraCancelButton} from './StyledCamera'
import {TitleH1, Paragraph, GenericCameraMessage} from '../../styled-components/commons'
import text from './text';
import {CameraMessage, CameraMessageCorrect} from '../../components/CameraMessage'
import Scanner from '../../components/Scanner'
import Light from '../../light.svg';
import Correct from '../../correct.svg';
import { NavLink, useHistory } from "react-router-dom";

import {document1, document2, document3} from '../../mocked-photos-links'
import { ThemeProvider } from 'styled-components'
import './Camera.scss'

const Camera: React.FC<{ hasPhotoTakenCorrectly: boolean, isLightSufficient: boolean }> = ({ hasPhotoTakenCorrectly, isLightSufficient }) => {

  let history = useHistory();

    const redirect = () => {
      setAnalysisHasStarted(true)
      // history.push('/')
    }

    const [analysisHasStarted, setAnalysisHasStarted] = React.useState(false)

    const renderContent = () => {
        return (
          <CameraContainer onClick={redirect}>
              <Scanner isBeingAnalyzed={analysisHasStarted} />
              {analysisHasStarted &&
                <img src={document1} alt="licence-foto" className="camera-img rotated" />
              }
          </CameraContainer>
        ) 
    }

      return(
        <CameraWrapper>
          <TitleH1>{text.title}</TitleH1>
          <Paragraph>{text.paragraph}</Paragraph>
          {renderContent()}
          {hasPhotoTakenCorrectly &&  <CameraMessageCorrect src={Correct} text={text.takenCorrectly} />}
          {!isLightSufficient && <CameraMessage src={Light} text={text.message} />}
          
          <CameraCancelButton>
            <NavLink 
              to="/camera" 
              activeStyle={{
              fontWeight: "bold",
              color: 'white',
              padding: "20px",
              margin: "20px"
              }}
              className="button-link"
            >
              Cancel
            </NavLink>
          </CameraCancelButton>
        </CameraWrapper>
      ) 
}

export default Camera;