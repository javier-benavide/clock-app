/**
 * Clock App Exercise
 *
 * In this exercise you have to build an App the show a clock.
 * 
 * You have complete freedom in the UI/UX implemented on the App, this is part of the test.
 * 
 * Also you have to get the time from the following API "http://worldtimeapi.org/api/timezone/America/Santiago"
 * 
 * You can find more info on "http://worldtimeapi.org/"
 * 
 * Extra 1(not core): make a timer 
 * Extra 2(not core): make the timezone selectable by the users
 * 
 * Finally you have 60 minutes to create and build the best clock app on your opinion,
 * how you prioritize and build the app components is a core part of the test
 */

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
          source={{
            uri: 'https://app.neatpagos.com/assets/img/icons/neat-icon-logo-circle.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      <Text style={{
          fontSize: 32
        }}>
        Welcome to the Neat's technical interview! 🎉
      </Text>
    </View>
  );
};

export default App;
