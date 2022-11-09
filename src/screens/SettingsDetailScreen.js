import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { FileDetailCard } from '../components/Card';

export default function SettingsScreen(props) {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView_bg}>
        <FileDetailCard
          cardName={'Alice'}
          cardId={'Baby-01'}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0D6A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView_bg: {
    backgroundColor: '#EBEBEB',
    width: '85%',
    height: '90%',
    borderRadius: 40,
    marginTop: 60
  }
});
