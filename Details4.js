import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Button as NativeBtn,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
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
} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from "react-native-gesture-handler";
import { States } from "./States";
import {useSelector, useDispatch} from 'react-redux';
import Drawer from "./Drawer";

const Details4 = ({ route, navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  
  const {fundTransfer, eKyc, autoInvest, monthlyPlan, systematicPlan, nominee} = useSelector((state) => {return state})
  // const [fundTransfer, setFundTransfer] = React.useState('Pending');
  // const [eKyc, setEKyc] = React.useState('Pending');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Drawer navigatePage={navigation} screen={'Details4'} content={
        <View>
          <Title style={{ marginVertical: 20, marginLeft: 20 }}>
            What's Next
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
          </View>
          <View
            style={{
              alignItems: "center",
              marginHorizontal: 40,
              marginTop: 30,
            }}
          >
            <MaterialCommunityIcons
              name="shield-check"
              size={60}
              color="#2A9134"
            />
            <Headline style={{fontWeight: '700', marginTop: 10}}>Almost there!</Headline>
            <Text style={{ textAlign: "center", marginTop: 10, color: 'rgba(17, 17, 17, 0.8)'}}>
              Please take a moment to complete the few remaining steps.
            </Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <View style={styles.cardStyle}>
              <View style={{ flex: 0.75 }}>
                <Text style={{ fontWeight: "700", marginBottom: 5 }}>
                  Fund Transfer
                </Text>

                <Text style={{ fontSize: 12 }}>
                  Status:{" "}
                  <Text style={fundTransfer == 'Pending' ? { fontSize: 12, color: "brown" } : {fontSize: 12, color: '#2A9134'}}>{fundTransfer}</Text>
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flex: 0.25,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('FundTransfer', {screen: 'Details4'})}>
                  <Image source={require("./assets/goTo.png")} />
                </TouchableOpacity> 
              </View>
            </View>
            <View style={styles.cardStyle}>
              <View style={{ flex: 0.75 }}>
                <Text style={{ fontWeight: "700", marginBottom: 5 }}>
                  e-KYC
                </Text>

                <Text style={{ fontSize: 12 }}>
                  Status:{" "}
                  <Text style={eKyc == 'Pending' ? { fontSize: 12, color: "brown" } : {fontSize: 12, color: '#2A9134'}}>{eKyc}</Text>
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flex: 0.25,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('Aadhar1', {screen: 'Details4'})}>
                  <Image source={require("./assets/goTo.png")}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardStyle}>
              <View style={{ flex: 0.75 }}>
                <Text style={{ fontWeight: "700", marginBottom: 5 }}>
                  Set-up Auto Invest
                </Text>

                <Text style={{ fontSize: 12 }}>
                  Status:{" "}
                  <Text style={autoInvest == 'Pending' ? { fontSize: 12, color: "brown" } : {fontSize: 12, color: '#2A9134'}}>{autoInvest}</Text>
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flex: 0.25,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('AutoInvestment', {screen: 'Details4'})}>
                  <Image source={require("./assets/goTo.png")}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardStyle}>
              <View style={{ flex: 0.75 }}>
                <Text style={{ fontWeight: "700", marginBottom: 5 }}>
                  Monthly income Plan (MIP)
                </Text>

                <Text style={{ fontSize: 12 }}>
                  Status:{" "}
                  <Text style={monthlyPlan == 'Pending' ? { fontSize: 12, color: "brown" } : {fontSize: 12, color: '#2A9134'}}>{monthlyPlan}</Text>
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flex: 0.25,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('MonthlyIncomePlan', {screen: 'Details4'})}>
                  <Image source={require("./assets/goTo.png")}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardStyle}>
              <View style={{ flex: 0.75 }}>
                <Text style={{ fontWeight: "700", marginBottom: 5 }}>
                  Systematic Investment Plan (SIP)
                </Text>

                <Text style={{ fontSize: 12 }}>
                  Status:{" "}
                  <Text style={systematicPlan == 'Pending' ? { fontSize: 12, color: "brown" } : {fontSize: 12, color: '#2A9134'}}>{systematicPlan}</Text>
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flex: 0.25,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('SystematicPlan', {screen: 'Details4'})}>
                  <Image source={require("./assets/goTo.png")}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardStyle}>
              <View style={{ flex: 0.75 }}>
                <Text style={{ fontWeight: "700", marginBottom: 5 }}>
                  Nominee
                </Text>
                <Text style={{ fontSize: 12 }}>
                  Status:{" "}
                  <Text style={nominee == 'Pending' ? { fontSize: 12, color: "brown" } : {fontSize: 12, color: '#2A9134'}}>{nominee}</Text>
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flex: 0.25,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate('Nominee', {screen: 'Details4'})}>
                  <Image source={require("./assets/goTo.png")}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
            <Button
              style={{ backgroundColor: "#2A9134", padding: 8, marginTop: 20 }}
              color="white"
              uppercase={false}
              onPress={showModal}
            >
              Go to Marketplace
            </Button>
          </View>
          <Provider>
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={{
                  borderRadius: 8,
                  marginHorizontal: 20,
                  padding: 10,
                  marginVertical: 50,
                  backgroundColor: "white",
                }}
              >
                <View style={styles.termsSection}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    color="#2A9134"
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text style={{ fontSize: 15, marginRight: 40, marginLeft: 5, color: '#111111' }}>
                    By entering the details, you agree with our
                    <Text
                      style={{
                        color: "#2A9134",
                        textDecorationLine: "underline",
                      }}
                      onPress={() => {
                        Linking.openURL("https://www.google.com");
                      }}
                    >
                      {" "}
                      terms & conditions{" "}
                    </Text>
                  </Text>
                </View>
                <View>
                  <Button
                    style={{
                      backgroundColor: "#2A9134",
                      padding: 8,
                      marginTop: 30,
                      marginBottom: 10,
                      marginHorizontal: 20
                    }}
                    color="white"
                    uppercase={false}
                  >
                    Proceed to Marketplace
                  </Button>
                </View>
              </Modal>
            </Portal>
          </Provider>
        </View>
        } />
      </ScrollView>
    </SafeAreaView>
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
  cardStyle: {
    flexDirection: "row",
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "rgba(17, 17, 17, 0.1)",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  termsSection: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10
  },
});

export default Details4;
