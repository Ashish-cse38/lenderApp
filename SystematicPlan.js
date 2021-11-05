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
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Slider} from 'react-native-elements';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import { Dimensions } from 'react-native';
import Drawer from './Drawer';

const SystematicPlan = ({navigation, route}) => {
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(false);

  const {width, height} = Dimensions.get('window');
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Drawer navigatePage={navigation} screen={'SystematicPlan'} content={
      <View style={{margin: 20}}>
        <Headline style={{fontWeight: '700', marginBottom: 10}}>
          SIP Set up
        </Headline>
        <Text>
          "Systematic Investment Plan" - Build a habit of investing every month.
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Amount"
          theme={inputTheme}
          left={<TextInput.Icon name="currency-inr" />}
        />
        <Text style={{fontWeight: '700', fontSize: 15, color: 'black', marginBottom: 5}}>
            Duration
          </Text>
          <Text>Please set duration for SIP</Text>
          <View style={{left: ((value-12)/108)*(width*0.7), backgroundColor:'rgba(42, 145, 52, 0.1)', width: '30%', width: '25%', paddingLeft: '2.5%', borderRadius: 100, marginTop: 10}}>
          <Text style={{color: '#2A9134'}}>{value} months</Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10}}>
            <Text>12 months</Text>
            <Text>120 months</Text>
          </View>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={120}
          minimumValue={12}
          step={1}
          thumbTintColor="#61C261"
          maximumTrackTintColor="rgba(0, 98, 2, 0.1)"
          minimumTrackTintColor="#006202"
          trackStyle={{height: 10, backgroundColor: 'transparent'}}
          thumbStyle={{height: 20, width: 10, borderRadius: 12}}
          style={{color: '#2A9134'}}
        />
         <View style={styles.termsSection}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            color="#2A9134"
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ fontSize: 15, marginRight: 40, color: '#111111' }}>
            By entering the details, you agree with our
            <Text
              style={{ color: "#2A9134", textDecorationLine: "underline" }}
              onPress={() => {
                Linking.openURL("https://www.google.com");
              }}
            >
              {" "}
              terms & conditions{" "}
            </Text>
          </Text>
        </View>
        <Button
            style={{backgroundColor: '#2A9134', padding: 8, marginTop: 20}}
            color="white"
            uppercase={false}
            onPress={() => {navigation.navigate(route.params.screen); dispatch({type: "SET_SIP", payload: "Complete"})} }
            >
            Save & Verify E-Mandate
          </Button>
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
    marginVertical: 20,
  },
});

export default SystematicPlan;
