import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Container } from '../../components/Container/index';
import { Button } from '../../components/Button/index';
import { Text } from '../../components/Text/index';
import { Logout } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const handleLogoutButton = () => {
    dispatch(Logout());
  };
  return(
    <Container modifiers="around">
      <Image
        style={{width: '100%', height: 250, resizeMode: 'cover'}}
        source={{ uri: 'https://st.depositphotos.com/1203257/4456/i/600/depositphotos_44560477-stock-photo-food-photography.jpg'}}
      />
      <Text modifiers="title">Acreditamos que fotografar é guardar para a vida inteira as memórias de uma família, este trabalho requer muita dedicação, empenho e responsabilidade, por isso buscamos nos qualificar com as melhores referências da nossa área, sempre em busca de conhecimento, para trazer aos nossos clientes as tendências mais modernas, com as técnicas mais apuradas de fotografia.</Text>
      <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => navigation.navigate('Contato')} >
        <Text style={{fontSize: 14}}>
          Clique aqui e contate-nos!
        </Text>
      </TouchableOpacity>
      <View>
        <Button
          modifiers="commonButton"
          onPress={() => handleLogoutButton()}
        >
          <Text modifiers="buttonText">Logout</Text>
        </Button>
      </View>
    </Container>
  );
}

export default Home;