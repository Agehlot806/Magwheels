import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import R from '../assets/R';
import {COLOR, FONT, FONT_SIZE} from '../config/Globles';
import LocationCurrent from '../assets/svg/LocationCurrent.svg';
const Map = ({navigation}) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View>
        <ImageBackground
          source={R.Icons.Maps}
          resizeMode="cover"
          style={styles.RectangleImage}>
          <View style={styles.mapPage}>
            <View style={[styles.mainContainer, styles.SectionStyle]}>
              <TextInput
                style={styles.textContainer}
                placeholder="your current location"
                placeholderTextColor="#464444"
              />
            </View>
          </View>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <LocationCurrent height={hp('40%')} width={wp('40%')} />
          </View>

          <View style={styles.mapSection}>
            <View style={styles.MapBottomContainer}>
              <View style={styles.mapLocation}>
                <Image source={R.Icons.ic_current} />
                {/* <Text style={{borderLeftColor:COLOR.BLACK,borderLeftWidth:4,borderStyle: 'dotted'}}></Text> */}
                <Image
                  source={R.Icons.Line}
                  style={{alignSelf: 'center', height: hp('10.2%')}}
                />
                <Image source={R.Icons.ic_pin} />
              </View>
              <View style={styles.TextSection}>
                <Text
                  style={{
                    color: COLOR.GRAY,
                    fontSize: FONT_SIZE.F_23,
                    fontFamily: FONT.REGULAR,
                  }}>
                  PICKUP
                </Text>
                <Text
                  style={{
                    color: COLOR.BLACK,
                    fontSize: FONT_SIZE.F_3,
                    fontFamily: FONT.REGULAR,
                  }}>
                  Source
                </Text>
                <View
                  style={{
                    borderTopColor: COLOR.GRAY,
                    borderTopWidth: 1,
                    width: wp('100%'),
                    marginTop: hp('2%'),
                  }}>
                  <Text
                    style={{
                      color: COLOR.GRAY,
                      fontSize: FONT_SIZE.F_22,
                      fontFamily: FONT.REGULAR,
                      marginTop: hp('2%'),
                    }}>
                    DROP-OFF
                  </Text>
                  <Text
                    style={{
                      color: COLOR.BLACK,
                      fontSize: FONT_SIZE.F_3,
                      fontFamily: FONT.REGULAR,
                    }}>
                    Destination
                  </Text>
                </View>
              </View>
            </View>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Mapsecond')}
                style={styles.BtnStyle}>
                <Text style={styles.BtnText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Map;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: hp('8%'),
    // marginHorizontal: hp('8%'),
    backgroundColor: '#FFFFFF',
    borderColor: '#fff',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 17,
    padding: 3,
    width: wp('88%'),
  },
  BtnStyle: {
    backgroundColor: '#952D24',
    padding: 16,
    width: wp('88%'),
    // marginRight: hp('20%'),
    marginTop: hp('8%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  BtnText: {
    color: '#fff',
    fontSize: FONT_SIZE.F_33,
    textAlign: 'center',
  },
  passwordeye: {
    height: hp('2.5%'),
    width: wp('6%'),
    marginRight: hp('3%'),
  },
  lock: {
    padding: 10,
    marginLeft: hp('2%'),
    height: hp('3%'),
    width: wp('6%'),
    alignItems: 'center',
  },
  RectangleImage: {
    alignSelf: 'center',
    width: wp('100%'),
    height: hp('100%'),
    // marginVertical: hp('7%'),
  },
  textContainer: {
    flex: 1,
    marginHorizontal: hp('1.2%'),
    backgroundColor: '#FFFFFF',
    width: wp('85%'),
    fontFamily: FONT.REGULAR,
    fontSize: FONT_SIZE.F_23,
    borderRadius: 12,
    padding: 10,
    color: COLOR.BLACK,
  },
  mapSection: {
    // marginBottom: hp('%'),
    backgroundColor: '#FFFFFF',
    height: hp('49%'),
  },
  MapBottomContainer: {
    flexDirection: 'row',
    // justifyContent:"space-between",
    borderEndStartRadius: 30,
  },
  TextSection: {
    marginHorizontal: hp('2%'),
    marginTop: hp('6%'),
  },
  mapLocation: {
    marginTop: hp('10%'),
    marginLeft: hp('3%'),
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp('7%'),
    width: wp('80%'),
    borderRadius: 12,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
