import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    containerColor: string;
    textColor: string;
    accentColor: string;
    chartColorFirst: string;
    chartColorSecond: string;
  }
}
