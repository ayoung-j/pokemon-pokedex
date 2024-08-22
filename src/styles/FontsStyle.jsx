import { createGlobalStyle } from "styled-components";

const FontsStyle = createGlobalStyle`
/* NeoDunggeunmoPro-Regular */
@font-face {
    font-family: "NeoDunggeunmoPro";
    src: local(NeoDunggeunmoPro-Regular), url("../assets/fonts/NeoDunggeunmoPro-Regular.woff2") format("woff2"), url("../assets/fonts/NeoDunggeunmoPro-Regular.woff") format("woff");
    font-weight: 400;
}
`;

export default FontsStyle;
