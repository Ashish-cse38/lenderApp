import {StatusBar} from 'expo-status-bar';
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
  RadioButton,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import Drawer from './Drawer';

const MonthlyIncomePlan = ({navigation, route}) => {
  const [status1, setStatus1] = React.useState('unchecked');
  const [status2, setStatus2] = React.useState('unchecked');
  const [status3, setStatus3] = React.useState('unchecked');
  const [status4, setStatus4] = React.useState('unchecked');
  const [status5, setStatus5] = React.useState('unchecked');
  const [Enable, setEnable] = React.useState('courses');

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Drawer navigatePage={navigation} screen={'MonthlyIncomePlan'} content={
        <View style={{margin: 20}}>
          <Headline style={{fontWeight: '700', marginBottom: 10}}>MIP Set up</Headline>
          <Text>
            "Monthly Income Plan" for your monthly expenses or investing in
            Mutual Fund.
          </Text>
          <View style={{marginVertical: 30}}>
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
                  setStatus3('unchecked');
                  setStatus4('unchecked');
                  setStatus5('unchecked');
                }}
              />
              <Text style={{textAlignVertical: 'center'}}>
                Receive 8% Interest
              </Text>
            </View>
            <View
              style={
                status2 == 'unchecked'
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
                status={status2}
                color="#2A9134"
                onPress={() => {
                  setStatus2(status2 == 'unchecked' ? 'checked' : 'unchecked');
                  setStatus1('unchecked');
                  setStatus3('unchecked');
                  setStatus4('unchecked');
                  setStatus5('unchecked');
                }}
              />
              <Text style={{textAlignVertical: 'center'}}>
                Receive 10% Interest
              </Text>
            </View>
            <View
              style={
                status3 == 'unchecked'
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
                status={status3}
                color="#2A9134"
                onPress={() => {
                  setStatus3(status3 == 'unchecked' ? 'checked' : 'unchecked');
                  setStatus1('unchecked');
                  setStatus2('unchecked');
                  setStatus4('unchecked');
                  setStatus5('unchecked');
                }}
              />
              <Text style={{textAlignVertical: 'center'}}>
                Receive Full Interest Collected
              </Text>
            </View>
            <View
              style={
                status4 == 'unchecked'
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
                status={status4}
                color="#2A9134"
                onPress={() => {
                  setStatus4(status4 == 'unchecked' ? 'checked' : 'unchecked');
                  setStatus2('unchecked');
                  setStatus3('unchecked');
                  setStatus1('unchecked');
                  setStatus5('unchecked');
                }}
              />
              <Text style={{textAlignVertical: 'center'}}>
                Receive Full EMI
              </Text>
            </View>
            <View
              style={
                status5 == 'unchecked'
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
                status={status5}
                color="#2A9134"
                onPress={() => {
                  setStatus5(status5 == 'unchecked' ? 'checked' : 'unchecked');
                  setStatus2('unchecked');
                  setStatus3('unchecked');
                  setStatus4('unchecked');
                  setStatus1('unchecked');
                }}
              />
              <Text style={{textAlignVertical: 'center'}}>
                Donate Full Interest
              </Text>
            </View>
          </View>
          <Text style={{fontWeight: '700', fontSize: 15, color: 'black', marginBottom: 5}}>
            Set Up Donation
          </Text>
          <Text>Please fill out the below fields</Text>
          <View
            style={{
              borderColor: '#DDDDDD',
              borderWidth: 1,
              borderRadius: 8,
              marginVertical: 10
            }}>
            <Picker
              selectedValue={Enable}
              onValueChange={value => setEnable(value)}>
              <Picker.Item label="Net Banking" value="Net Banking" />
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
          <TextInput
            style={styles.inputField}
            label="Sankara Nethralaya"
            theme={inputTheme}
            editable={false}
          />

          <View style={{borderRadius: 10, overflow: 'hidden', marginBottom: 20}}>
            <Image style={{width: '100%'}} source={require('./assets/MIP1.png')} />
          </View>

          <Text style={{fontWeight: '700', fontSize: 15, color: 'black'}}>
            80G Certificate Available?
          </Text>
          <Text>Yes</Text>
          <Button
            style={{backgroundColor: '#2A9134', padding: 8, marginTop: 30}}
            color="white"
            uppercase={false}
            onPress={() => {navigation.navigate(route.params.screen); dispatch({type: "SET_MIP", payload: "Complete"})} }
            >
            Save MIP
          </Button>
        </View>
        } />
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
  mainText: {
    color: 'black',
  },
  optionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
    marginVertical: 20,
  },
  termsSection: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});

export default MonthlyIncomePlan;
