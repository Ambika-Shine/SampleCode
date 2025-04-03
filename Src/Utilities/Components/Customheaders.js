import {StyleSheet, Text, View} from 'react-native';
import {getStatusBarHeight, screenWidth} from '../Helpers';
import {AppColors, Fonts} from '../AppColors';
import VectorIcon from './vectoricons';

export function BasicHeader({title, OnBackPress, onlytitle}) {
  return (
    <View
      style={
        onlytitle
          ? styles.HomeOnlyTitileHeaderMainView
          : styles.HomeHeaderMainView
      }>
      {onlytitle ? (
        <Text style={styles.headertitle}>{title}</Text>
      ) : (
        <>
          <VectorIcon
            onPress={OnBackPress}
            groupName={'AntDesign'}
            name={'left'}
            color={AppColors.white}
            size={25}
          />
          <Text style={styles.headertitle}>{title}</Text>
          <VectorIcon
            style={{overFlow: 'hidden'}}
            groupName={'AntDesign'}
            name={'left'}
            color={'transparent'}
            size={25}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  HomeHeaderMainView: {
    width: screenWidth,
    alignSelf: 'center',
    paddingTop: getStatusBarHeight() + 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HomeOnlyTitileHeaderMainView: {
    width: screenWidth,
    alignSelf: 'center',
    paddingTop: getStatusBarHeight() + 20,
  },
  headertitle: {
    color: AppColors.white,
    fontSize: 22,
    fontFamily: Fonts.Medium,
    textAlign: 'center',
  },
});
