import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Button as NativeBtn,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Avatar,
  Card,
  TextInput,
  Title,
  Checkbox,
  Button,
  HelperText,
  Modal, Portal, Provider, Headline
} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Drawer from "./Drawer";

const Details3 = ({ navigation }) => {
  const [focusedCode, setFocusedCode] = React.useState(false);
  const [focusedNum, setFocusedNum] = React.useState(false);

  const changeFocus1 = () => {
    setFocusedCode(!focusedCode);
  }
  const changeFocus2 = () => {
    setFocusedNum(!focusedNum);
  }

  const [ifsc, setIfsc] = React.useState("");
  const [account, setAccount] = React.useState("");

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 8};


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Drawer navigatePage={navigation} screen={'Details3'} content={
        <View>
          <Title style={{ marginVertical: 20, marginLeft: 20 }}>
            Bank Details
          </Title>
          <View style={styles.stepsCard}>
            <AntDesign
              style={styles.circle}
              name="checkcircle"
              size={24}
              color="#2A9134"
            />
            <View style={styles.lineDiv}></View>
            <AntDesign
              style={styles.circle}
              name="checkcircle"
              size={24}
              color="#2A9134"
            />
            <View style={styles.lineDiv}></View>
            <Entypo
              style={styles.circle}
              name="circle"
              size={24}
              color="#2A9134"
            />
            <View style={styles.lineDiv}></View>
            <Entypo
              style={styles.circle}
              name="circle"
              size={24}
              color="#2A9134"
            />
          </View>
          <View>
            <TextInput
              disabled={true}
              style={styles.disabledInputField}
              label="Full Name"
              value="Random Name"
            />
            <TextInput
              style={styles.inputField}
              label="IFSC Code"
              onFocus={changeFocus1}
              onBlur={changeFocus1}
              theme={focusedCode ? activeTheme : inputTheme}
              value={ifsc}
              onChangeText={(text) => {
                setIfsc(text);
              }}
            />
            <TextInput
              style={styles.inputField}
              label="Account Number"
              onFocus={changeFocus2}
              onBlur={changeFocus2}
              theme={focusedNum ? activeTheme : inputTheme}
              value={account}
              onChangeText={(text) => {
                setAccount(text);
              }}
            />
            <TextInput
              disabled={true}
              style={styles.disabledInputField}
              label="Bank Name"
              value="State Bank of India"
            />
            <TextInput
              disabled={true}
              style={styles.disabledInputField}
              label="Branch Name"
              value="Bhubhaneswar"
            />
          </View>

          <View style={{ margin: 20 }}>
            <Button
              style={{ backgroundColor: "#2A9134", padding: 8 }}
              color="white"
              uppercase={false}
              onPress={() => {
                navigation.navigate('Loader');
              }}
            >
              Continue
            </Button>
          </View>
          <View style={{ margin: 20 }}>
            <Button
              style={{ backgroundColor: "#2A9134", padding: 8 }}
              color="white"
              uppercase={false}
              onPress={() => {
               showModal()
              }}
            >
              Error
            </Button>
          </View>
          <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons color="#ED6A5E" name="alert" size={36}/>
            <Title style={{textAlign: 'center', marginVertical: 10}}>Penny Drop process was Unsuccessful!</Title>
            <Text style={{textAlign: 'center'}}>Dear Tushar, we were unable to authenticate your Bank Account. Please recheck the details entered.</Text>
            <Button
              style={{ backgroundColor: "white", padding: 8 , borderColor: '#2A9134', borderWidth: 1, borderRadius: 8, width: '90%', marginTop: 30}}
              color="#2A9134"
              uppercase={false}
              onPress={() => {
               hideModal()
              }}
            >
              Dismiss
            </Button>
          </View>
        </Modal>
      </Portal>
     
    </Provider>

          {/* <View style={{margin: 20 }}>
          <NativeBtn color="#2A9134" title="Register"></NativeBtn>
        </View> */}
        </View>
        } />
      </ScrollView>
    </SafeAreaView>
  );
};

const inputTheme = {
  colors: {
    primary: "#444444",
    background: "#EEEEEE"
  },
};

const activeTheme = {
  colors: {
    primary: "#2A9134",
    background: "rgba(42, 145, 52, 0.1)"
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    padding: 10,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  topImages: {
    flexDirection: "row",
    marginLeft: 10,
  },
  imagesBorder: {
    borderRightWidth: 1,
    borderColor: "#CCCCCC",
    paddingRight: 5,
    marginRight: 5,
  },
  mainText: {
    color: "black",
  },
  optionButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  stepsCard: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#E7F1EE",
    padding: 10,
    marginVertical: 10,
  },
  circle: {
    marginHorizontal: 0,
  },
  lineDiv: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: "dashed",
    borderColor: "#2A9134",
    height: 2,
    width: "20%",
  },
  inputField: {
    margin: 20
  },
  disabledInputField: {
    backgroundColor: "rgba(238, 238, 238, 0.5)",
    margin: 20,
  },
  termsSection: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
});

export default Details3;
