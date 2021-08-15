import * as React from 'react';
import {HomeWrapper, HomeDefaultPhotoContainer, PhotoContainer} from './StyledHome'
import {TitleH1, Paragraph, ButtonPrimary} from '../../styled-components/commons'
import Header from '../../components/Header';
import text from './text';
import DefaultImage from './../../default-home.svg'
import {RejectionLabel, ApprovalLabel} from '../../components/Label'
import {document1, document2, document3} from '../../mocked-photos-links'
import './Home.scss'
import '../../styles/button-link.scss';
import { ThemeProvider } from 'styled-components'
import { NavLink } from "react-router-dom";

const Home: React.FC<{ fotoSrc?: string, isAccepted: boolean }> = ({ fotoSrc , isAccepted }) => {

    const renderContent = () => {
      if(fotoSrc) {
        return (
          <ThemeProvider theme={{isAccepted}}>
            <PhotoContainer>
                {/* Document label depending on API output */}
                {isAccepted === true ? 
                  <ApprovalLabel text={text.approved} /> 
                  : <RejectionLabel text={text.rejected} />
                }

                {/* If document is rejected, camera redirecting button is displayed */}
                {!isAccepted && 
                  <ButtonPrimary >
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
                      {text.buttonError}
                    </NavLink>
                  </ButtonPrimary>
                }

              <img src={document1} alt="licence-foto" className="document-img width100" />
            </PhotoContainer>
          </ThemeProvider>
        ) 
      } 
        return (
          <HomeDefaultPhotoContainer>
            <ButtonPrimary>
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
                {text.button}
              </NavLink>
            </ButtonPrimary>
            <img src={DefaultImage} alt="default" className="document-img position" />
          </HomeDefaultPhotoContainer>
        ) 
    }

      return(
        <HomeWrapper>
          <Header text={text.header} />
          <TitleH1>{text.title}</TitleH1>
          <Paragraph>{text.paragraph}</Paragraph>
          {renderContent()}
        </HomeWrapper>
      ) 
}

export default Home;