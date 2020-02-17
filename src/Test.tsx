import React, {SFC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const Test: SFC<{}> = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Test Screen</Text>
  </View>
);

export default Test;
