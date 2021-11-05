import { StatusBar } from "expo-status-bar";
import React from "react";
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
  Headline,
  RadioButton,
} from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Onboarding1 = ({ navigation }) => {
  const checked1 = 'checked';
  const checked2 = 'unchecked';
  const checked3 = 'unchecked';

  return (
    <View style={styles.container}>
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          <Image source={require("./assets/monexoLowHigh.png")} />
        </View>
      </View>
      <View>
        <Headline
          style={{
            fontWeight: "700",
            paddingHorizontal: 60,
            textAlign: "center",
            marginTop: 30
          }}
        >
          Delivering Financial Happiness
        </Headline>
      </View>
      <View style={{ flexDirection: "row", marginTop: 24}}>
        <AntDesign name="check" size={24} color="#2A9134" />
        <Text style={{ marginLeft: 10, fontWeight: '700'}}>RBI Registered NBFC</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 60}}>
        <RadioButton
          color='#2A9134'
          theme={radioTheme}
          status={checked1}
        />
        <RadioButton
          color='#2A9134'
          theme={radioTheme}
          status={checked2}
        />
        <RadioButton
          color='#2A9134'
          theme={radioTheme}
          status={checked3}
        />
      </View>
      <View style={{width: '90%'}}>
        <Button
          style={{ backgroundColor: "#2A9134", padding: 8, marginTop: 20 }}
          color="white"
          uppercase={false}
          onPress={() => navigation.navigate('Onboarding2')}
        >
          Continue
        </Button>
        <Button
          style={{ backgroundColor: "#FFFFFF", padding: 8, marginTop: 20 }}
          color="rgba(17, 17, 17, 0.6)"
          uppercase={false}
          onPress={() => navigation.navigate("Details1")}
        >
          Skip
        </Button>
      </View>
    </View>
  );
};

const inputTheme = {
  colors: {
    primary: "#444444",
  },
};

const radioTheme = {
  colors: {
    text: '#2A9134'
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  circle1: {
    marginTop: 50,
    backgroundColor: "rgba(42, 145, 52, 0.05)",
    height: 220,
    width: 220,
    padding: 30,
    borderRadius: 110,
  },
  circle2: {
    backgroundColor: "rgba(42, 145, 52, 0.1)",
    height: 160,
    width: 160,
    paddingHorizontal: 32,
    paddingVertical: 40,
    borderRadius: 80,
  },
  imageStyle: {
    height: 60,
    width: 75,
  },
});

export default Onboarding1;
