import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    subBgColor: string;
    textColor: string;
    subTextColor: string;
    accentColor: string;
    chartColorFirst: string;
    chartColorSecond: string;
  }
}
