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
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";


const Onboarding3 = ({ navigation }) => {
  const checked1 = 'unchecked';
  const checked2 = 'unchecked';
  const checked3 = 'checked';

  const {width, height} = Dimensions.get('window');
  const [view, setView] = React.useState('none');

  setTimeout(() => setView('none'), 2000);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#379A40', width: '100%', alignItems: 'center'}}>
       
        <Image style={{width: width, height: height/2}} source={require("./assets/Group391.png")} />
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
          Earn upto 13% p.a.
        </Headline>
      </View>
      <View style={{marginTop: 15, alignItems: 'center'}}>
        <Text style={{color: '#444444'}}>1. Passive Income  2. Low Volatility</Text>
        <Text style={{color: '#444444'}}>3. Beat Inflation</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20}}>
        <RadioButton
          color="#2A9134"
          theme={radioTheme}
          status={checked1}
        />
        <RadioButton
          color="#2A9134"
          theme={radioTheme}
          status={checked2}
        />
        <RadioButton
          color="#2A9134"
          theme={radioTheme}
          status={checked3}
        />
      </View>
      <View style={{width: '90%'}}>
        <Button
          style={{ backgroundColor: "#2A9134", padding: 8, marginTop: 20 }}
          color="white"
          uppercase={false}
          onPress={() => navigation.navigate("Details1")}
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

export default Onboarding3;
