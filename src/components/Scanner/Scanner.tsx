import * as React from 'react';
import {ScannerLine} from './StyledScanner';
import { ThemeProvider } from 'styled-components'

import './Scanner.scss'

export const Scanner: React.FC<{hasPhotoBeenTakenCorrectly: boolean, isBeingAnalyzed: boolean}> = 
    ({hasPhotoBeenTakenCorrectly, isBeingAnalyzed}) => {
      return(
        <ThemeProvider theme={{isBeingAnalyzed, hasPhotoBeenTakenCorrectly}}>
            <ScannerLine />
        </ThemeProvider>
      ) 
    }