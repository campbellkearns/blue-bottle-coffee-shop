import React from 'react';

import styled from 'styled-components';

const BannerWrapper = styled.header`
  background-color: #01a1dd;
`;

export const Banner = (props) => (
  <BannerWrapper>
    <div>FREE SHIPPING on orders over $50</div>
    <a href="#">Shop Now</a>
  </BannerWrapper>
)

