import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useGlobalContext} from '../resources/context';

const AddCardScreen = () => {
  const {turnOffEditModal, editModalOn, currentTerm, currentDefination} =
    useGlobalContext();
  const onRequestCloseHandler = () => {
    turnOffEditModal();
  };
  console.log(currentTerm);
  console.log(currentDefination);
  const onPressHandler = props => {};
  const [term, onChangeTerm] = useState();
  const [defination, onChangeDefination] = useState();
  return (
    <View>
      <Modal
        animationType="Slide"
        transparent={true}
        visible={editModalOn}
        onRequestClose={onRequestCloseHandler}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeTerm}
              value={term}
              placeholder={currentTerm}
              keyboardType="default"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeDefination}
              value={defination}
              placeholder={currentDefination}
              keyboardType="default"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPressHandler}>
              <Text style={styles.textStyle}>Add To Deck</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onRequestCloseHandler}>
              <Text style="styles.button">Exit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#369df7',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default AddCardScreen;
