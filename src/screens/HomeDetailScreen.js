import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { DetailCard } from '../components/Card';
import TextStyle from "../style/TextStyle";
import CardStyle from "../style/CardStyle";


export default function HomeDetailScreen(props) {

  return (
    <View style={styles.container}>
      <View style={styles.main_bg}>
        <ScrollView style={[styles.scroll_bg, { backgroundColor: props.route.params.bgc }]}>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={TextStyle.detail_date}>11/09</Text>
            <DetailCard
              cardStyle={[CardStyle.detail_card_white, { backgroundColor: props.route.params.cardBg }]}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={CardStyle.detail_card_white}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={[CardStyle.detail_card_white, { backgroundColor: props.route.params.cardBg }]}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={TextStyle.detail_date}>11/08</Text>
            <DetailCard
              cardStyle={[CardStyle.detail_card_white, { backgroundColor: props.route.params.cardBg }]}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={CardStyle.detail_card_white}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={[CardStyle.detail_card_white, { backgroundColor: props.route.params.cardBg }]}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={CardStyle.detail_card_white}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={TextStyle.detail_date}>11/07</Text>
            <DetailCard
              cardStyle={[CardStyle.detail_card_white, { backgroundColor: props.route.params.cardBg }]}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={CardStyle.detail_card_white}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={TextStyle.detail_date}>11/06</Text>
            <DetailCard
              cardStyle={[CardStyle.detail_card_white, { backgroundColor: props.route.params.cardBg }]}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={CardStyle.detail_card_white}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={[CardStyle.detail_card_white, { backgroundColor: props.route.params.cardBg }]}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
            <DetailCard
              cardStyle={CardStyle.detail_card_white}
              time={'07:22'}
              item={'亞培'}
              capacity={'120cc'}
              name={'吳阿強'}
            />
          </View>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  main_bg: {
    width: '93%',
    height: '84.7%',
    backgroundColor: '#EBEBEB',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 26,
    marginTop: 20
  },
  scroll_bg: {
    width: '100%',
    backgroundColor: '#F7DBCD',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 26,
    marginTop: 20,
    marginBottom:60
  }
});
