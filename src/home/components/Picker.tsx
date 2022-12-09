import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker as PickerComponent } from "@react-native-picker/picker";

type Props = {
  selectedValue: string;
  options: Array<string>;
  onChangeValue: (itemValue: string, itemIndex: number) => void;
};

const Picker: React.FC<Props> = ({ selectedValue, options, onChangeValue }) => {
  return (
    <PickerComponent
      selectedValue={selectedValue}
      style={{ height: 50, width: 200 }}
      onValueChange={(itemValue, itemIndex) => {
        onChangeValue(itemValue, itemIndex);
      }}
    >
      {options.map((item) => (
        <PickerComponent.Item key={item} label={item} value={item} />
      ))}
    </PickerComponent>
  );
};

export default Picker;
