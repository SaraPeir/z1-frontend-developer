import * as React from 'react';
import {GenericCameraMessage} from '../../styled-components/commons';

import './CameraMessage.scss'

export const CameraMessage: React.FC<{ src:string, text: string }> = ({ src, text }) => {
  console.log('CameraMessage rendered')

      return(
        <GenericCameraMessage>
            <img className="icon-message-height" src={src} />
            {text}
        </GenericCameraMessage>
      ) 
}

export const CameraMessageCorrect: React.FC<{ src:string, text: string }> = ({ src, text }) => {
  console.log('CameraMessage rendered')

  return(
    <GenericCameraMessage>
        <img className="icon-message-height" src={src} />
        {text}
    </GenericCameraMessage>
  ) 
}
