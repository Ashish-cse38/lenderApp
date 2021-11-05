import {NavigationContainer} from '@react-navigation/native';
import {StackView, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Button as NativeBtn,
} from 'react-native';
// import Profile from "./Profile";
import Details1 from './Details1';
import Details2 from './Details2';
import Details3 from './Details3';
import OtpScreen1 from './OtpScreen1';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Reducer} from './Reducer/Reducer';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import Loader from './Loader';
import Details4 from './Details4';
import Aadhar1 from './Aadhar1';
import Aadhar2 from './Aadhar2';
import FundTransfer from './FundTransfer';
import LoaderNext from './LoaderNext';
import AutoInvestment from './AutoInvestment';
import MonthlyIncomePlan from './MonthlyIncomePlan';
import SystematicPlan from './SystematicPlan';
import Nominee from './Nominee';
import {TransitionSpecs} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import Onboarding3 from './Onboarding3';
import Drawer from './Drawer';

export default function App() {
  const Stack = createStackNavigator();
  const Store = createStore(Reducer);
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Onboarding1"
            component={Onboarding1}
            options={{
              
            }}
          />
          <Stack.Screen
            name="Onboarding2"
            component={Onboarding2}
            options={{
             
            }}
          />
          <Stack.Screen
            name="Onboarding3"
            component={Onboarding3}
            options={{
             
            }}
          />
          <Stack.Screen
            name="Details1"
            component={Details1}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Details2"
            component={Details2}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Details3"
            component={Details3}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Details4"
            component={Details4}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="OtpScreen1"
            component={OtpScreen1}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Aadhar1"
            component={Aadhar1}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Aadhar2"
            component={Aadhar2}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Loader"
            component={Loader}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="LoaderNext"
            component={LoaderNext}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="FundTransfer"
            component={FundTransfer}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="AutoInvestment"
            component={AutoInvestment}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="MonthlyIncomePlan"
            component={MonthlyIncomePlan}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="SystematicPlan"
            component={SystematicPlan}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="Nominee"
            component={Nominee}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
