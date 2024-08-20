import { createGlobalStyle } from "styled-components";

const FontsStyle = createGlobalStyle`
/* NeoDunggeunmoPro-Regular */
@font-face {
    font-family: "NeoDunggeunmoPro";
    src: local(NeoDunggeunmoPro-Regular), url("../assets/fonts/NeoDunggeunmoPro-Regular.woff2") format("woff2"), url("../assets/fonts/NeoDunggeunmoPro-Regular.woff") format("woff");
    font-weight: 400;
}
/* Pretendard */
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Thin), url("../assets/fonts/Pretendard-Thin.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-Thin.subset.woff") format("woff");
    font-weight: 100;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-ExtraLight), url("../assets/fonts/Pretendard-ExtraLight.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-ExtraLight.subset.woff") format("woff");
    font-weight: 200;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Light), url("../assets/fonts/Pretendard-Light.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-Light.subset.woff") format("woff");
    font-weight: 300;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Regular), url("../assets/fonts/Pretendard-Regular.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-Regular.subset.woff") format("woff");
    font-weight: 400;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Medium), url("../assets/fonts/Pretendard-Medium.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-Medium.subset.woff") format("woff");
    font-weight: 500;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-SemiBold), url("../assets/fonts/Pretendard-SemiBold.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-SemiBold.subset.woff") format("woff");
    font-weight: 600;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Bold), url("../assets/fonts/Pretendard-Bold.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-Bold.subset.woff") format("woff");
    font-weight: 700;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-ExtraBold), url("../assets/fonts/Pretendard-ExtraBold.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-ExtraBold.subset.woff") format("woff");
    font-weight: 800;
}
@font-face {
    font-family: "Pretendard";
    src: local(Pretendard-Black), url("../assets/fonts/Pretendard-Black.subset.woff2") format("woff2"), url("../assets/fonts/Pretendard-Black.subset.woff") format("woff");
    font-weight: 900;
}
`;

export default FontsStyle;
