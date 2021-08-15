import * as React from 'react';
import {AcceptedLabel, ErrorLabel} from './StyledLabel';
import Close from '../../close.svg';
import Approval from '../../approval.svg';
import './Label.scss'

export const RejectionLabel: React.FC<{ text: string }> = ({ text }) => {
      return(
        <ErrorLabel>
          <div className="img-padding">
            <img className="img-height" src={Close} />
          </div>
          <div className="text-padding">{text}</div>
        </ErrorLabel>
      ) 
}

export const ApprovalLabel: React.FC<{ text: string }> = ({ text }) => {
  return(
    <AcceptedLabel>
      <img src={Approval} />
      <div className="text-padding">{text}</div>
    </AcceptedLabel>
  ) 
}