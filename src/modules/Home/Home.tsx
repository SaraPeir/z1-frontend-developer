import * as React from 'react';
import {HomeWrapper, HomeDefaultPhotoContainer} from './StyledHome'
import {TitleH1, Paragraph, PhotoContainer, ButtonPrimary} from '../../styled-components/commons'
import Header from '../../components/Header';
import text from './text';
import DefaultImage from './../../default-home.svg'
import './Home.css'

const Home: React.FC<{ loading: boolean, foto?: string }> = ({ loading, children, foto  }) => {
    if (loading) {
      return <header>{`Loading...`}</header>
    }

    const photo = () => {
      if(foto) {
        return <PhotoContainer>Con photo</PhotoContainer>
      } 
        return (
          <HomeDefaultPhotoContainer>
            <ButtonPrimary>{text.button}</ButtonPrimary>
            <img src={DefaultImage} alt="default" />
          </HomeDefaultPhotoContainer>
        ) 
    }

      return(
        <HomeWrapper>
          <Header text={text.header} />
          <TitleH1>{text.title}</TitleH1>
          <Paragraph>{text.paragraph}</Paragraph>
          {photo()}
          {children}
        </HomeWrapper>
      ) 
}

export default Home;