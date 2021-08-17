import * as React from 'react';
import {AcceptedLabel, ErrorLabel} from './StyledLabel';
import Error from '../../icons/error.svg';
import Approval from '../../icons/approval.svg';
import './Label.scss'

// 2 different labels because icons were slightly different, so they needed different styling;
export const RejectionLabel: React.FC<{ text: string }> = ({ text }) => {
      return(
        <ErrorLabel data-testid="error-label">
          <div className="img-padding">
            <img className="img-height" src={Error} alt="error label" />
          </div>
          <div className="text-padding">{text}</div>
        </ErrorLabel>
      ) 
}

export const ApprovalLabel: React.FC<{ text: string }> = ({ text }) => {
  return(
    <AcceptedLabel data-testid="approval-label">
      <img src={Approval} alt="approval label" />
      <div className="text-padding">{text}</div>
    </AcceptedLabel>
  ) 
}