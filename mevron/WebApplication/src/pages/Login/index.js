import React from 'react';
import styled from 'rn-css';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';

const Container = styled.View`
    height: 100vh;
    width: 100wv;
    padding: 15px;
    bakground-color: #fff;
`;

const BackButton = styled.TouchableOpacity`
    border: 1px solid #e6e6e6;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    flex: 1;
`;

const WelcomeNoteBox = styled.View`
    margin-top: 10px;
`;

const WelcomeNote = styled.Text`
    color: #f59d19;
    font-weight: bold;
    font-size: 30px;
`;

const InfoBox = styled.View`
    margin-top: 10px;
    font-size: 18px;
    color: #999999;
`;

const InfoText = styled.Text`
    color: #999999;
    #999999
`;

const FormContainer = styled.View`
    flex-direction: row;
    margin-top: 30px;
`;

const CountryIconBox = styled.View`
    width: 50px;
    height: 50px;
    flex-direction: row;
`;

const IconBox = styled.View`
    margin: 5px;
    justify-content: center;
    align-items: center;
`;

const FormField = styled.TextInput`
    flex: 1;
    margin-left: 30px;
    color: #e01e1e;
    font-size: 30px;
    justify-content: center;
    align-items: center;
`;

const WarningBox = styled.View`
    width: 100%;
    flex-direction: row;
    color: #e01e1e;
    margin-top: 10px;
    align-items: center;
`;

const WarningText = styled.Text`
    color: #e01e1e;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
`;

const NextButtonContainer = styled.View`
    width: 100%;
    justify-content: flex-end;
    flex-direction: row;
    margin-bottom: 10px;
`;

const NextButton = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    background: #e6e6e6;
    border-radius: 32px;
    width: 120px;
`;

const NextButtonText = styled.Text`
    color: #999999;
`;

export default function Login() {
    return (
        <Container>
            <BackButton>
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </BackButton>
            <Content>
                <WelcomeNoteBox>
                    <WelcomeNote>Hey, tell us your mobile number</WelcomeNote>
                </WelcomeNoteBox>
                <InfoBox>
                    <InfoText>We’ll send a verification code on this number.</InfoText>
                </InfoBox>
                <FormContainer>
                    <CountryIconBox>
                        <IconBox>
                            <FontAwesome5 name="flag-usa" size={18} color="black" />
                        </IconBox>
                        <IconBox>
                            <AntDesign name="down" size={15} color="black" />
                        </IconBox>
                    </CountryIconBox>
                    <FormField placeholder="Input your Number" value="+1 845 647 3215" />
                </FormContainer>
                <WarningBox>
                    <Ionicons name="md-warning-outline" size={24} color="#e01e1e" />
                    <WarningText>Phone Number entered is incorrect</WarningText>
                </WarningBox>
            </Content>
            <NextButtonContainer>
                <NextButton>
                    <NextButtonText>Next</NextButtonText>
                </NextButton>
            </NextButtonContainer>
        </Container>
    );
}
