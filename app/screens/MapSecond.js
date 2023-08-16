import React from 'react';
import {ScrollView} from 'react-native';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import R from '../assets/R';
import {COLOR, FONT, FONT_SIZE} from '../config/Globles';
import LocationCurrent from '../assets/svg/LocationCurrent.svg';

const itemList = [
  {
    id: 1,
    img: R.Icons.item1,
    title: 'Taxi',
  },
  // ,
  // {
  //     id: 2,
  //     img:R.Icons.item1 ,
  //     title: 'Sedan'
  // },
  {
    id: 3,
    img: R.Icons.item2,
    title: 'SUV',
  },
];
const MapSecond = ({navigation}) => {
  return (
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
          {/* <FlatList
            data={itemList}
            renderItem={({item, index}) => (
              <View style={styles.flatlistContainer}>
                <Image source={item.img} style={styles.flatimg} />
                <Text style={styles.flatText}>{item.title}</Text>
              </View>
            )}
          /> */}
          <View style={styles.flatlistContainer}>
            <Image source={R.Icons.item2} style={styles.flatimg} />
            <Text style={styles.flatText}>Taxi</Text>
          </View>
          <View style={styles.flatlistContainer1}>
            {/* <Image source={R.Icons.item1} style={styles.flatimg} /> */}
            <Text style={styles.flatText1}>Sedan</Text>
          </View>
          <View style={styles.flatlistContainer2}>
            <Image source={R.Icons.item1} style={styles.flatimg1} />
            <Text style={styles.flatText}>SUV</Text>
          </View>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Category')}
              style={styles.BtnStyle}>
              <Text style={styles.BtnText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MapSecond;
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
    padding: 10,
    width: wp('88%'),
    marginBottom: hp('4%'),
    marginTop: hp('3%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  BtnText: {
    color: '#fff',
    fontSize: FONT_SIZE.F_3,
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
    // marginBottom: hp('1%'),
    backgroundColor: '#FFFFFF',
    height: hp('59%'),
  },
  MapBottomContainer: {
    flexDirection: 'row',
    // justifyContent:"space-between",
    borderEndStartRadius: 30,
  },
  TextSection: {
    marginHorizontal: hp('2%'),
    marginTop: hp('2%'),
  },
  mapLocation: {
    marginTop: hp('6%'),
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
  flatlistContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.ThemeColor,
    padding: 4,
    // marginHorizontal: hp('2%'),
  },
  flatText: {
    fontFamily: FONT.MEDIUM,
    marginHorizontal: hp('2%'),
    fontSize: FONT_SIZE.F_23,
    color: COLOR.BLACK,
    marginTop:hp("1.2%")
  },
  flatimg: {
    width: wp('15%'),
  },
  flatimg1: {
    marginTop: hp('1%'),
    width: wp('15%'),
    marginHorizontal: hp('1%'),
  },
  flatText1: {
    padding: 10,
    fontFamily: FONT.MEDIUM,
    marginHorizontal: hp('9%'),
    fontSize: FONT_SIZE.F_23,
    color: COLOR.BLACK,
  },
  flatlistContainer1: {
    flexDirection: 'row',
    backgroundColor:"#F1F1F1",
  },
  flatlistContainer2: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },
});
