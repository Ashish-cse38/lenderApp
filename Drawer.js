import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Button as NativeBtn,
  SafeAreaView,
  TouchableOpacity,
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
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import {Dimensions} from 'react-native';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Drawer = props => {
  const {width, height} = Dimensions.get('window');
  const {fundTransfer, eKyc, autoInvest, monthlyPlan, systematicPlan, nominee} =
    useSelector(state => {
      return state;
    });

  const [visible, setVisible] = React.useState(false);

  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: -StatusBar.currentHeight,
    width: '100%',
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topImages}>
          <View style={styles.imagesBorder}>
            <Image source={require('./monexo.png')} />
          </View>
          <Image source={require('./nbfc.png')} />
        </View>
        <View style={styles.optionButton}>
          <MaterialCommunityIcons
            style={{marginRight: 10}}
            name="reorder-horizontal"
            size={24}
            onPress={() => setVisible(!visible)}
          />
        </View>
      </View>
      {props.content}
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <View style={styles.topSection}>
              <View style={styles.topImages}>
                <View style={styles.imagesBorder}>
                  <Image source={require('./monexo.png')} />
                </View>
                <Image source={require('./nbfc.png')} />
              </View>
              <View style={styles.optionButton}>
                <Entypo
                  style={{marginRight: 10}}
                  name="cross"
                  size={24}
                  onPress={() => setVisible(!visible)}
                />
              </View>
            </View>
            <View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.75}}>
                  <Text style={{fontWeight: '700', marginBottom: 5}}>
                    Fund Transfer
                  </Text>

                  <Text style={{fontSize: 12}}>
                    Status:{' '}
                    <Text
                      style={
                        fundTransfer == 'Pending'
                          ? {fontSize: 12, color: 'brown'}
                          : {fontSize: 12, color: '#2A9134'}
                      }>
                      {fundTransfer}
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    flex: 0.25,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigatePage.navigate('FundTransfer', {
                        screen: props.screen,
                      })
                    }>
                    <View style={{flexDirection: 'row'}}>
                      <Entypo style={{marginTop: -2, marginRight: 5}} name="plus" size={24} color="#111111" />
                      <Text style={{color: '#111111', fontWeight: '700'}}>
                        Add Money
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.75}}>
                  <Text style={{fontWeight: '700', marginBottom: 5}}>
                    e-KYC
                  </Text>

                  <Text style={{fontSize: 12}}>
                    Status:{' '}
                    <Text
                      style={
                        eKyc == 'Pending'
                          ? {fontSize: 12, color: 'brown'}
                          : {fontSize: 12, color: '#2A9134'}
                      }>
                      {eKyc}
                    </Text>
                  </Text>
                </View>
                <View
                  pointerEvents={eKyc == 'Pending' ? 'auto' : 'none'}
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    flex: 0.25
                  }}>
                 <TouchableOpacity
                    onPress={() =>
                      props.navigatePage.navigate('Aadhar1', {
                        screen: props.screen,
                      })
                    }>
                    <View style={eKyc == 'Pending' ? {flexDirection: 'row'} :  {flexDirection: 'row', opacity: 0.5}}>
                      <Entypo style={{marginRight: 10}} name="edit" size={18} color="#111111" />
                      <Text style={{color: '#111111', fontWeight: '700'}}>
                        Edit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.75}}>
                  <Text style={{fontWeight: '700', marginBottom: 5}}>
                    Set-up Auto Invest
                  </Text>

                  <Text style={{fontSize: 12}}>
                    Status:{' '}
                    <Text
                      style={
                        autoInvest == 'Pending'
                          ? {fontSize: 12, color: 'brown'}
                          : {fontSize: 12, color: '#2A9134'}
                      }>
                      {autoInvest}
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    flex: 0.25,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigatePage.navigate('AutoInvestment', {
                        screen: props.screen,
                      })
                    }>
                    <View style={autoInvest == 'Pending' ? {flexDirection: 'row'} :  {flexDirection: 'row', opacity: 0.5}}>
                      <Entypo style={{marginRight: 10}} name="edit" size={18} color="#111111" />
                      <Text style={{color: '#111111', fontWeight: '700'}}>
                        Edit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.75}}>
                  <Text style={{fontWeight: '700', marginBottom: 5}}>
                    Monthly Income Plan
                  </Text>

                  <Text style={{fontSize: 12}}>
                    Status:{' '}
                    <Text
                      style={
                        monthlyPlan == 'Pending'
                          ? {fontSize: 12, color: 'brown'}
                          : {fontSize: 12, color: '#2A9134'}
                      }>
                      {monthlyPlan}
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    flex: 0.25,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigatePage.navigate('MonthlyIncomePlan', {
                        screen: props.screen,
                      })
                    }>
                    <View style={monthlyPlan == 'Pending' ? {flexDirection: 'row'} :  {flexDirection: 'row', opacity: 0.5}}>
                      <Entypo style={{marginRight: 10}} name="edit" size={18} color="#111111" />
                      <Text style={{color: '#111111', fontWeight: '700'}}>
                        Edit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.75}}>
                  <Text style={{fontWeight: '700', marginBottom: 5}}>
                    Systematic Investment Plan
                  </Text>

                  <Text style={{fontSize: 12}}>
                    Status:{' '}
                    <Text
                      style={
                        systematicPlan == 'Pending'
                          ? {fontSize: 12, color: 'brown'}
                          : {fontSize: 12, color: '#2A9134'}
                      }>
                      {systematicPlan}
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    flex: 0.25,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigatePage.navigate('SystematicPlan', {
                        screen: props.screen,
                      })
                    }>
                    <View style={systematicPlan == 'Pending' ? {flexDirection: 'row'} :  {flexDirection: 'row', opacity: 0.5}}>
                      <Entypo style={{marginRight: 10}} name="edit" size={18} color="#111111" />
                      <Text style={{color: '#111111', fontWeight: '700'}}>
                        Edit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 0.75}}>
                  <Text style={{fontWeight: '700', marginBottom: 5}}>
                    Nominee
                  </Text>

                  <Text style={{fontSize: 12}}>
                    Status:{' '}
                    <Text
                      style={
                        nominee == 'Pending'
                          ? {fontSize: 12, color: 'brown'}
                          : {fontSize: 12, color: '#2A9134'}
                      }>
                      {nominee}
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    flex: 0.25,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigatePage.navigate('Nominee', {
                        screen: props.screen,
                      })
                    }>
                    <View style={nominee == 'Pending' ? {flexDirection: 'row'} :  {flexDirection: 'row', opacity: 0.5}}>
                      <Entypo style={{marginRight: 10}} name="edit" size={18} color="#111111" />
                      <Text style={{color: '#111111', fontWeight: '700'}}>
                        Edit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{margin: 20, backgroundColor: ' linear-gradient(104.06deg, #60D5FA 0%, #276BF3 60.01%)'}}>
                <Image source={require('./assets/horn.png')} />
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider>
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
    paddingVertical: 10,
    backgroundColor: '#FAFAFA',
    borderBottomColor: '#8c8c8c',
    borderBottomWidth: 1,
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
    marginVertical: 50,
  },
  termsSection: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  cardStyle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'rgba(17, 17, 17, 0.1)',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'white',
  },
});

export default Drawer;
