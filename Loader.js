import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Button as NativeBtn,
} from "react-native";
import {
  Avatar,
  Headline,
  Card,
  TextInput,
  Title,
  Checkbox,
  Button,
  ActivityIndicator,
} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");
const Loader = ({ navigation }) => {
  var i = 0;
  const [first, setFirst] = React.useState(i);
  const [verified, setVerified] = React.useState(1);

  const set2 = () => {
    setVerified(2);
  };
  const set3 = () => {
    setVerified(3);
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.mainContent}>
        <View style={styles.loaderSection}>
          <View style={verified == 1 ? "" : { display: "none" }}>
            <ActivityIndicator size="large" color="#2A9134"></ActivityIndicator>
            <Text
              style={{ fontWeight: "500", marginTop: 30 }}
              onPress={() => set2()}
            >
              We're verifying your details. Please wait...
            </Text>
          </View>
          <View
            style={
              verified == 2 ? { alignItems: "center" } : { display: "none" }
            }
          >
            <MaterialCommunityIcons
              color="#2A9134"
              size={48}
              name="shield-check"
            />
            <Text
              style={{ fontWeight: "500", marginTop: 30 }}
              onPress={() => navigation.navigate('LoaderNext')}
            >
              Verified Successfully! Redirecting ...
            </Text>
          </View>
        </View>

        {/* <ViewSlider
          style={{ flex: 0.3 }}
          renderSlides={
            <>
              <View style={styles.viewBox}>
                <Avatar.Image
                  size={48}
                  style={{ marginBottom: 10 }}
                  source={require("./assets/Face1.png")}
                />
                <Text style={{ textAlign: "center" }}>
                  Monexo is the Uber of Finance -
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Solid returns, robust risk migration & great team
                </Text>
                <Text style={{ textAlign: "center", marginTop: 10 }}>
                  - Ramanathan, Mumbai
                </Text>
              </View>

              <View style={styles.viewBox}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                    marginBottom: 10,
                  }}
                  source={require("./assets/question.png")}
                />
                <Text style={{ textAlign: "center" }}>
                  Auto-invest allows you to find and fund loans
                </Text>
                <Text style={{ textAlign: "center" }}>
                  automatically without logging into platform!
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    textDecorationLine: "underline",
                    color: "rgba(17, 17, 17, 0.6)",
                    marginTop: 10,
                  }}
                >
                  {" "}
                  Learn more about Auto Invest
                </Text>
              </View>
            </>
          }
          slideCount={2}
          dots={true}
          autoSlide={true}
          slideInterval={3000}
        /> */}
      </View>
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
  mainContent: {
    flex: 1,
    alignItems: "center",
  },
  loaderSection: {
    flex: 0.7,
    justifyContent: "center",
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: width,
    padding: 10,
    alignItems: "center",
    height: 150,
  },
});

export default Loader;
