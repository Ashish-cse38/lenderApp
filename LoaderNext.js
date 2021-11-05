import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {
  Dimensions,
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
  Headline,
  Card,
  TextInput,
  Title,
  Checkbox,
  Button,
  ActivityIndicator,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ViewSlider from 'react-native-view-slider';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const LoaderNext = ({navigation}) => {
  var i = 0;

  const [visible, setVisible] = React.useState(false);
  const [ques1, setQues1] = React.useState(false);
  const [ques2, setQues2] = React.useState(false);
  const [ques3, setQues3] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: -height/10
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
          <MaterialCommunityIcons name="reorder-horizontal" size={24} />
        </View>
      </View>

      <View style={{flex: 1}}>
        <View style={styles.mainContent}>
          <View style={styles.loaderSection}>
            <View style={{alignItems: 'center'}}>
              <ActivityIndicator
                size="large"
                color="#2A9134"></ActivityIndicator>
              <Headline style={{marginTop: 40, marginBottom: 10}}>
                Welcome to Monexo
              </Headline>
              <Text style={{marginBottom: 30}}>Start earning 13% p.a.</Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 28,
                  backgroundColor: 'rgba(42, 145, 52, 0.1)',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <MaterialCommunityIcons
                  color="#2A9134"
                  size={24}
                  name="shield-check"
                />
                <Text
                  style={{color: '#2A9134', marginLeft: 10, marginTop: 2}}
                  onPress={() =>
                    navigation.navigate('Details4', {
                      fundTransfer: 'Pending',
                      eKyc: 'Pending',
                    })
                  }>
                  Ac - 805744142154
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            left: width / 2.8,
          }}>
          <View
            style={{
              backgroundColor: '#EEEEEE',
              padding: 10,
              flexDirection: 'row',
              borderWidth: 0.5,
              borderColor: '#E0E0E0',
              borderTopLeftRadius: 14.5,
              borderTopRightRadius: 14.5,
            }}>
            <Text onPress={() => showModal()}>Get Help</Text>
            <MaterialCommunityIcons
              color="#333333"
              size={24}
              name="chevron-up"
              style={{marginLeft: 5}}
            />
          </View>
        </View>
        <Provider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <SafeAreaView style={{paddingHorizontal: 20}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <Title style={{fontWeight: '500'}}>Help with Fund Transfer</Title>
                  <Entypo
                    color="#333333"
                    size={36}
                    name="cross"
                    onPress={() => hideModal()}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    color="#333333"
                    size={24}
                    name={`${ques1 ? 'chevron-down' : 'chevron-right'}`}
                    style={{marginRight: 5}}
                    onPress={() => setQues1(!ques1)}
                  />
                  <Text style={{color: '#333333', fontSize: 15, fontWeight: '500'}}>How does Monexo work?</Text>
                </View>
                <View
                  style={{
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                    borderLeftWidth: 0.5,
                    paddingLeft: 20,
                    marginLeft: 25,
                    display: `${ques1 == false ? 'none' : 'flex'}`,
                  }}>
                  <Text>
                    The entire process is online, using technology to lower the
                    cost of borrowing and pass the savings back in the form of
                    lower rates for borrowers and solid returns for lenders.
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, flex: 1}}>
                  <MaterialCommunityIcons
                    color="#333333"
                    size={24}
                    name={`${ques2 ? 'chevron-down' : 'chevron-right'}`}
                    style={{marginRight: 5}}
                    onPress={() => setQues2(!ques2)}
                  />
                  <Text style={{color: '#333333', fontSize: 15, fontWeight: '500'}}>Why is it safe to lend or borrow money online at the Monexo's marketplace?</Text>
                </View>
                <View
                  style={{
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                    borderLeftWidth: 0.5,
                    paddingLeft: 20,
                    marginLeft: 25,
                    display: `${ques2 == false ? 'none' : 'flex'}`,
                  }}>
                  <Text>
                    The entire process is online, using technology to lower the
                    cost of borrowing and pass the savings back in the form of
                    lower rates for borrowers and solid returns for lenders.
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <MaterialCommunityIcons
                    color="#333333"
                    size={24}
                    name={`${ques3 ? 'chevron-down' : 'chevron-right'}`}
                    style={{marginRight: 5}}
                    onPress={() => setQues3(!ques3)}
                  />
                  <Text style={{color: '#333333', fontSize: 15, fontWeight: '500', flex: 1}}>Is my personal/financial information safe with Monexo?</Text>
                </View>
                <View
                  style={{
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                    borderLeftWidth: 0.5,
                    paddingLeft: 20,
                    marginLeft: 25,
                    display: `${ques3 == false ? 'none' : 'flex'}`,
                  }}>
                  <Text>
                    The entire process is online, using technology to lower the
                    cost of borrowing and pass the savings back in the form of
                    lower rates for borrowers and solid returns for lenders.
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 40,
                    paddingTop: 10,
                    marginTop: 20,
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                    borderTopWidth: 0.5,
                  }}>
                  <Text style={{textAlign: 'center'}}>
                    Can’t find what you’re looking for? Give us a call at :
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        color: '#2A9134',
                      }}>
                      {' '}
                      044-71666396
                    </Text>
                  </Text>
                </View>
                </ScrollView>
              </SafeAreaView>
            </Modal>
          </Portal>
        </Provider>
      </View>
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
  optionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height / 4,
  },
  loaderSection: {
    flex: 0.7,
    justifyContent: 'center',
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    padding: 10,
    alignItems: 'center',
    height: 150,
  },
});

export default LoaderNext;
