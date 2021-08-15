import * as React from 'react';
import {ScannerLine} from './StyledScanner';
import { ThemeProvider } from 'styled-components'

import './Scanner.scss'

export const Scanner: React.FC<{isBeingAnalyzed: boolean, hasPhotoBeenTakenCorrectly: boolean}> = ({isBeingAnalyzed, hasPhotoBeenTakenCorrectly}) => {
      return(
        <ThemeProvider theme={{isBeingAnalyzed, hasPhotoBeenTakenCorrectly}}>
            <ScannerLine />
        </ThemeProvider>
      ) 
}