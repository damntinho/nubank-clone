import React from 'react';

import {Container, Logo, Top, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/nubank_logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Lucas</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
} 