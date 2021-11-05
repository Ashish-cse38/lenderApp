import { StatusBar } from "expo-status-bar";
import React from "react";
import { Linking, StyleSheet, Text, View, Image, Button as NativeBtn } from "react-native";
import {
  Avatar,
  Card,
  TextInput,
  Title,
  Checkbox,
  Button,
  HelperText
} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Drawer from "./Drawer";

const Details2 = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("9123456789");

  const phoneCheck = () => {
    return phone != "";
  }

  return (
    <View style={styles.container}>
      <Drawer navigatePage={navigation} screen={'Details2'} content={
      <View>
        <Title style={{ marginVertical: 20, marginLeft: 20 }}>Personal Details</Title>
        <View style={styles.stepsCard}>
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
            editable={false}
            style={styles.inputField}
            label="Full Name"
            theme={inputTheme}
            value="Random Name"
          />
          <TextInput
            style={styles.inputField}
            label="Email Address"
            theme={inputTheme}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            left={<TextInput.Icon name="email" />}
          />
          <TextInput
            style={styles.inputField}
            label="Phone Number"
            theme={inputTheme}
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
            }}
            left={<TextInput.Icon name="cellphone" />}
          />
          <HelperText style={{marginLeft: 25, marginTop: -10, color: "#111111"}} type="info" value={phone} visible={phoneCheck()}>
            Please edit the number manually if it is incorrect!
          </HelperText>
        </View>
        
        <View style={{ margin: 20 }}>
          <Button
            style={{ backgroundColor: "#2A9134", padding: 8 }}
            color="white"
            uppercase={false}
            onPress={() => navigation.navigate('OtpScreen1')}
          >
            Send OTP
          </Button>
        </View>
        {/* <View style={{margin: 20 }}>
          <NativeBtn color="#2A9134" title="Register"></NativeBtn>
        </View> */}
      </View>
      } />
    </View>
  );
}

const inputTheme = {
  colors: {
    primary: "#444444"
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
    marginLeft: 10
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
    backgroundColor: "#EEEEEE",
    margin: 20,
  },
  termsSection: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
});

export default Details2;
