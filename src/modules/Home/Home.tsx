import * as React from 'react';
import {HomeWrapper, HomeDefaultPhotoContainer, PhotoContainer} from './StyledHome'
import {TitleH1, Paragraph, ButtonPrimary} from '../../styled-components/commons'
import Header from '../../components/Header';
import text from './text';
import DefaultImage from './../../icons/default-home.svg'
import {RejectionLabel, ApprovalLabel} from '../../components/Label'
import { ThemeProvider } from 'styled-components'
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {assignPhoto, resetPhoto} from '../../redux/slices/setPhoto';
import {resetResult} from '../../redux/slices/fetchApi';

import './Home.scss'
import '../../styles/button-link.scss';

const Home: React.FC<{ fotoSrc?: string, hasPhotoBeenTakenCorrectly: boolean }> = ({ fotoSrc , hasPhotoBeenTakenCorrectly }) => {
    let dispatch = useDispatch();

    const getPhoto = () => {
      dispatch(assignPhoto())
    } 

    const deletePhoto = () => dispatch(resetPhoto())
    const resetApiResult = () => dispatch(resetResult())

    const renderContent = () => {
      if(fotoSrc) {
        return (
          <ThemeProvider theme={{hasPhotoBeenTakenCorrectly}}>
            <PhotoContainer
              onClick={() => {
                // only if photo has passed correctly, it's possible to click in it to take another picture
                if(hasPhotoBeenTakenCorrectly) {
                  deletePhoto()
                  resetApiResult()
                }
              }}
            >
                {/* Document label depending on API output */}
                {hasPhotoBeenTakenCorrectly === true ? 
                  <ApprovalLabel text={text.approved} /> 
                  : <RejectionLabel text={text.rejected} />
                }

                {/* If document is rejected, camera redirecting button is displayed */}
                {!hasPhotoBeenTakenCorrectly && 
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

              <img src={fotoSrc} alt="licence-foto" className="document-img width100" />
            </PhotoContainer>
          </ThemeProvider>
        ) 
      } 

        return (
          <HomeDefaultPhotoContainer>
            <ButtonPrimary onClick={getPhoto}>
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