import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Button as NativeBtn,
} from "react-native";
import {
  Avatar,
  Card,
  TextInput,
  Title,
  Checkbox,
  Button,
  HelperText,
  Headline,
} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import OTPTextInput from "react-native-otp-textinput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Details3 from "./Details3";

const OtpScreen1 = ({ navigation }) => {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState("");

  const changeFocus = () => {
    setFocused(!focused);
  };

  const [con1, setCon1] = React.useState("");
  const [con2, setCon2] = React.useState(true);
  const [con3, setCon3] = React.useState("Checking OTP");

  useEffect(() => {
    setTimeout(() => {
      setCon1("shield-check");
      setCon2(false);
      setCon3("Verified Successfully");
    }, 10000);
  });

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topImages}>
          <View style={styles.imagesBorder}>
            <Image source={require("./monexo.png")} />
          </View>
          <Image source={require("./nbfc.png")} />
        </View>
        <View style={styles.optionButton}>
          <MaterialCommunityIcons name="reorder-horizontal" size={24} />
        </View>
      </View>
      <View style={styles.contentView}>
        <View style={styles.imageStyle}>
          <Image source={require("./assets/monexoLow.png")} />
        </View>
        <Headline style={{ fontWeight: "700", marginBottom: 30 }}>
          OTP Verification
        </Headline>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#444444", marginBottom: 10 }}>
            A verification OTP code will be sent to
          </Text>
          <Text style={{ fontWeight: "700" }}>(+91) 1234567890</Text>
        </View>
        <View style={styles.otpAreaStyle}>
          <OTPTextInput
            defaultValue={value}
            offTintColor={value.length == 6 ? "#2A9134" : "#CCCCCC"}
            handleTextChange={(text) => {
              setValue(text);
            }}
            tintColor="#2A9134"
            inputCount="6"
            textInputStyle={
              value.length == 6
                ? { backgroundColor: "rgba(42, 145, 52, 0.1)" }
                : { backgroundColor: "#EEEEEE" }
            }
          />
        </View>

        <View
          style={
            value.length != 6 ? { flexDirection: "row" } : { display: "none" }
          }
        >
          <Entypo name="stopwatch" size={24} color="#444444" />
          <Text style={{ paddingLeft: 10, fontWeight: "700" }}>2:30 Sec </Text>
          <Text style={{ color: "#444444" }}>left to receive your OTP</Text>
        </View>
        <View
          style={value.length != 6 ? styles.line : { display: "none" }}
        ></View>
        <Text
          style={
            value.length != 6
              ? { fontWeight: "700", color: "#444444", marginBottom: 20 }
              : { display: "none" }
          }
        >
          If you entered the incorrect mobile number
        </Text>
        <View
          style={value.length != 6 ? { marginBottom: 5 } : { display: "none" }}
        >
          <Button
            mode="outlined"
            theme={buttonTheme1}
          >
            Change Phone Number
          </Button>
        </View>

        <View
          style={value.length == 6 ? { width: "90%" } : { display: "none" }}
        >
          <Button
            mode="outlined"
            icon={con1}
            theme={buttonTheme2}
            style={{ backgroundColor: "#2A9134", padding: 8 }}
            loading={con2}
            uppercase={false}
            onPress={() => navigation.navigate('Details3')}
          >
            {con3}
          </Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const buttonTheme1 = {
  colors: {
    primary: "#2A9134",
  },
};

const buttonTheme2 = {
  colors: {
    primary: "white",
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
  optionButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  contentView: {
    marginTop: 50,
    flex: 0.9,
    alignItems: "center",
  },
  otpAreaStyle: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  imageStyle: {
    marginBottom: 40,
  },
  line: {
    borderBottomColor: "rgba(0, 0, 0, 0.12)",
    borderBottomWidth: 2,
    width: "90%",
    marginVertical: 35,
  },
});

export default OtpScreen1;
