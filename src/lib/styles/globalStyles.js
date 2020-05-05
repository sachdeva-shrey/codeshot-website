import { createGlobalStyle } from 'styled-components';

import FiraCodeRegular from '../fonts/FiraCode-Regular.otf';
// import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'FiraCodeRegular';
        src: local('FiraCodeRegular'), local('FiraCodeRegular'),
        url(${FiraCodeRegular}) format('woff2'),
        font-weight: 300;
        font-style: normal;
    }
`;