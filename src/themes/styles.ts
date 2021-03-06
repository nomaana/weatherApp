import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  gray,
  blue,
  white,
  grayShade,
  lightGray,
  offWhite,
  black,
  blackShade,
  orange,
} from '../themes/color';
// import {RobotoBold, RobotoMedium, RobotoRegular} from '../themes/config';
export const styles = StyleSheet.create({
  allMainView: {
    flex: 1,
    backgroundColor: white,
    height: '100%',
  },
  mainView: {
    flex: 1,
    backgroundColor: offWhite,
    height: '100%',
  },
  smallText: {
    // fontFamily: RobotoRegular,
    width: '100%',
    fontSize: hp('2.2%'),
    color: gray,
  },
  buttonText: {
    color: white,
    // fontFamily: RobotoBold,
    fontSize: hp('2%'),
  },
  headerInputView: {
    width: '100%',
    backgroundColor: blue,
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 55,
    maxHeight: 55,
  },
  headerIconView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
  headerTextView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // left: 25,
  },
  headerTexts: {
    fontSize: hp('2.5%'),
    color: black,
    // fontFamily: RobotoBold,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullButtonView: {
    width: '100%',
    height: hp('7%'),
    backgroundColor: blue,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButtonView: {
    width: hp('16%'),
    height: hp('7%'),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blue,
  },
  fullButtonText: {
    color: white,
    // fontFamily: RobotoBold,
    fontSize: hp('2.5%'),
  },
  smallButtonText: {
    color: white,
    // fontFamily: RobotoMedium,
    fontSize: hp('2.5%'),
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  textInputContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: blackShade,
    borderStyle: 'solid',
  },

  loginTextInputTitle: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#fff',
    fontSize: 16,
    marginLeft: '15%',
  },
  loginTextInput: {
    width: '75%',
    height: 50,
    fontSize: hp('2.3%'),
    textAlignVertical: 'center',
    color: blackShade,
    marginLeft: '1%',
  },
  textInputTitle: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#fff',
    fontSize: 16,
    marginLeft: '8%',
  },
  textInput: {
    width: '75%',
    height: 50,
    fontSize: hp('2.3%'),
    textAlignVertical: 'center',
    color: black,
    marginLeft: '7%',
  },
  splashsImage: {
    width: '100%',
    height: '100%',
  },
  imageBackgroundStyle: {
    position: 'absolute',
    width: wp('100%'),
    height: hp('30%'),
    bottom: -10,
  },
  innerImageView: {
    height: hp('10%'),
    width: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ItemImageView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
  },
  ItemMainView: {
    flex: 1,
    flexDirection: 'row',
    height: hp('18%'),
    marginBottom: '4%',
    marginHorizontal: '5%',
    backgroundColor: white,
    padding: '4%',
    borderRadius: 8,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderRightColor: orange,
    borderLeftColor: orange,
  },

  ItemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemTitleContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  ItemTitle: {
    fontSize: hp('2.3%'),
    color: black,
    // fontFamily: RobotoRegular,
  },
  subTitle: {
    fontSize: hp('1.5%'),
    color: blackShade,
    // fontFamily: RobotoRegular,
  },
  ImageView: {
    height: hp('11.5%'),
    width: hp('11.5%'),
    borderRadius: 16,
    backgroundColor: offWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
