import {Pressable, View, Text, StyleSheet} from 'react-native';
import {useGlobalContext} from '../context';
import React from 'react';

const RemoveCardButton = () => {
  return (
    <Pressable>
      <Text>Remove</Text>
    </Pressable>
  );
};

export default RemoveCardButton;
