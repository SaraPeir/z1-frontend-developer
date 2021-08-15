import styled from 'styled-components';
import {colors} from '../../styled-components/variables';
import {GenericLabel} from '../../styled-components/commons';

export const ErrorLabel = styled(GenericLabel)`
    background-color: ${colors.errorColor}    
`

export const AcceptedLabel = styled(GenericLabel)`
    background-color: ${colors.acceptedColor}    
`