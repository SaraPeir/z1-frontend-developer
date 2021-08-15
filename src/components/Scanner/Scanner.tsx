import * as React from 'react';
import {ScannerLine} from './StyledScanner';
import { ThemeProvider } from 'styled-components'

import './Scanner.scss'

export const Scanner: React.FC<{isBeingAnalyzed: boolean}> = ({isBeingAnalyzed}) => {
      return(
        <ThemeProvider theme={{isBeingAnalyzed}}>
            <ScannerLine />
        </ThemeProvider>
      ) 
}