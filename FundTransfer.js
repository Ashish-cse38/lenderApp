import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Button as NativeBtn,
} from 'react-native';
import {
  Avatar,
  Card,
  TextInput,
  Title,
  Checkbox,
  Button,
  Headline,
  RadioButton,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import RNPickerSelect from "react-native-picker-select";
import {Picker} from '@react-native-picker/picker';
import {launchImageLibrary} from 'react-native-image-picker';
//import { States } from './States';
import {useDispatch} from 'react-redux';
import Drawer from './Drawer';

const FundTransfer = ({route, navigation}) => {
  const [status1, setStatus1] = React.useState('unchecked');
  const [status2, setStatus2] = React.useState('unchecked');
  const [pickerResponse, setPickerResponse] = React.useState(null);
  const [Enable, setEnable] = React.useState('courses');

  const [imageSource, setImageSource] = React.useState(null);

  const dispatch = useDispatch();

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, response => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        console.warn('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log({source});
      }
    });
  }

  return (
    <View style={styles.container}>
      <Drawer navigatePage={navigation} screen={'FundTransfer'} content={
      <View style={{margin: 20}}>
        <Headline style={{fontWeight: '700', marginBottom: 10}}>
          Fund Transfer
        </Headline>
        <Text style={{marginBottom: 10}}>
          Transfer Money instantly and start earning 13%*
        </Text>
        <View style={{paddingTop: 20}}>
          <Text style={{fontWeight: '700', marginBottom: 15}}>
            Select Fund Transfer Method
          </Text>
          <View
            style={
              status1 == 'unchecked'
                ? {
                    marginBottom: 5,
                    flexDirection: 'row',
                    borderRadius: 8,
                    paddingVertical: 5,
                    borderWidth: 1,
                    backgroundColor: '#EEEEEE',
                    borderColor: 'white',
                  }
                : {
                    marginBottom: 5,
                    flexDirection: 'row',
                    borderRadius: 8,
                    paddingVertical: 5,
                    borderWidth: 1,
                    backgroundColor: '#E7F1EE',
                    borderColor: '#2A9134',
                  }
            }>
            <RadioButton
              status={status1}
              color="#2A9134"
              onPress={() => {
                setStatus1(status1 == 'unchecked' ? 'checked' : 'unchecked');
                setStatus2('unchecked');
              }}
            />
            <Text style={{textAlignVertical: 'center'}}>Online Transfer</Text>
          </View>
          <View
            style={
              status2 == 'unchecked'
                ? {
                    marginTop: 5,
                    flexDirection: 'row',
                    borderRadius: 8,
                    paddingVertical: 5,
                    borderWidth: 1,
                    backgroundColor: '#EEEEEE',
                    borderColor: 'white',
                  }
                : {
                    marginTop: 5,
                    flexDirection: 'row',
                    borderRadius: 8,
                    paddingVertical: 5,
                    borderWidth: 1,
                    backgroundColor: '#E7F1EE',
                    borderColor: '#2A9134',
                  }
            }>
            <RadioButton
              status={status2}
              color="#2A9134"
              onPress={() => {
                setStatus2(status2 == 'unchecked' ? 'checked' : 'unchecked');
                setStatus1('unchecked');
              }}
            />
            <Text style={{textAlignVertical: 'center'}}>Cheque deposit</Text>
          </View>
          <View>
            <View
              style={
                status1 == 'checked' ? {marginTop: 20} : {display: 'none'}
              }>
              <TextInput
                style={styles.inputField}
                label="IFSC Code"
                value="SBIN0031864"
                disabled
              />
              <TextInput
                style={styles.inputField}
                label="Account Number"
                value="123456987452"
                disabled
              />
              <Text style={{fontWeight: '700', marginTop: 10}}>
                Payment Mode
              </Text>
              <Text style={{color: '#888888', fontSize: 13, marginBottom: 15}}>
                Choose your payment mode
              </Text>
              <View
                style={{
                  borderColor: '#DDDDDD',
                  borderWidth: 1,
                  borderRadius: 8,
                }}>
                <Picker
                  selectedValue={Enable}
                  onValueChange={value => setEnable(value)}>
                  <Picker.Item label="Net Banking" value="Net Banking" />
                  <Picker.Item label="Cash" value="Cash" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>
            </View>
            <View
              style={
                status2 == 'checked' ? {marginTop: 20} : {display: 'none'}
              }>
              <TextInput
                style={styles.inputField}
                theme={inputTheme}
                label="Cheque Number"
              />
              <Button
                icon="upload"
                theme={fileBtnTheme}
                uppercase={false}
                style={styles.uploadButton}
                onPress={() => selectImage()}>
                Upload Cheque
              </Button>
              <Text style={{color: '#444444', marginBottom: 15}}>
                Formats Accepted: PDF, PNG, JPG
              </Text>
              <TextInput
                style={styles.inputField}
                theme={inputTheme}
                label="Enter Amount"
              />
            </View>
          </View>
          <Button
            style={{backgroundColor: '#2A9134', padding: 8, marginTop: 30}}
            color="white"
            uppercase={false}
            onPress={() => {
              navigation.navigate(route.params.screen);
              dispatch({type: 'SET_FT', payload: 'Complete'});
            }}>
            {status2 == 'checked' ? 'Continue' : 'Make Payment'}
          </Button>
        </View>
      </View>
      } />
    </View>
  );
};

const inputTheme = {
  colors: {
    primary: '#444444',
  },
};

const fileBtnTheme = {
  colors: {
    primary: '#2A9134',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    padding: 10,
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
  },
  optionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  inputField: {
    backgroundColor: 'rgba(238, 238, 238, 0.5)',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#2A9134',
    marginVertical: 10,
    padding: 5,
    alignItems: 'flex-start',
    borderStyle: 'dashed',
  },
});

export default FundTransfer;
