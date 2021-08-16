import * as React from 'react';
import { NavLink } from "react-router-dom";
import './ConditionalNavLink.scss';

const ConditionalNavLink: React.FC<{ to: string, condition: boolean }> = ({ to, condition, children }) => {
      return(
        condition ?
            <NavLink 
                to={to} 
                className="conditional-nav-link"
              >
                {children}
              </NavLink>
              : <>{children}</>
        ) 
    }

    export default ConditionalNavLink;