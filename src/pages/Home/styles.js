import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center
`;

export const Button = styled.TouchableOpacity`
    width: 100;
    height: 100;
    border-radius: 20;
    background-color: ${props => props.theme.secundaryColor};
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 70px;
    height: 70px;
`;