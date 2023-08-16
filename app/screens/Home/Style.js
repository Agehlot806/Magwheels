import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
  },
  topView: {},
  locationRow: {
    width: wp('90%'),
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    marginHorizontal: hp('2%'),
    marginTop: hp('1.5%'),
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: hp('1.5%'),
  },
  locationTxt: {
    color: '#fff',
    fontSize: hp('2.3%'),
  },
  FindTxt: {
    color: '#fff',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  profileImg: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: hp('10%'),
  },
  mainView: {
    marginHorizontal: hp('2%'),
  },
  searchView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('0.4%'),
    borderRadius: hp('2%'),
  },
  bannerView: {
    marginTop: hp('5%'),
    backgroundColor: '#FFDE00',
    height: hp('18%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: hp('2%'),
  },
  bookBtn: {
    backgroundColor: '#952D24',
    width: wp('20%'),
    alignItems: 'center',
    padding: hp('0.8%'),
    borderRadius: hp('1%'),
    marginTop: hp('1,5%'),
  },
  bookBtnTxt: {
    color: '#fff',
    fontSize: hp('1.8%'),
    fontWeight: 'bold',
  },
  categoryView: {
    marginTop: hp('2%'),
  },
  categoryTxt: {
    color: '#172E4A',
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
  },
  categoryItem: {
    width: wp('28%'),
    height: hp('6%'),
    marginRight: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('2%'),
    borderColor: '#cccccc',
    borderWidth: hp('0.1 %'),
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  carsTxt: {
    fontSize: hp('2%'),
    fontWeight: '700',
    marginLeft: hp('1%'),
  },
  seeallTxt: {
    color: '#001D4C',
    fontSize: hp('2%'),
    fontWeight: '500',
    textAlign: 'right',
  },
  carbox: {
    marginBottom: hp('1.5%'),
    height: hp('26%'),
    borderRadius: hp('2%'),
    gap: 20,
    justifyContent: 'center',
    padding: hp('2%'),
  },
  infoBox: {
    backgroundColor: '#FFF',
    height: hp('8%'),
    padding: hp('2%'),
    borderRadius: hp('2%'),
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorTxt: {
    color: '#02141F',
    fontSize: hp('2%'),
    marginRight: hp('2%'),
  },
  colorValueTxt: {
    color: '#02141F',
    fontSize: hp('2%'),
    opacity: 0.5,
  },
  colorView: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: hp('10%'),
  },
  carNameTxt: {
    color: '#02141F',
    fontSize: hp('2.2%'),
    fontWeight: '500',
  },
  carValueTxt: {
    color: '#02141F',
    fontSize: hp('2%'),
    marginLeft: hp('2%'),
  },
});

export default styles;