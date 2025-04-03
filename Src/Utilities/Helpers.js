import {
  Dimensions,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from 'react-native';
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {AppColors, Fonts} from './AppColors';

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP13MINI_HEIGHT = 50;
const STATUSBAR_IP14PRO_HEIGHT = 59;
const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;
const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;
const IP13MINI_WIDTH = 375;
const IP13MINI_HEIGHT = 812;
const IP14PRO_WIDTH = 393;
const IP14PRO_HEIGHT = 852;
const IP14MAX_WIDTH = 430;
const IP14MAX_HEIGHT = 932;
const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');
let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;
let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhone12_v = false;
let isIPhone12Max_v = false;
let isIPhone13Mini_v = false;
let isIPhoneWithMonobrow_v = false;
let isIPhoneWithDynamicIsland_v = false;

if (Platform.OS == 'ios' && !Platform.isPad) {
  if (W_WIDTH == X_WIDTH && W_HEIGHT == X_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneX_v = true;
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (W_WIDTH == XSMAX_WIDTH && W_HEIGHT == XSMAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneXMax_v = true;
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (W_WIDTH == IP12_WIDTH && W_HEIGHT == IP12_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhone12_v = true;
    statusBarHeight = STATUSBAR_IP12_HEIGHT;
  } else if (W_WIDTH == IP12MAX_WIDTH && W_HEIGHT == IP12MAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhone12Max_v = true;
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
  } else if (W_WIDTH == IP13MINI_WIDTH && W_HEIGHT == IP13MINI_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhone13Mini_v = true;
    statusBarHeight = STATUSBAR_IP13MINI_HEIGHT;
  } else if (W_WIDTH == IP14PRO_WIDTH && W_HEIGHT == IP14PRO_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneWithDynamicIsland_v = true;
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  } else if (W_WIDTH == IP14MAX_WIDTH && W_HEIGHT == IP14MAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneWithDynamicIsland_v = true;
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  }
}

export const isIPhoneX = () => isIPhoneX_v;
export const isIPhoneXMax = () => isIPhoneXMax_v;
export const isIPhone12 = () => isIPhone12_v;
export const isIPhone12Max = () => isIPhone12Max_v;
export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;
export const isIPhone13Mini = () => isIPhone13Mini_v;
export const isIPhoneWithDynamicIsland = () => isIPhoneWithDynamicIsland_v;

export function getStatusBarHeight(skipAndroid) {
  return Platform.select({
    ios: statusBarHeight,
    default: 0,
    android: 0,
  });
}

export function FastImageComponent({
  style,
  source,
  resizeMode,
  width,
  height,
  radius,
  position,
  ml,
  mr,
  mt,
  mb,
  tintColor,
  loadersize,
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <ActivityIndicator
          style={styles.loader}
          size={loadersize ? loadersize : 'large'}
          color={AppColors.maincolor}
        />
      )}
      <FastImage
        tintColor={tintColor}
        style={{
          ...style,
          height: height,
          width: width,
          borderRadius: radius,
          alignSelf: position,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
        }}
        source={source}
        resizeMode={
          resizeMode == 'contain'
            ? FastImage.resizeMode.contain
            : resizeMode == 'stretch'
            ? FastImage.resizeMode.stretch
            : resizeMode == 'center'
            ? FastImage.resizeMode.center
            : FastImage.resizeMode.cover
        }
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </>
  );
}

export function TouchableComponent({
  onPress,
  style,
  children,
  onLongPress,
  hitSlop,
  onPressIn,
  onBlur,
  disabled,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={style}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={1}
      hitSlop={hitSlop}
      onPressIn={onPressIn}
      onBlur={onBlur}>
      {children}
    </TouchableOpacity>
  );
}

export function CustomLoader({}) {
  return (
    <View style={styles.customloader}>
      <ActivityIndicator color={AppColors.maincolor} size={'large'} />
    </View>
  );
}

export function CustomPagiFooterLoader({mt}) {
  return (
    <View style={{...styles.custompagifooterloader, marginTop: mt ? mt : 10}}>
      <ActivityIndicator color={AppColors.maincolor} size={'large'} />
    </View>
  );
}

export function InternetMessageView({}) {
  return (
    <View style={{...NoStyles.nodataview, marginTop: 0}}>
      <Text style={NoStyles.nodatatext}>No Internet Connection!</Text>
    </View>
  );
}

export const NoStyles = {
  nodataview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  nodatatext: {
    fontSize: 18,
    color: AppColors.white,
    fontFamily: Fonts.Medium,
  },
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
  },
  customloader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  custompagifooterloader: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
