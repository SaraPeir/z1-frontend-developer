import * as React from 'react';
import {CameraWrapper, CameraContainer, CameraCancelButton} from './StyledCamera'
import {TitleH1, Paragraph} from '../../styled-components/commons'
import text from './text';
import {CameraMessage} from '../../components/CameraMessage'
import Scanner from '../../components/Scanner'
import Light from '../../icons/light.svg';
import Correct from '../../icons/correct.svg';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {fetchApiThunk, reset} from '../../redux/slices/fetchApi';
import {assignPhoto} from '../../redux/slices/setPhoto';
import {resetResult} from '../../redux/slices/fetchApi';
import { ThemeProvider } from 'styled-components'
import './Camera.scss'

const Camera: React.FC<{ 
    hasPhotoBeenTakenCorrectly: boolean, 
    apiHasBeenCalled: boolean, 
    isLightSufficient: boolean, 
    fotoSrc?: string 
  }> = ({ 
          hasPhotoBeenTakenCorrectly, 
          isLightSufficient, 
          apiHasBeenCalled, 
          fotoSrc 
        }) => {
          // useHistory was used for routing instead of Link for the warning 
          // in development and error in unit tests with this error message:
          //  Invariant failed: You should not use <NavLink> outside a <Router>
          let history = useHistory();
          let dispatch = useDispatch();

          const [hasBeenClicked, setHasBeenClicked] = React.useState(false)

          const newScanningHasStart = apiHasBeenCalled && hasBeenClicked
          const callAndRedirect = () => {
            if(!hasBeenClicked) {
              setHasBeenClicked(true)
              setAnalysisHasStarted(true)
              
              // photo is created in case it does not exist and replaced with a new one
              // in case the prior was approved
              if(hasPhotoBeenTakenCorrectly || !fotoSrc) {
                dispatch(assignPhoto())
              }
              
              setTimeout(() => {
                // old results are replaced with the fresh ones from API
                dispatch(resetResult())
                dispatch(fetchApiThunk());
              }, 200)
            }
              return
          }

          if(apiHasBeenCalled) {
            setTimeout(() => {
              history.push('/');
              // apiHasBeenCalled to false to activate again camera when user goes back to camera
              dispatch(reset())
            } , 1500)
          }

        const [analysisHasStarted, setAnalysisHasStarted] = React.useState(false)

        const renderContent = () => {
          return (
            <ThemeProvider theme={{hasPhotoBeenTakenCorrectly, apiHasBeenCalled}}>
              <CameraContainer onClick={callAndRedirect} data-testid={'camera'}>
                {!apiHasBeenCalled && <Scanner />}
                {analysisHasStarted && fotoSrc &&
                  <img src={fotoSrc} alt="licence-camera" className="camera-img rotated" />
                }
              </CameraContainer>
            </ThemeProvider>
          ) 
        }

        return(
          <CameraWrapper>
            <TitleH1>{text.title}</TitleH1>
            <Paragraph>{text.paragraph}</Paragraph>
            {renderContent()}
            {hasPhotoBeenTakenCorrectly && apiHasBeenCalled && <CameraMessage data-testid={'correct-photo-label'} src={Correct} text={text.takenCorrectly} />}
            {!isLightSufficient && !apiHasBeenCalled && <CameraMessage data-testid={'low-light-label'} src={Light} text={text.message} />}

            {/* Cancel button is inactive only when a new scanning is being done */}
            <CameraCancelButton
              onClick={() => {
                !newScanningHasStart && dispatch(reset());
                !analysisHasStarted && history.push('/')
              }}

              data-testid="cancel-button"
            >
                {text.cancel}
            </CameraCancelButton>
          </CameraWrapper>
        ) 
}

//Camera re-renders everytimes we click on Cancel button.
// it can be avoided with React.memo
export default React.memo(Camera);