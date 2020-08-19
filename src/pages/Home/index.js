import React from 'react';
import {
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Container } from '../../components/Container/index';
import { Button } from '../../components/Button/index';
import { InputComponent } from '../../components/Input/index';
import { Text } from '../../components/Text/index';
import { SaveToken, Logout } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogoutButton = () => {
    dispatch(Logout());
  };
  return(
    <Container modifiers="around">
        <Text modifiers="bold" style={{fontSize: 24, alignSelf:'center'}}>Bem-vindo! Você está logado</Text>
        <Button
          style={{ marginTop: 25 }}
          onPress={() => handleLogoutButton()}
        >
          <Text style={{ fontSize: 18 }}>Logout</Text>
        </Button>
    </Container>
  );
}

export default Home;