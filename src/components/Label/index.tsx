import * as React from 'react';
import {AcceptedLabel, ErrorLabel} from './StyledLabel';
import Error from '../../icons/error.svg';
import Approval from '../../icons/approval.svg';
import './Label.scss'

// 2 different labels because icons were slightly different, so they needed different styling;
export const RejectionLabel: React.FC<{ text: string }> = ({ text }) => {
      return(
        <ErrorLabel>
          <div className="img-padding">
            <img className="img-height" src={Error} alt="label" />
          </div>
          <div className="text-padding">{text}</div>
        </ErrorLabel>
      ) 
}

export const ApprovalLabel: React.FC<{ text: string }> = ({ text }) => {
  return(
    <AcceptedLabel>
      <img src={Approval} alt="label" />
      <div className="text-padding">{text}</div>
    </AcceptedLabel>
  ) 
}