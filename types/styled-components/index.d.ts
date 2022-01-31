// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: string;
      secondaryText: string;
      border: string;
      borderWash: string;
      background: string;
      backgroundWash: string;
      backgroundInverted: string;
      primaryTextInverted: string;
      secondaryTextInverted: string;
      hoverSimpleBackground: string;
      primaryBrand: string;
      secondaryBrand: string;
    };
  }
}