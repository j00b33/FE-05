import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: Arial;
  }

  @font-face {
    font-family: "CodaCaption";
    src: url("/fonts/CodaCaption-ExtraBold.ttf");
  }

  @font-face {
    font-family: "Roboto";
    src: url("fonts/Roboto-Medium.ttf");
  }

  @font-face {
    font-family: "ShadowsIntoLight";
    src: url("fonts/ShadowsIntoLight-Regular.tff");
  }
`;
