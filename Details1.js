import { StatusBar } from "expo-status-bar";
import React from "react";
import { Linking, StyleSheet, Text, View, Image, Button as NativeBtn } from "react-native";
import {
  Avatar,
  Card,
  TextInput,
  Title,
  Checkbox,
  Button
} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Drawer from "./Drawer";

const Details1 = ({navigation}) => {
  const [pan, setPan] = React.useState("");

  const [date, setDate] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (dateClicked) => {
    //console.warn("A date has been picked: ", dateClicked);
    const stringDate = `${dateClicked.getDate()}/${dateClicked.getMonth()}/${dateClicked.getFullYear()}`;
    setDate(stringDate);
    //console.warn("date value is: ", date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Drawer navigatePage={navigation} screen={'Details1'} content={
      
      <View>
        <Title style={{ marginVertical: 20, marginLeft: 20 }}>PAN Verification</Title>
        <View style={styles.stepsCard}>
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
            style={styles.inputField}
            label="PAN card number"
            theme={inputTheme}
            onChangeText={(text) => {
              setPan(text);
            }}
            value={pan}
            left={<TextInput.Icon name="dots-vertical" />}
          />
          <TextInput
            editable={false}
            style={styles.inputField}
            label="Date of Birth"
            theme={inputTheme}
            value={date}
            left={<TextInput.Icon name="cake-variant" />}
            right={<TextInput.Icon name="calendar" onPress={showDatePicker} />}
          />
          <DateTimePickerModal
            style={{ width: 320, backgroundColor: "white" }}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
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
        <View style={{ margin: 20 }}>
          <Button
            style={{ backgroundColor: "#2A9134", padding: 8, marginTop: 20 }}
            color="white"
            uppercase={false}
            onPress={() => navigation.navigate('Details2')}
          >
            Register
          </Button>
          <Button
            style={{ backgroundColor: "#2A9134", padding: 8, marginTop: 20 }}
            color="white"
            uppercase={false}
            onPress={() => navigation.navigate('Onboarding1')}
          >
            Onboarding
          </Button>
          <Button
            style={{ backgroundColor: "#2A9134", padding: 8, marginTop: 20 }}
            color="white"
            uppercase={false}
            onPress={() => navigation.navigate('Loader')}
          >
            Loader
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

export default Details1;
