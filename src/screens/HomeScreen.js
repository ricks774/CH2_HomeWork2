import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
// 載入自製樣式
import CardStyle from '../style/CardStyle';
import TextStyle from '../style/TextStyle';
import { MainCard } from '../components/Card';

export default function HomeScreen(props) {

  return (
    <View style={styles.container}>
      <View>
        {/* <TextInput style={styles.search_bar}></TextInput> */}
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: 'center' }}>
          <MainCard
            cardStyle={CardStyle.card_orange}
            cardImg={require('../icon/baby-boy.png')}
            cardName={'Alice'}
            cardAge={'1歲3個月'}
            cardDate={'2022/11/07 11:54'}
            cardId={'Baby-01'}
            cardOnPress={() => props.navigation.push('HomeDetailScreen', { bgc: '#F7DBCD', cardBg: '#F5C3A2' })}
          />
          <MainCard
            cardStyle={CardStyle.card_green}
            cardImg={require('../icon/baby-boy.png')}
            cardName={'Alice'}
            cardAge={'1歲3個月'}
            cardDate={'2022/11/07 11:54'}
            cardId={'Baby-01'}
            cardOnPress={() => props.navigation.push('HomeDetailScreen', { bgc: '#C7DEE2', cardBg: '#99C4CE' })}
          />
          <MainCard
            cardStyle={CardStyle.card_yellow}
            cardImg={require('../icon/baby-boy.png')}
            cardName={'Alice'}
            cardAge={'1歲3個月'}
            cardDate={'2022/11/07 11:54'}
            cardId={'Baby-01'}
            cardOnPress={() => props.navigation.push('HomeDetailScreen', { bgc: '#F0D6A8', cardBg: '#E7B358' })}
          />
          <MainCard
            cardStyle={CardStyle.card_blue}
            cardImg={require('../icon/baby-boy.png')}
            cardName={'Alice'}
            cardAge={'1歲3個月'}
            cardDate={'2022/11/07 11:54'}
            cardId={'Baby-01'}
            cardOnPress={() => props.navigation.push('HomeDetailScreen', { bgc: '#88A0C6', cardBg: '#B4C5E1' })}
          />
          <MainCard
            cardStyle={CardStyle.card_orange}
            cardImg={require('../icon/baby-boy.png')}
            cardName={'Alice'}
            cardAge={'1歲3個月'}
            cardDate={'2022/11/07 11:54'}
            cardId={'Baby-01'}
            cardOnPress={() => props.navigation.push('HomeDetailScreen', { bgc: '#F7DBCD', cardBg: '#F5C3A2' })}
          />
          <MainCard
            cardStyle={CardStyle.card_green}
            cardImg={require('../icon/baby-boy.png')}
            cardName={'Alice'}
            cardAge={'1歲3個月'}
            cardDate={'2022/11/07 11:54'}
            cardId={'Baby-01'}
            cardOnPress={() => props.navigation.push('HomeDetailScreen', { bgc: '#C7DEE2', cardBg: '#99C4CE' })}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '93%',
    backgroundColor: '#EBEBEB',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 26,
    marginTop: 50,
    marginBottom:60
  },
  search_bar: {
    width: 200,
    height: 30,
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
    borderRadius: 30,
    textAlign: 'center'
  }
});
