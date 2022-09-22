import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { fecthHour } from "../helpers/fetchHour";

export const Clock = () => {
  const [continent, setContinent] = useState("");
  const [clock, setClock] = useState<string>();
  const [city, setCity] = useState("");
  const [timer, setTimer] = useState("");

  const localTime = (continent: string, city: string) => {
    setInterval(() => {
      fecthHour(continent, city).then((resp) => setClock(resp));
    }, 450);
  };

  useEffect(() => {
    localTime("america", "santiago");
  }, []);

  const handleClick = () => {};

  const updateCountdown = (minutes: number): any => {
    let time: number = minutes * 60;
    const totalMinutes: number = Math.floor(time / 60);
    let seconds: any = time % 60;

    seconds = seconds < 10 ? `'0'${seconds}` : seconds;
    console.log(totalMinutes);
    setTimer(`${totalMinutes}:${seconds}`);

    time--;
  };

  // let timerFunction = setInterval(updateCountdown(10), 1000)
  //Tenia la idea de incluir ambos extras pero por tiempo no lo consegui, pude dejar funcionando el reloj de manera que muestre la hora en formato de 12
  //horas.

  return (
    <View style={styles.background}>
      <Text style={styles.text}>Clock ⏰</Text>
      <Text style={styles.title}>Hora Local Chile </Text>
      <Text style={styles.text}>{clock} </Text>

      <Text style={styles.title}>Timer</Text>
      <Text style={styles.text}>{timer}</Text>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.textButton}> Start Timer </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}> Stop Timer </Text>
      </TouchableOpacity>
      {/* <TextInput
    style={styles.inputText}
    value={continent}
    onChangeText={setContinent}
    placeholder='Please add a continent'
    placeholderTextColor={'white'}
    />
    <TextInput
    style={styles.inputText}
    value={city}
    onChangeText={setCity}
    placeholder='Please add a city'
    placeholderTextColor={'white'}
    /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "hsl(226, 43%, 10%)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "hsl(236, 100%, 87%)",
    fontSize: 60,
  },
  inputText: {
    color: "hsl(15, 100%, 70%)",
    fontSize: 20,
    width: "80%",
    backgroundColor: "hsl(348, 100%, 68%)",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "hsl(348, 100%, 68%)",
    borderRadius: 60,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  textButton: {
    color: "hsl(236, 100%, 87%)",
  },
  title: {
    color: "hsl(236, 100%, 87%)",
    fontSize: 20,
    paddingTop: 10,
  },
});
