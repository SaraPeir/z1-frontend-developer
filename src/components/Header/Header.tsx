import * as React from 'react';
import {HeaderWrapper} from './StyledHeader'

const Header: React.FC<{ text: string }> = ({ text }) => {
      return(
        <HeaderWrapper>
          {text}
        </HeaderWrapper>
      ) 
}

export default Header;