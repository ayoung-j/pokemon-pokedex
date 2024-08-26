import styled from "styled-components";

export const ButtonStyle = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "bgColor",
})`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 34px;
    padding: var(--spacing);
    font-size: 1.6rem;
    color: #fff;
    background-color: ${(props) => props.bgColor};
    border-radius: var(--border-radius-sm);
    &:hover {
        background-color: ${(props) => {
            if (props.bgColor === "var(--red-color)") {
                return "var(--red-darken1-color)";
            }else if(props.bgColor === "var(--blue-color)"){
                return "var(--blue-darken1-color)";
            }else if(props.bgColor === "var(--gray-color)"){
                return "var(--gray-darken1-color)";
            }
        }};
    }
`;

const Button = ({ children, bgColor, onClick }) => {
    return (
        <ButtonStyle bgColor={bgColor} onClick={onClick}>
            {children}
        </ButtonStyle>
    );
};

export default Button;
