import {Pressable, View, Text, StyleSheet} from 'react-native';
import {useGlobalContext} from '../context';

const RemoveCardButton = () => {
  return (
    <Pressable>
      <Text>Remove</Text>
    </Pressable>
  );
};

export default RemoveCardButton;
