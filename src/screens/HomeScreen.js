import {useGlobalContext} from '../context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Header';
import Menu from '../Menu';

const HomeScreen = ({navigation}) => {
  const {editScreen} = useGlobalContext();
  const onPressHandler = () => {
    navigation.navigate('EditDeckScreen');
  };
  useEffect(() => {
    navigation.navigate('EditDeckScreen');
    console.log('Hello');
  }, [editScreen]);
  return (
    <View style={styles.container}>
      <Header title="StudyStud" />
      <Menu />
    </View>
  );
};

export default HomeScreen;
