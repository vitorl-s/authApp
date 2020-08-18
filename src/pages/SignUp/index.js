import React, { useState, useEffect } from 'react';
import {
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  View,
  Alert,
} from 'react-native';
import { Container } from '../../components/Container/index';
import { Button } from '../../components/Button/index';
import { InputComponent } from '../../components/Input/index';
import { Text } from '../../components/Text/index';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  useEffect(() => {
  }, [email]);

  useEffect(() => {
  }, [passwordConfirmation, password]);

  const handleRegisterButton = async () => {
  };

  return (
    <Container modifiers="around">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <InputComponent
          label="Nome"
          autoCorrect={false}
          value={name}
          onChangeText={(txt) => setName(txt)}
        />
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 15,
          }}
        >
          <Text modifiers="bold">Já tem uma conta?</Text>
        </TouchableOpacity>
        <Button
          style={{ marginTop: 25 }}
          onPress={() => handleRegisterButton()}
          disabled={loading}
        >
          <Text style={{ fontSize: 18 }}>Cadastrar</Text>
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
};

export default SignUp;
