import * as React from 'react';
import {HomeWrapper, HomeDefaultPhotoContainer, PhotoContainer} from './StyledHome'
import {TitleH1, Paragraph, ButtonPrimary} from '../../styled-components/commons'
import Header from '../../components/Header';
import text from './text';
import DefaultImage from './../../icons/default-home.svg'
import {RejectionLabel, ApprovalLabel} from '../../components/Label'
import { ThemeProvider } from 'styled-components'
import RouterNavLink from '../../components/RouterNavLink'
import ConditionalNavLink from '../../components/ConditionalNavLink'

import './Home.scss';
import '../../styles/button-link.scss';

const Home: React.FC<{ fotoSrc?: string, hasPhotoBeenTakenCorrectly: boolean }> = ({ fotoSrc , hasPhotoBeenTakenCorrectly }) => {
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
                  <ButtonPrimary >
                    <RouterNavLink to="/camera">
                      {text.buttonError}
                    </RouterNavLink>
                  </ButtonPrimary>
                }
              
              {/* If document is approved, user can go back to camera by clickin on the photo */}
              <ConditionalNavLink condition={hasPhotoBeenTakenCorrectly} to='/camera'>
                <img src={fotoSrc} alt="licence-foto" className="document-img width100" />
              </ConditionalNavLink>
            </PhotoContainer>
          </ThemeProvider>
        ) 
      } 

        return (
          <HomeDefaultPhotoContainer>
            <ButtonPrimary>
              <RouterNavLink to="/camera">
                {text.button}
              </RouterNavLink>
            </ButtonPrimary>
            <img src={DefaultImage} alt="default" className="document-img position" />
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
