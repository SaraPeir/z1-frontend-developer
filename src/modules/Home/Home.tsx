import * as React from 'react';
import {HomeWrapper, HomeDefaultPhotoContainer} from './StyledHome'
import {TitleH1, Paragraph, PhotoContainer} from '../../styled-components/commons'
import text from './text';
import DefaultPhoto from './../../default-home.svg'
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
            <img src={DefaultPhoto} alt="" />
          </HomeDefaultPhotoContainer>
        ) 
    }

      return(
        <HomeWrapper>
          <TitleH1>{text.title}</TitleH1>
          <Paragraph>{text.paragraph}</Paragraph>
          {photo()}
          
          {children}
        </HomeWrapper>
      ) 
}

export default Home;