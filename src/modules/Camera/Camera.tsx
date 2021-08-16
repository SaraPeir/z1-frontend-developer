import * as React from 'react';
import {CameraWrapper, CameraContainer, CameraCancelButton} from './StyledCamera'
import {TitleH1, Paragraph} from '../../styled-components/commons'
import text from './text';
import {CameraMessage} from '../../components/CameraMessage'
import Scanner from '../../components/Scanner'
import Light from '../../icons/light.svg';
import Correct from '../../icons/correct.svg';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {fetchApiThunk, reset} from '../../redux/slices/fetchApi';
import {assignPhoto} from '../../redux/slices/setPhoto';
import {RootState} from '../../redux/store'
import {resetResult} from '../../redux/slices/fetchApi';
import ConditionalNavLink from '../../components/ConditionalNavLink'

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
          let history = useHistory();
          let dispatch = useDispatch();

          const [hasBeenClicked, setHasBeenClicked] = React.useState(false)

          const newScanningHasStart = apiHasBeenCalled && hasBeenClicked
          const callAndRedirect = () => {
            if(!newScanningHasStart) {
              if(hasPhotoBeenTakenCorrectly || !fotoSrc) {
                dispatch(assignPhoto())
              }
              setHasBeenClicked(true)
              setAnalysisHasStarted(true)

              setTimeout(() => {
                dispatch(resetResult())
                dispatch(fetchApiThunk());
              }, 2000)
            }
              return
          }

          if(apiHasBeenCalled) {
            setTimeout(() => {
              history.push('/');
              dispatch(reset())
            } , 1000)
          }

        const actualState = useSelector((state: RootState) => {
            return state
        })

        console.log('actualState Camera', actualState)

        const [analysisHasStarted, setAnalysisHasStarted] = React.useState(false)

        const renderContent = () => {
            return (
              <ThemeProvider theme={{hasPhotoBeenTakenCorrectly, apiHasBeenCalled}}>
                <CameraContainer onClick={callAndRedirect}>
                    <Scanner isBeingAnalyzed={analysisHasStarted} hasPhotoBeenTakenCorrectly={hasPhotoBeenTakenCorrectly} />
                    {analysisHasStarted && fotoSrc &&
                      <img src={fotoSrc} alt="licence" className="camera-img rotated" />
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
            {hasPhotoBeenTakenCorrectly && apiHasBeenCalled && <CameraMessage src={Correct} text={text.takenCorrectly} />}
            {!isLightSufficient && !apiHasBeenCalled && <CameraMessage src={Light} text={text.message} />}

            <CameraCancelButton onClick={() => !newScanningHasStart && dispatch(reset())}>
              <ConditionalNavLink condition={!analysisHasStarted} to='/'>
                  Cancel
                </ConditionalNavLink>
            </CameraCancelButton>
          </CameraWrapper>
        ) 
}

export default React.memo(Camera);