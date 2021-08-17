import * as React from 'react';
import { NavLink } from "react-router-dom";
import './RouterNavLink.scss';

const RouterNavLink: React.FC<{ to: string }> = ({ to, children }) => {
      return(
            <NavLink 
                  to={to} 
                  activeStyle={{
                  fontWeight: "bold",
                  color: 'white',
                  padding: "20px",
                  margin: "20px",
                }}
                className="button-link"
              >
                {children}
              </NavLink>
    ) 
}

    export default RouterNavLink;

    