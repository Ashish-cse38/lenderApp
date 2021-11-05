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
} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import Drawer from "./Drawer";

const Aadhar2 = ({route, navigation }) => {

  const dispatch = useDispatch();
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
      <Drawer navigatePage={navigation} screen={'Aadhar2'} content={
      <View style={{ padding: 20 }}>
        <Headline style={{ fontWeight: "700", marginBottom: 10 }}>
          Aadhar Verification
        </Headline>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>
          If you have your Aadaar card with you, you can share your details by
          scanning front and back side of Aadhaar or uploading them.
        </Text>
        <Text style={{ color: "rgba(17, 17, 17, 0.6)", marginBottom: 30 }}>
          Preferred method; keep your Aadhaar card handy to make a faster and
          easy form filling. You may also need to take a selfie for image
          verifications.
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 20}}>
          <MaterialCommunityIcons
            name="shield-check"
            size={30}
            color="#2A9134"
          />
          <Text
            style={{
              fontSize: 16,
              color: "#2A9134",
              marginLeft: 10,
              marginRight: 40,
            }}
          >
            OCR completed. Click on submit to complete other steps.
          </Text>
        </View>
        <Button
          style={{ backgroundColor: "#2A9134", padding: 8, marginTop: 20 }}
          color="white"
          uppercase={false}
          onPress={() => {navigation.navigate(route.params.screen); dispatch({type: 'SET_EKYC', payload: 'Complete'})} }
        >
          Submit and continue
        </Button>
      </View>
      } />
    </View>
  );
};

const inputTheme = {
  colors: {
    primary: "#444444",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  optionButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
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
});

export default Aadhar2;
