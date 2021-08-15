import * as React from 'react';
import {HomeWrapper, HomeDefaultPhotoContainer, PhotoContainer} from './StyledHome'
import {TitleH1, Paragraph, ButtonPrimary} from '../../styled-components/commons'
import Header from '../../components/Header';
import text from './text';
import DefaultImage from './../../default-home.svg'
import {RejectionLabel, ApprovalLabel} from '../../components/Label'
import {document1, document2, document3} from '../../mocked-photos-links'
import './Home.css'


const Home: React.FC<{ loading: boolean, fotoSrc?: string }> = ({ loading, children, fotoSrc  }) => {
    if (loading) {
      return <header>{`Loading...`}</header>
    }

    const photo = () => {
      if(fotoSrc) {
        return (
          <PhotoContainer>
              {/* <RejectionLabel text={text.rejected} /> */}
              <ApprovalLabel text={text.approved} />
            <ButtonPrimary>{text.buttonError}</ButtonPrimary>
            <img src={document1} alt="licence-foto" className="document-img width100" />
          </PhotoContainer>
        ) 
      } 
        return (
          <HomeDefaultPhotoContainer>
            <ButtonPrimary>{text.button}</ButtonPrimary>
            <img src={DefaultImage} alt="default" className="document-img position" />
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