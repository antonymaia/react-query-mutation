import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    alignItems: center;
`;

export const Form = styled.View`
    width: 90%;
    max-width: 400;
    padding: 20px;
    margin-top: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.secundaryColor};
`;

export const InputContainer = styled.View`
    margin-bottom: 10px;
`;

export const Text = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
    color: ${props => props.theme.textColor};
`;

export const Input = styled.TextInput`
    border-width: 1px;
    border-color: ${props => props.theme.textColor};
    color: ${props => props.theme.textColor};
    font-size: 16px;
    padding: 10px;
    border-radius: 3px;
`;