import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Style';
import Header from '../../Componets/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import {COLOR} from '../../config/Globles';
import HomeStyle from '../Home/Style';

import CalendarIcon from '../../assets/svg/Calendar.svg';
import Clock from '../../assets/svg/Clock.svg';

const Outstations = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={COLOR.ThemeColor}
        barStyle={'light-content'}
      />
      <View>
        <Image
          source={require('../../assets/images/Header.png')}
          style={{
            width: wp('100%'),
            height: hp('20%'),
            resizeMode: 'cover',
          }}
        />
        <View style={styles.headerView}>
          <Header
            heading={'Outstations'}
            leftIcon={true}
            handleLeftIconPress={() => navigation.goBack()}
          />
        </View>
      </View>
      {/* Callender */}
      <View>
        <Calendar
          style={{
            height: hp('50%'),
            width: '100%',
          }}
          current={'2023-08-17'}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Mark specific dates as marked
          markedDates={{
            '2023-08-17': {
              startingDay: true,
              color: COLOR.ThemeColor,
              textColor: '#fff',
              selected: true,
              selectedColor: 'green',
            },
            '2023-08-18': {
              startingDay: false,
              color: COLOR.ThemeColor,
              textColor: '#fff',
            },
            '2023-08-19': {
              startingDay: false,
              color: COLOR.ThemeColor,
              textColor: '#fff',
            },
            '2023-08-20': {
              endingDay: true,
              color: COLOR.ThemeColor,
              textColor: '#fff',
            },
          }}
          markingType="period"
          theme={{
            arrowColor: COLOR.ThemeColor,
          }}
        />
      </View>

      {/* Date and time */}
      <View style={styles.dateView}>
        <View
          style={[
            HomeStyle.rowContainer,
            {marginBottom: hp('2%'), justifyContent: 'space-between'},
          ]}>
          <View style={styles.dateInputBox}>
            <View>
              <Text style={[HomeStyle.colorTxt, {marginBottom: hp('0.8%')}]}>
                From
              </Text>
              <Text style={HomeStyle.colorValueTxt}>DD / MM / YYYY</Text>
            </View>
            <CalendarIcon width={wp('5%')} height={hp('3%')} />
          </View>
          <View style={styles.dateInputBox}>
            <View>
              <Text style={[HomeStyle.colorTxt, {marginBottom: hp('0.8%')}]}>
                To
              </Text>
              <Text style={HomeStyle.colorValueTxt}>DD / MM / YYYY</Text>
            </View>
            <CalendarIcon width={wp('5%')} height={hp('3%')} />
          </View>
        </View>
        <View
          style={[HomeStyle.rowContainer, {justifyContent: 'space-between'}]}>
          <View style={styles.dateInputBox}>
            <View>
              <Text style={[HomeStyle.colorTxt, {marginBottom: hp('0.8%')}]}>
                From
              </Text>
              <Text style={HomeStyle.colorValueTxt}>DD / MM / YYYY</Text>
            </View>
            <Clock width={wp('5%')} height={hp('3%')} />
          </View>
          <View style={styles.dateInputBox}>
            <View>
              <Text style={[HomeStyle.colorTxt, {marginBottom: hp('0.8%')}]}>
                To
              </Text>
              <Text style={HomeStyle.colorValueTxt}>DD / MM / YYYY</Text>
            </View>
            <Clock width={wp('5%')} height={hp('3%')} />
          </View>
        </View>
      </View>
      {/* Next button */}
      <View style={{alignItems: 'center', marginVertical: hp('2%')}}>
        <TouchableOpacity
          style={styles.btnView}
          onPress={() => navigation.navigate('details')}>
          <Text style={styles.btnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Outstations;
