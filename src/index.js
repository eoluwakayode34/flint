import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider , extendTheme} from "@chakra-ui/react"
import { Global } from '@emotion/react';

const Font = () => (
  <Global
    styles={
      `
      
@font-face {
  font-family: 'Airbnb Cereal App Book';
  font-style: normal;
  font-weight: normal;
  src: local('Airbnb Cereal App Book'), url('./asset/fonts/AirbnbCerealBook.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Airbnb Cereal App Light';
  font-style: normal;
  font-weight: normal;
  src: local('Airbnb Cereal App Light'), url('./asset/fonts/AirbnbCerealLight.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Airbnb Cereal App Medium';
  font-style: normal;
  font-weight: normal;
  src: local('Airbnb Cereal App Medium'), url('./asset/fonts/AirbnbCerealMedium.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Airbnb Cereal App Bold';
  font-style: normal;
  font-weight: normal;
  src: local('Airbnb Cereal App Bold'), url('./asset/fonts/AirbnbCerealBold.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Airbnb Cereal App Extra Bold';
  font-style: normal;
  font-weight: normal;
  src: local('Airbnb Cereal App Extra Bold'), url('./asset/fonts/AirbnbCerealExtraBold.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Airbnb Cereal App Black';
  font-style: normal;
  font-weight: normal;
  src: local('Airbnb Cereal App Black'), url('./asset/fonts/AirbnbCerealBlack.woff') format('woff');
  }`
    }
  />
)

export default Font


const colors = {
  brand: {
    900: "#0FDBA8",
    800: "#3FDBA8",
    700: "#1FDBA8",
  },
  primary: {
    900: "#333333",
    800: "#111111",
    700: "#3a3a3a",
  }
}

const theme = extendTheme({ colors 
 , fonts:{
   heading: 'Airbnb Cereal App Bold',
   body: 'Airbnb Cereal App Book'
 }
  })


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Font/>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
