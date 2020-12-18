/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Alert,
  LogBox,
} from 'react-native';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { Container } from '../../components/Container/index';
import { Button } from '../../components/Button/index';
import { InputComponent } from '../../components/Input/index';
import { Text } from '../../components/Text/index';
import { SaveToken } from '../../redux/actions/auth';
import pattern from '../../utils/emailRegex';


export default function Login({ navigation }) {
  LogBox.ignoreAllLogs();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pattern.test(String(email).toLowerCase()) || !email.length)
      setIsValid(true);
    else setIsValid(false);
  }, [email]);

  const handleLoginButton = async () => {
    if(email && password){
      const authData = await auth().signInWithEmailAndPassword(email, password).catch(() => { 
        Alert.alert('Email', 'Credenciais incorretas, tente novamente', [{text: 'entendido'}]);
      })
      const token = await authData.user.getIdToken();
      await dispatch(SaveToken(token));
    } else {
      Alert.alert('Preencha todos os campos antes de fazer o login')
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
          autoCapitalize="none"
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
          onChangeText={(pwd) => setPassword(pwd)}
          autoCorrect={false}
          value={password}
        />
        <Button
          onPress={() => navigation.navigate('SignUp')}
          modifiers="noBorderButton"
        >
          <Text modifiers="underline">Não tem conta? Cadastre-se</Text>
        </Button>
        <Button
          modifiers="commonButton"
          onPress={() => {
            handleLoginButton();
          }}
        >
          <Text modifiers="buttonText">Login</Text>
        </Button>
      </KeyboardAvoidingView>
    </Container>
  );
}
