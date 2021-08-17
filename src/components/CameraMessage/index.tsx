import * as React from 'react';
import {GenericCameraMessage} from '../../styled-components/commons';
import './CameraMessage.scss'

export const CameraMessage: React.FC<{ src:string, text: string }> = ({ src, text }) => {
      return(
        <GenericCameraMessage>
            <img className="icon-message-height" src={src} alt="icon" />
            {text}
        </GenericCameraMessage>
      ) 
}
