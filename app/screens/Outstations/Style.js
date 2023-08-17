import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLOR, FONT} from '../../config/Globles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerView: {
    width: wp('90%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    marginHorizontal: hp('2%'),
    marginTop: hp('2%'),
  },
  dateInputBox: {
    width: wp('40%'),
    borderColor: '#cccccc',
    borderWidth: hp('0.2%'),
    borderRadius: hp('2%'),
    padding: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateView: {
    padding: hp('2%'),
  },
  btnView: {
    backgroundColor: '#952D24',
    width: wp('90%'),
    height: hp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('2%'),
  },
  btnTxt: {
    color: '#fff',
    fontSize: hp('2.6%'),
    fontFamily: FONT.MEDIUM
  },
});

export default styles;
