import * as React from 'react';
import {CameraWrapper, CameraContainer, PhotoContainer, CameraCancelButton} from './StyledCamera'
import {TitleH1, Paragraph, GenericCameraMessage} from '../../styled-components/commons'
import text from './text';
import {CameraMessage, CameraMessageCorrect} from '../../components/CameraMessage'
import Scanner from '../../components/Scanner'
import Light from '../../light.svg';
import Correct from '../../correct.svg';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {fetchApiThunk} from '../../redux/slices/fetchApi';
import {RootState} from '../../redux/store'

import {document1, document2, document3} from '../../mocked-photos-links'
import { ThemeProvider } from 'styled-components'
import './Camera.scss'

const Camera: React.FC<{ hasPhotoBeenTakenCorrectly: boolean, apiHasBeenCalled: boolean, isLightSufficient: boolean }> = ({ hasPhotoBeenTakenCorrectly, isLightSufficient, apiHasBeenCalled }) => {

  let history = useHistory();
  let dispatch = useDispatch();

    const redirect = () => {
      setAnalysisHasStarted(true)
      setTimeout(() => {
        dispatch(fetchApiThunk());
      } , 3000)

      
    }

    if(apiHasBeenCalled) {
      setTimeout(() => {
        history.push('/');
      } , 2000)
    }

  const actualState = useSelector((state: RootState) => {
      return state
  })

  console.log('actualState Camera', actualState.fetchApi.value)

    const [analysisHasStarted, setAnalysisHasStarted] = React.useState(false)

    const renderContent = () => {
        return (
          <ThemeProvider theme={{hasPhotoBeenTakenCorrectly, apiHasBeenCalled}}>
            <CameraContainer onClick={redirect}>
                <Scanner isBeingAnalyzed={analysisHasStarted} hasPhotoBeenTakenCorrectly={hasPhotoBeenTakenCorrectly} />
                {analysisHasStarted &&
                  <img src={document1} alt="licence" className="camera-img rotated" />
                }
            </CameraContainer>
          </ThemeProvider>
        ) 
    }
    console.log('camera rendered')

      return(
        <CameraWrapper>
          <TitleH1>{text.title}</TitleH1>
          <Paragraph>{text.paragraph}</Paragraph>
          {renderContent()}
          {hasPhotoBeenTakenCorrectly &&  <CameraMessageCorrect src={Correct} text={text.takenCorrectly} />}
          {!isLightSufficient && !apiHasBeenCalled && <CameraMessage src={Light} text={text.message} />}
          
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