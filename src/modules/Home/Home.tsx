import * as React from 'react';
import {HomeWrapper, HomeDefaultPhotoContainer, PhotoContainer} from './StyledHome'
import {TitleH1, Paragraph, ButtonPrimary} from '../../styled-components/commons'
import Header from '../../components/Header';
import text from './text';
import DefaultImage from './../../icons/default-home.svg'
import {RejectionLabel, ApprovalLabel} from '../../components/Label'
import { ThemeProvider } from 'styled-components'
import { useHistory } from "react-router-dom";

import './Home.scss';
import '../../styles/button-link.scss';

const Home: React.FC<{ fotoSrc?: string, hasPhotoBeenTakenCorrectly: boolean }> = ({ fotoSrc , hasPhotoBeenTakenCorrectly }) => {

    // useHistory was used for routing instead of Link for the warning 
    // in development and error in unit tests with this error message:
    //  Invariant failed: You should not use <NavLink> outside a <Router>
    let history = useHistory();

    const renderContent = () => {
      if(fotoSrc) {
        return (
          <ThemeProvider theme={{hasPhotoBeenTakenCorrectly}}>
            <PhotoContainer>
                {/* Document label depending on API output */}
                {hasPhotoBeenTakenCorrectly ? 
                  <ApprovalLabel text={text.approved} /> 
                  : <RejectionLabel text={text.rejected} />
                }

                {/* If document is rejected, camera redirecting button is displayed */}
                {!hasPhotoBeenTakenCorrectly && 
                  <ButtonPrimary data-testid="redirecting-button" onClick={() => history.push('/camera')}>
                    {text.buttonError}
                  </ButtonPrimary>
                }
              
              {/* If document is approved, user can go back to camera by clickin on the photo */}
                <img 
                  onClick={() => hasPhotoBeenTakenCorrectly && history.push('/camera')} 
                  src={fotoSrc} alt={`licence-foto ${hasPhotoBeenTakenCorrectly ? 'approved' : 'rejected'}`} className="document-img width100" 
                />
            </PhotoContainer>
          </ThemeProvider>
        ) 
      } 

        return (
          <HomeDefaultPhotoContainer>
            <ButtonPrimary data-testid="redirecting-button" onClick={() => history.push('/camera')}>
                {text.button}
            </ButtonPrimary>
            <img src={DefaultImage} alt="default-document-img" className="document-img position" />
          </HomeDefaultPhotoContainer>
        ) 
    }

    // spy to understand how many times Home is rendered
    console.log('home rendered')
    return(
      <HomeWrapper>
        <Header text={text.header} />
        <TitleH1>{text.title}</TitleH1>
        <Paragraph>{text.paragraph}</Paragraph>
        {renderContent()}
      </HomeWrapper>
    ) 
}

// with React.memo, Home is rendered just once
export default React.memo(Home);
