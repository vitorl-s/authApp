import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Container } from '../../components/Container/index';
import { Button } from '../../components/Button/index';
import { InputComponent } from '../../components/Input/index';
import { Text } from '../../components/Text/index';
import pattern from '../../utils/emailRegex';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  useEffect(() => {
    if (pattern.test(String(email).toLowerCase()) || !email.length)
      setIsValid(true);
    else setIsValid(false);
  }, [email]);

  useEffect(() => {
    if (passwordConfirmation === password || !passwordConfirmation.length)
      setIsValidPassword(true);
    else setIsValidPassword(false);
  }, [passwordConfirmation, password]);

  const handleRegisterButton = async () => {
    if(setIsValid && setIsValidPassword) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Esse email já está em uso');
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Email inválido');
          }
        });
    }
  };

  return (
    <Container modifiers="around">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <InputComponent
          modifiers={isValid ? '' : 'danger'}
          onChangeText={(txt) => setEmail(txt)}
          value={email}
          label="Email"
          autoCorrect={false}
          keyboardType="email-address"
        />
        {!isValid && (
          <Text modifiers="danger">
            Endereço de email inválido. Deveria ser seu@email.com
          </Text>
        )}
        <InputComponent
          label="Senha"
          secureTextEntry
          autoCorrect={false}
          value={password}
          onChangeText={(txt) => setPassword(txt)}
        />
        <InputComponent
          label="Confirmação de senha"
          secureTextEntry
          autoCorrect={false}
          value={passwordConfirmation}
          onChangeText={(txt) => setPasswordConfirmation(txt)}
        />
        {!isValidPassword && (
          <Text modifiers="danger">As senhas não conferem</Text>
        )}
        <Button
          onPress={() => navigation.navigate('Login')}
          modifiers="noBorderButton"
        >
          <Text modifiers="underline">Já tem uma conta?</Text>
        </Button>
        <Button
          modifiers="commonButton"
          onPress={() => handleRegisterButton()}
        >
          <Text modifiers="buttonText">Cadastrar</Text>
        </Button>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUp;
