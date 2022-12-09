import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ClockContent from "../components/ClockContent";
import Picker from "../components/Picker";
import { useTimeZone } from "../hooks/useTimeZone";

type Props = {};

const Clock: React.FC<Props> = ({}) => {
  const {
    hour,
    minute,
    timeZoneArray,
    timeZone,
    localTimezone,
    loading,
    setTimeZoneFromSelect,
    setLocalTimeZone,
  } = useTimeZone();

  const onChangeValue = (item: string, index: number) => {
    setTimeZoneFromSelect(item);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Button title="Set Current location" onPress={setLocalTimeZone} />
      </View>
      <ClockContent
        loading={loading}
        time={{ hour, minutes: minute }}
        timeZone={timeZone}
      />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Picker
          options={timeZoneArray}
          selectedValue={timeZone !== localTimezone ? timeZone : localTimezone}
          onChangeValue={onChangeValue}
        />
      </View>
    </SafeAreaView>
  );
};

export default Clock;
