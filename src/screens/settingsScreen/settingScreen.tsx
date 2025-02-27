import React from 'react';
import {View, Text, Switch, StyleSheet, Button} from 'react-native';
import {useTemperature} from '../../context/temperatureContext';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const {unit, toggleUnit} = useTemperature();
  const navigataion = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.tempratureContainer}>
        <Text style={styles.label}>Temperature Unit</Text>
        <View style={styles.row}>
          <Text style={styles.unit}>Celsius (°C)</Text>
          <Switch value={unit === 'F'} onValueChange={toggleUnit} />
          <Text style={styles.unit}>Fahrenheit (°F)</Text>
        </View>
        <Text style={styles.current}>
          Current: {unit === 'C' ? 'Celsius (°C)' : 'Fahrenheit (°F)'}
        </Text>
        <Button title="Go Back" onPress={() => navigataion.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  tempratureContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  unit: {
    fontSize: 18,
  },
  current: {
    fontSize: 16,
  },
});

export default SettingsScreen;
