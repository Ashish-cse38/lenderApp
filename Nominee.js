import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Button as NativeBtn,
  SafeAreaView,
} from 'react-native';
import {
  Avatar,
  Card,
  TextInput,
  Title,
  Checkbox,
  Button,
  Headline,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {Dimensions} from 'react-native';
import {StatusBar} from 'react-native';
import Drawer from './Drawer';

const Nominee = ({navigation, route}) => {
  const [Enable, setEnable] = React.useState('courses');
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');

  const [background, setBackground] = React.useState();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Drawer navigatePage={navigation} screen={'Nominee'} content={
        <View style={{margin: 20}}>
          <Headline style={{fontWeight: '700', marginBottom: 10}}>
            Nominee Details
          </Headline>
          <Text style={{marginBottom: 20}}>
            Let us know who you wish to nominate in case of an unforeseen /
            untimely demise of yourself.
          </Text>
          <TextInput
            style={styles.inputField}
            label="Nominee Full Name"
            theme={inputTheme}
          />
          <TextInput
            style={styles.inputField}
            label="DD-MM-YYYY"
            theme={inputTheme}
          />
          <TextInput
            style={styles.inputField}
            label="Address"
            theme={inputTheme}
          />
          <TextInput
            style={styles.inputField}
            label="Pin Code"
            theme={inputTheme}
          />
          <TextInput
            style={styles.inputField}
            label="City"
            value="Auto-Populate"
            theme={inputTheme}
            disabled
          />
          <TextInput
            style={styles.inputField}
            label="State"
            value="Auto-Populate"
            theme={inputTheme}
            disabled
          />
          <View
            style={{
              borderColor: '#DDDDDD',
              borderWidth: 1,
              borderRadius: 8,
              marginTop: 10,
            }}>
            <Picker
              selectedValue={Enable}
              onValueChange={value => setEnable(value)}>
              <Picker.Item
                label="Select Relationship"
                value="Select Relationship"
                enabled={false}
              />
              <Picker.Item label="Mother" value="Mother" />
              <Picker.Item label="Son" value="Son" />
              <Picker.Item label="Daughter" value="Daughter" />
              <Picker.Item label="Sister" value="Sister" />
              <Picker.Item label="Husband" value="Husband" />
              <Picker.Item label="Wife" value="Wife" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
          <Button
            style={{backgroundColor: '#2A9134', padding: 8, marginTop: 30}}
            color="white"
            uppercase={false}
            onPress={() => {
              navigation.navigate(route.params.screen);
              dispatch({type: 'SET_ND', payload: 'Complete'});
            }}>
            Save Nominee Details
          </Button>
        </View>
        }/>
      </ScrollView>
    </SafeAreaView>
  );
};

const inputTheme = {
  colors: {
    primary: '#444444',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  topSection: {
    paddingVertical: 10,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  topImages: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  imagesBorder: {
    borderRightWidth: 1,
    borderColor: '#CCCCCC',
    paddingRight: 5,
    marginRight: 5,
    marginLeft: 10,
  },
  mainText: {
    color: 'black',
  },
  optionButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  stepsCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#E7F1EE',
    padding: 10,
    marginVertical: 10,
  },
  circle: {
    marginHorizontal: 0,
  },
  lineDiv: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: 'dashed',
    borderColor: '#2A9134',
    height: 2,
    width: '20%',
  },
  inputField: {
    backgroundColor: '#EEEEEE',
    marginVertical: 10,
  },
  termsSection: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});

export default Nominee;
