import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {ComponentType} from 'react';

interface ISelectButtonProps {
  selected: boolean;
  onPress: () => void;
}

const SelectButton: ComponentType<ISelectButtonProps> = ({
  onPress,
  selected,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.textStyle,
          backgroundColor: selected ? 'green' : 'transparent',
          color: selected ? 'white' : 'black',
        }}>
        Current Weather
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 7,
    borderWidth: 1,
  },
});

export default SelectButton;
