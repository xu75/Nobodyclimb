import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../views/Header';
import Footer from '../views/Footer';

const PhotoWapper = styled.div`
  background: #F5F5F5;
`

function Photo() {
    
  return (
    <PhotoWapper>
      <Header/>
      
      <Footer/>
    </PhotoWapper>
  );
}
export default Photo;
