import React, {useState, useEffect} from 'react';
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
  const {
    turnOffEditModal,
    editModalOn,
    currentTerm,
    currentDefination,
    addCard,
    resetPlaceholder,
  } = useGlobalContext();
  const onRequestCloseHandler = () => {
    turnOffEditModal();
    resetPlaceholder();
  };
  const onPressHandler = () => {
    addCard({defination, term});
    turnOffEditModal();
  };
  const [term, setTerm] = useState(currentTerm);
  const [defination, setDefination] = useState(currentDefination);
  useEffect(() => {
    setTerm(currentTerm);
  }, [currentTerm]);
  useEffect(() => {
    setDefination(currentDefination);
  }, [currentDefination]);
  return (
    <View>
      <Modal
        animationType="Slide"
        transparent={true}
        visible={editModalOn}
        onRequestClose={onRequestCloseHandler}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.text}>Card Creation</Text>
            <TextInput
              style={styles.input}
              onChangeText={setTerm}
              value={term}
              placeholder={currentTerm}
              keyboardType="default"
              multiline={true}
            />
            <TextInput
              style={styles.input}
              onChangeText={setDefination}
              value={defination}
              placeholder={currentDefination}
              keyboardType="default"
              multiline={true}
            />
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onPressHandler}>
                <Text style={styles.textStyle}>Add To Deck</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onRequestCloseHandler}>
                <Text style={styles.textStyle}>Exit</Text>
              </Pressable>
            </View>
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
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginTop: 5,
    marginRight: 8,
    backgroundColor: '#2f4858',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Malayalam Sangam MN',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
  input: {
    height: 'auto',
    fontFamily: 'Malayalam Sangam MN',
    minWidth: '50%',
    color: 'white',
    fontWeight: 'bold',
    margin: 3,
    borderWidth: 1,
    padding: 10,
  },
});
export default AddCardScreen;
