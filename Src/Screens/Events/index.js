import React, {useRef, useState} from 'react';
import {ImageBackground, Keyboard, StyleSheet, View} from 'react-native';
import {AppColors, AppImages} from '../../Utilities/AppColors';
import {BasicHeader} from '../../Utilities/Components/Customheaders';
import {SearchCommonInput} from '../../Utilities/Components/CommonInput';
import {EventSectionComponent} from '../../Utilities/Components/ContentComponent';
import {EventsData} from '../../Utilities/Components/StaticArray';

const Events = () => {
  const [SerchedEvents, setSerchedEvents] = useState(EventsData);
  const [searchvalue, setsearchvalue] = useState('');
  const dataref = useRef(EventsData);

  const OnSearchEvents = text => {
    const newData = dataref.current.filter(item => {
      const itemData = `${item.address.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSerchedEvents(newData);
    setsearchvalue(text);
  };
  return (
    <ImageBackground style={styles.container} source={AppImages.EventBackImg}>
      <BasicHeader onlytitle title="Events" />
      <SearchCommonInput
        placeholder={'Search By City'}
        borderColor={AppColors.white}
        placeholderTextColor={AppColors.white}
        value={searchvalue}
        onChangeText={OnSearchEvents}
      />

      <View style={{flex: 1}}>
        <EventSectionComponent
          OnItemPress={item => {
            Keyboard.dismiss();
          }}
          data={SerchedEvents}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(Events);
