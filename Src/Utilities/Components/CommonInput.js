import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AppColors, Fonts} from '../AppColors';
import {screenWidth} from '../Helpers';
import VectorIcon from './vectoricons';

export function CommonInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onFocus,
  onBlur,
  error,
  groupName,
  iconname,
  keyboardType,
  iconpress,
  iconposition,
  maxLength,
  editable,
  isicon,
  autoFocus,
  placeholderTextColor,
  width,
}) {
  return (
    <View style={styles.Inputmainview}>
      <TextInput
        style={{
          ...styles.Input,
          borderColor: error ? AppColors.red : AppColors.inputborder,
          paddingRight: isicon ? 45 : 15,
          width: width ? width : screenWidth / 1.1,
        }}
        selectionColor={AppColors.maincolor}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor
            ? placeholderTextColor
            : AppColors.placeholdercolor
        }
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
        returnKeyType="done"
        maxLength={maxLength}
        editable={editable}
        autoFocus={autoFocus}
      />

      {isicon ? (
        <VectorIcon
          groupName={groupName}
          name={iconname}
          size={20}
          style={{...styles.icon, top: iconposition ? iconposition : 17}}
          color={AppColors.maincolor}
          onPress={iconpress}
        />
      ) : null}

      {error ? (
        <Text style={{...styles.error, color: AppColors.red}}>{error}</Text>
      ) : null}
    </View>
  );
}

export function SearchCommonInput({
  value,
  onChangeText,
  onFocus,
  onBlur,
  keyboardType,
  maxLength,
  editable,
  autoFocus,
  placeholderTextColor,
  borderColor,
  placeholder,
}) {
  return (
    <View style={{...styles.Inputmainview, marginTop: 20, marginBottom: 5}}>
      <TextInput
        style={{
          ...styles.SearchInput,
          borderColor: borderColor ? borderColor : AppColors.inputborder,
        }}
        selectionColor={AppColors.maincolor}
        placeholder={placeholder ? placeholder : 'Search'}
        placeholderTextColor={
          placeholderTextColor
            ? placeholderTextColor
            : AppColors.placeholdercolor
        }
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
        returnKeyType="done"
        maxLength={maxLength}
        editable={editable}
        autoFocus={autoFocus}
      />
      <View style={styles.searchiconview}>
        <VectorIcon
          groupName={'AntDesign'}
          name={'search1'}
          size={20}
          color={AppColors.black}
        />
      </View>
    </View>
  );
}

export function MultiLineCommonInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onFocus,
  onBlur,
  error,
  keyboardType,
  maxLength,
  editable,
  autoFocus,
  placeholderTextColor,
  width,
  position,
}) {
  return (
    <View style={styles.Inputmainview}>
      <TextInput
        style={{
          ...styles.MultiInput,
          borderColor: error ? AppColors.red : AppColors.inputborder,
          width: width ? width : screenWidth / 1.1,
          alignSelf: position ? position : 'center',
        }}
        selectionColor={AppColors.maincolor}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor
            ? placeholderTextColor
            : AppColors.placeholdercolor
        }
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
        returnKeyType="done"
        maxLength={maxLength}
        editable={editable}
        autoFocus={autoFocus}
        multiline={true}
        textAlignVertical="top"
      />

      {error ? (
        <Text style={{...styles.error, color: AppColors.red}}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  Inputmainview: {
    marginBottom: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Input: {
    height: 52,
    width: screenWidth / 1.1,
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 14,
    color: AppColors.white,
    fontFamily: Fonts.Book,
    borderRadius: 100,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 10,
    justifyContent: 'center',
  },
  SearchInput: {
    height: 52,
    width: screenWidth / 1.1,
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 14,
    color: AppColors.white,
    fontFamily: Fonts.Book,
    borderRadius: 100,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 45,
    justifyContent: 'center',
    borderColor: AppColors.inputborder,
  },
  MultiInput: {
    fontSize: 14,
    color: AppColors.white,
    fontFamily: Fonts.Book,
    borderRadius: 8,
    justifyContent: 'center',
    maxHeight: 100,
    minHeight: 52,
    borderWidth: 1,
    borderColor: AppColors.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  searchiconview: {
    height: 41,
    width: 41,
    borderRadius: 100,
    backgroundColor: AppColors.maincolor,
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 12,
    fontFamily: Fonts.Book,
    marginTop: 3,
    width: screenWidth / 1.1,
    alignSelf: 'center',
  },
  icon: {
    position: 'absolute',
    right: 15,
    alignSelf: 'center',
  },
});
