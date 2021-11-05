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
  ScrollView,
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import Drawer from './Drawer';

const AutoInvestment = ({navigation, route}) => {
  const [consRisk, setConsRisk] = React.useState('');
  const [modrRisk, setModrRisk] = React.useState('');
  const [highRisk, setHighRisk] = React.useState('');
  const [focusedCons, setFocusedCons] = React.useState(false);
  const [focusedModr, setFocusedModr] = React.useState(false);
  const [focusedHigh, setFocusedHigh] = React.useState(false);

  const dispatch = useDispatch();

  const changeFocus1 = () => {
    setFocusedCons(!focusedCons);
  };
  const changeFocus2 = () => {
    setFocusedModr(!focusedModr);
  };
  const changeFocus3 = () => {
    setFocusedHigh(!focusedHigh);
  };

  const [sum, setSum] = React.useState(
    parseInt(consRisk) + parseInt(modrRisk) + parseInt(highRisk),
  );

  React.useEffect(() => {
    setSum(parseInt(consRisk) + parseInt(modrRisk) + parseInt(highRisk));
  }, [consRisk, modrRisk, highRisk]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Drawer navigatePage={navigation} screen={'AutoInvestment'} content={
        <View style={{margin: 20}}>
          <Headline style={{fontWeight: '700', marginBottom: 10}}>Auto Investment</Headline>
          <Text style={{marginBottom: 30}}>
            Choose the Loan Grade and investment per loan. Let your orders be
            executed automatically.
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Amount"
            theme={inputTheme}
            left={<TextInput.Icon name="currency-inr" />}
          />
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: '700', color: 'black', marginBottom: 10}}>
              Set Lending Criteria
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{alignItems: 'center', width: '15%', paddingTop: 20}}>
                <Entypo
                  style={{marginBottom: -20, color: '#EEEEEE'}}
                  name="dot-single"
                  size={48}
                />
                <View style={styles.lineDiv}></View>
                <Entypo
                  style={{marginVertical: -20, color: '#EEEEEE'}}
                  name="dot-single"
                  size={48}
                />
                <View style={styles.lineDiv}></View>
                <Entypo
                  style={{marginTop: -20, color: '#EEEEEE'}}
                  name="dot-single"
                  size={48}
                />
              </View>
              <View style={{width: '85%'}}>
                <TextInput
                  style={styles.inputField}
                  label="Conservative Risk"
                  onFocus={changeFocus1}
                  onBlur={changeFocus1}
                  theme={
                    focusedCons
                      ? sum == '100'
                        ? activeTheme
                        : errorTheme
                      : inputTheme
                  }
                  value={consRisk}
                  onChangeText={text => {
                    setConsRisk(text);
                  }}
                  right={<TextInput.Icon name="percent" />}
                />
                <TextInput
                  style={styles.inputField}
                  label="Moderate Risk"
                  onFocus={changeFocus2}
                  onBlur={changeFocus2}
                  theme={
                    focusedModr
                      ? sum == '100'
                        ? activeTheme
                        : errorTheme
                      : inputTheme
                  }
                  value={modrRisk}
                  onChangeText={text => {
                    setModrRisk(text);
                  }}
                  right={<TextInput.Icon name="percent" />}
                />
                <TextInput
                  style={styles.inputField}
                  label="High Risk"
                  onFocus={changeFocus3}
                  onBlur={changeFocus3}
                  theme={
                    focusedHigh
                      ? sum == '100'
                        ? activeTheme
                        : errorTheme
                      : inputTheme
                  }
                  value={highRisk}
                  onChangeText={text => {
                    setHighRisk(text);
                  }}
                  right={<TextInput.Icon name="percent" />}
                />
              </View>
            </View>
            <View
              style={
                sum == 100
                  ? {display: 'none'}
                  : {
                      flexDirection: 'row',
                      padding: 20,
                      marginTop: 10,
                      backgroundColor: 'rgba(218, 23, 23, 0.1)',
                    }
              }>
              <MaterialIcons name="error" size={24} color="#DA1717" />
              <Text style={{marginLeft: 10}}>
                The sum of all 3 Risk Factors should be 100%. Please try again
                by Changing the values.
              </Text>
            </View>
            <Button
              style={{
                backgroundColor: '#2A9134',
                padding: 8,
                marginTop: 20,
                marginBottom: 10,
              }}
              color="white"
              uppercase={false}
              disabled={sum == 100 ? false : true}
              onPress={() => {
                navigation.navigate(route.params.screen);
                dispatch({type: 'SET_AI', payload: 'Complete'});
              }}>
              Save Auto Investment
            </Button>
          </View>
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

const activeTheme = {
  colors: {
    primary: '#2A9134',
    background: 'rgba(42, 145, 52, 0.1)',
  },
};

const errorTheme = {
  colors: {
    primary: '#DA1717',
    background: 'rgba(218, 23, 23, 0.1)',
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
    height: 70,
    width: 1,
    borderColor: '#EEEEEE',
    borderWidth: 1,
  },
  inputField: {
    marginVertical: 10,
  },
  termsSection: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});

export default AutoInvestment;
