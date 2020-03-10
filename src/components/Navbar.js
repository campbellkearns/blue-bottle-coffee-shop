import React from 'react';
 
import blueBottle from '../blue-bottle.svg'
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Navbar = (props) => (
  <NavbarWrapper>
    <div>
      <img src={blueBottle} />
      <ul>
        <li>SHOP</li>
        <li>VISIT</li>
        <li>LEARN</li>
      </ul>
    </div>

    <div>
      <ul>
        <li>SUBSCRIBE</li>
        <li>SIGN IN</li>
      </ul>
      <img src="" />
      <img src="" />
    </div>
  </NavbarWrapper>
)