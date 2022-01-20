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

const AddDeckScreen = () => {
  const {editDeckModalOn, turnOffEditDeckModal, addDeck} = useGlobalContext();
  const onRequestCloseHandler = () => {
    turnOffEditDeckModal();
  };
  const onPressHandler = props => {
    addDeck(deckName);
    turnOffEditDeckModal();
  };
  const [deckName, setDeckName] = useState();
  return (
    <View>
      <Modal
        animationType="Slide"
        transparent={true}
        visible={editDeckModalOn}
        onRequestClose={onRequestCloseHandler}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={setDeckName}
              value={deckName}
              placeholder="Deck Name"
              keyboardType="default"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPressHandler}>
              <Text style={styles.textStyle}>Add Deck</Text>
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

export default AddDeckScreen;
