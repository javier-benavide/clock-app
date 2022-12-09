import { Text, View } from "react-native";
import React from "react";

type Props = {
  timeZone: string;
  time: { hour: string; minutes: string };
  loading: boolean;
};

const ClockContent: React.FC<Props> = ({ timeZone, time, loading }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>TimeZone</Text>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
          {timeZone}
        </Text>
        <View>
          {loading ? (
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              {"Actualizando..."}
            </Text>
          ) : null}
        </View>
      </View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Text style={{ fontSize: 32 }}>{time.hour}</Text>
        <Text style={{ fontSize: 32 }}>:</Text>
        <Text style={{ fontSize: 32 }}>{time.minutes}</Text>
      </View>
    </View>
  );
};

export default ClockContent;
