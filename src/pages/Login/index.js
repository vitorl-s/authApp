/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Container } from '../../components/Container/index';
import { Button } from '../../components/Button/index';
import { InputComponent } from '../../components/Input/index';
import { Text } from '../../components/Text/index';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
  }, [email]);

  const handleLoginButton = async () => {
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
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 15,
          }}
        >
          <Text modifiers="bold">Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
        <Button
          style={{ marginTop: 25 }}
          onPress={() => {
            handleLoginButton();
          }}
          disabled={loading}
        >
          <Text style={{ fontSize: 18 }}>Login</Text>
        </Button>
      </KeyboardAvoidingView>
      <View>
        <Text
          modifiers="bold"
          style={{
            textAlign: 'center',
          }}
        >
          Continuar com:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <Button modifiers="login">
          </Button>
          <Button modifiers="login" style={{ marginLeft: 20 }}>
          </Button>
        </View>
      </View>
    </Container>
  );
}
