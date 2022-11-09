import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FileCard } from '../components/Card';

export default function SettingsScreen(props) {

  return (
    <View style={styles.container}>
      <View style={styles.back_outboard}>
        <FileCard
          cardImg={require('../icon/baby-boy.png')}
          cardName={'Alice'}
          cardId={'Baby-01'}
          cardOnPress={() => props.navigation.push('SettingsDetailScreen')}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99C4CE',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  }
});
