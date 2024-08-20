import { createGlobalStyle } from "styled-components";

const VariablesStyle = createGlobalStyle`
:root {
    --font-family: "NeoDunggeunmoPro", "Pretendard", "Nanum Gothic", "Apple SD Gothic Neo", Helvetica, Arial, sans-serif;
    --red-color: #FF5757;
    --red-darken1-color: #FF3C3C;
    --yellow-color: #FFDF36;
    --green-color: #40DA62;
    --blue-color: #38A7EC;
    --gray-lighten2-color:#f6f6f6;
    --gray-lighten1-color:#ccc;
    --gray-color:#666;
    --gray-darken1-color:#333;
    --gray-darken2-color:#111;
    --container-width: 1200px;
    --gutter: 12px;
    --border-radius: 8px;
    --border-radius-sm: 4px;
}
`;

export default VariablesStyle;
