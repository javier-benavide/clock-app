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
import { Clock } from './components/Clock';


const App = () => {

  return (
    <Clock/>
  );
};

export default App;
