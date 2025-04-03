import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  FastImageComponent,
  NoStyles,
  TouchableComponent,
  screenWidth,
} from '../Helpers';
import {AppColors, AppImages, Fonts} from '../AppColors';
import VectorIcon from './vectoricons';
import moment from 'moment';

import React from 'react';

export const GetDate = createddate => {
  const date = moment(createddate);
  if (!date.isValid()) {
    return 'Invalid date';
  }
  return date.fromNow();
};

export const formatDuration = durationInSeconds => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export function EventSectionComponent({data, OnItemPress}) {
  return (
    <>
      {data?.length > 0 ? (
        <View
          style={{
            flex: 1,
            marginTop: 10,
          }}>
          <FlatList
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item?.id?.toString()}
            style={{alignSelf: 'center'}}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item, index}) =>
              RenderEventSectionList(item, index, OnItemPress)
            }
          />
        </View>
      ) : (
        <View style={{...NoStyles?.nodataview, marginTop: 0}}>
          <Text style={NoStyles?.nodatatext}>No Events Available</Text>
        </View>
      )}
    </>
  );
}
const RenderEventSectionList = (item, index, OnItemPress) => {
  const formattedDate = moment(item?.event_date);
  const day = formattedDate.format('DD');
  const month = formattedDate.format('MMM');
  const fulldate = formattedDate.format('DD MMM YYYY');
  return (
    <TouchableComponent
      onPress={() => {
        OnItemPress(item);
      }}
      style={styles.EventSectionListView}>
      <View
        style={{
          ...styles.VideoListImageView,
          height: 240,
          width: screenWidth / 1.1,
          borderRadius: 28,
        }}>
        <ImageBackground source={AppImages.DateView} style={styles.dateviewimg}>
          <Text style={styles.EventDateText}>{day}</Text>
          <Text style={styles.EventDateText}>{month}</Text>
        </ImageBackground>
        <FastImageComponent
          source={{uri: item?.event_image_url}}
          width={screenWidth / 1.1}
          height={240}
          radius={28}
        />
      </View>
      <View style={styles.EventSectionListnameView}>
        <Text
          style={{...styles.EventSectionListname, width: screenWidth / 1.8}}
          numberOfLines={1}>
          {item?.name}
        </Text>
        <Text
          style={{
            ...styles.EventSectionListname,
            color: AppColors.maincolor,
            fontFamily: Fonts.Bold,
          }}>
          ${item?.price}
        </Text>
      </View>
      <View
        style={{
          ...styles.EventSectionListnameView,
          marginVertical: 0,
          marginBottom: 15,
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: screenWidth / 2.3,
          }}>
          <VectorIcon
            groupName={'Ionicons'}
            name={'location-sharp'}
            color={AppColors.white}
            size={20}
            style={{marginRight: 5}}
          />
          <Text style={styles.EventSectionListDate}>{item?.address}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <VectorIcon
            groupName={'Ionicons'}
            name={'calendar-clear'}
            color={AppColors.white}
            size={20}
            style={{marginRight: 5}}
          />
          <Text style={styles.EventSectionListDate}>{fulldate}</Text>
        </View>
      </View>
      {item?.is_completed && (
        <Text
          style={{
            ...styles.EventSectionListname,
            marginBottom: 15,
            marginLeft: 20,
            fontSize: 16,
            color: 'green',
          }}
          numberOfLines={1}>
          This Event is already Completed
        </Text>
      )}
    </TouchableComponent>
  );
};

export const styles = StyleSheet.create({
  VideoListImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 1.1 - 22,
    alignSelf: 'center',
    height: 200,
  },

  EventSectionListView: {
    minHeight: 100,
    width: screenWidth / 1.1,
    alignSelf: 'center',
    backgroundColor: AppColors.greybtncolor,
    marginBottom: 15,
    borderRadius: 28,
  },
  dateviewimg: {
    height: 66,
    width: 66,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 9,
    right: 10,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EventDateText: {
    color: AppColors.white,
    fontSize: 18,
    fontFamily: Fonts.Medium,
    textAlign: 'center',
  },
  EventSectionListnameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  EventSectionListname: {
    color: AppColors.white,
    fontSize: 20,
    fontFamily: Fonts.Medium,
  },
  EventSectionListDate: {
    color: AppColors.white,
    fontFamily: Fonts.Book,
    fontSize: 16,
  },
});
