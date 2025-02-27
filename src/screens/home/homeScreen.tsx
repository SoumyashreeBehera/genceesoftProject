import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import useStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../App';
import {useTemperature} from '../../context/temperatureContext';
import Weather from './components/weather';
import SelectButton from './components/selectButton';

const apiKey = '5c246c646c7122abc2aca2af99534630';
const fahrenheit = 'imperial';
const celsius = 'metric';

const HomeScreen = () => {
  const styles = useStyles();
  const navigataion = useNavigation();
  const [cityName, setCityName] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({
    feels_like: '',
    grnd_level: '',
    humidity: '',
    pressure: '',
    sea_level: '',
    temp: '',
    temp_max: '',
    temp_min: '',
  });
  const [fiveDayData, setFiveDayData] = useState([]);
  const {unit} = useTemperature();
  const [showCurrentWeather, setShowCurrentWeather] = useState(true);

  const fetchCurrentData = useCallback(async () => {
    if (!searchText) {
      return;
    }
    setIsLoading(true);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=${
        unit === 'C' ? celsius : fahrenheit
      }&appid=${apiKey}`,
    );
    const data = await res.json();
    setWeatherData(data.main);
    setIsLoading(false);
    console.log(data.main);
  }, [searchText, unit]);

  const fetchFiveDayData = useCallback(async () => {
    if (!searchText) {
      return;
    }
    setIsLoading(true);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&units=${
        unit === 'C' ? celsius : fahrenheit
      }&appid=${apiKey}`,
    );
    const data = await res.json();
    let convertedData = data?.list?.map(el => {
      return {
        ...el.main,
        dt: el.dt,
      };
    });
    setFiveDayData(convertedData);
    setIsLoading(false);
    console.log(data.main);
  }, [searchText, unit]);

  useEffect(() => {
    if (showCurrentWeather) {
      fetchCurrentData();
    } else {
      fetchFiveDayData();
    }
  }, [fetchCurrentData, fetchFiveDayData, showCurrentWeather]);

  const navigateToSettings = () => {
    navigataion.navigate(ScreenNames.Settings);
  };

  const renderItem = ({item}) => {
    const timestamp = item.dt;
    const date = new Date(timestamp * 1000);
    console.log(date.toUTCString());
    const currentDate = date.toLocaleString();
    return (
      <View style={styles.conatiner.itemContainer}>
        <Text style={styles.conatiner.rowText}>{currentDate}</Text>
        <Weather searchText={searchText} weatherData={item} />
      </View>
    );
  };

  return (
    <View style={styles.conatiner.conatiner}>
      <View style={styles.conatiner.header}>
        <Text style={styles.conatiner.headerText}>HomeScreen</Text>
        <TouchableOpacity onPress={navigateToSettings}>
          <Text style={styles.conatiner.headerText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.conatiner.bodyContainer}>
        <View style={styles.conatiner.inputContainer}>
          <TextInput
            onChangeText={value => setCityName(value)}
            style={styles.conatiner.inputBox}
          />
          <TouchableOpacity onPress={() => setSearchText(cityName)}>
            <View style={styles.conatiner.clearBox}>
              <Text>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.conatiner.selectContainer}>
          <SelectButton
            onPress={() => setShowCurrentWeather(true)}
            selected={showCurrentWeather}
          />
          <SelectButton
            onPress={() => setShowCurrentWeather(false)}
            selected={!showCurrentWeather}
          />
        </View>
        {isLoading ? <ActivityIndicator /> : null}

        {showCurrentWeather ? (
          weatherData?.pressure ? (
            <>
              <View style={styles.conatiner.cityContainer}>
                <Text style={{fontSize: 18, color: 'white', fontWeight: 400}}>
                  {searchText.toUpperCase()}
                </Text>
              </View>
              <Weather searchText={searchText} weatherData={weatherData} />
            </>
          ) : null
        ) : (
          <>
            <View style={styles.conatiner.cityContainer}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: 400}}>
                {searchText.toUpperCase()}
              </Text>
            </View>
            <FlatList
              contentContainerStyle={{paddingBottom: 25}}
              data={fiveDayData}
              renderItem={renderItem}
              keyExtractor={(item, index) => item.toString() + index}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
