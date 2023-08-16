import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import R from '../../assets/R';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Welcome');
  }, 3000);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={R.Icons.MyMagwheelsLogo}
          style={{height: hp('15%'), width: wp('55%')}}
        />
      </View>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flexDirection: 'row',

    marginHorizontal: hp('10%'),
    position: 'absolute',
  },
});
