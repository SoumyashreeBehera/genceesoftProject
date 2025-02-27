import {View, Text} from 'react-native';
import React, {ComponentType} from 'react';
import useStyles from '../styles';
import {useTemperature} from '../../../context/temperatureContext';

interface IWeatherProps {
  searchText: string;
  weatherData: {
    feels_like: string;
    grnd_level: string;
    humidity: string;
    pressure: string;
    sea_level: string;
    temp: string;
    temp_max: string;
    temp_min: string;
  };
}

const Weather: ComponentType<IWeatherProps> = ({searchText, weatherData}) => {
  const styles = useStyles();
  const {unit} = useTemperature();

  return (
    <View style={styles.conatiner.dataContainer}>
      <View style={styles.conatiner.row}>
        <Text style={styles.conatiner.rowText}>Temprature</Text>
        <Text style={styles.conatiner.rowText}>
          {weatherData.temp} {unit === 'C' ? ' °C' : ' °F'}
        </Text>
      </View>
      <View style={styles.conatiner.row}>
        <Text style={styles.conatiner.rowText}>Max Temprature</Text>
        <Text style={styles.conatiner.rowText}>
          {weatherData.temp_max} {unit === 'C' ? ' °C' : ' °F'}
        </Text>
      </View>
      <View style={styles.conatiner.row}>
        <Text style={styles.conatiner.rowText}>Min Temprature</Text>
        <Text style={styles.conatiner.rowText}>
          {weatherData.temp_min} {unit === 'C' ? ' °C' : ' °F'}
        </Text>
      </View>
      <View style={styles.conatiner.row}>
        <Text style={styles.conatiner.rowText}>humidity</Text>
        <Text style={styles.conatiner.rowText}>{weatherData.humidity}</Text>
      </View>
    </View>
  );
};

export default Weather;
