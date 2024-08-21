import React from "react";
import styled from "styled-components";

const ListStyle = styled.ul`
    display: grid;
    gap: var(--spacing);
    grid-template-columns: repeat(6, 1fr);
`;

const ListContainer = ({ children }) => {
    return <ListStyle>{children}</ListStyle>;
};

export default ListContainer;
