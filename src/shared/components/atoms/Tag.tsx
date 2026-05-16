import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../../../constants/fonts';

interface TagProps {
  label: string;
}

export const Tag = ({ label }: TagProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
  },
  text: {
    color: '#374151',
    fontSize: 11,
    fontFamily: fonts.poppins.semiBold,
  },
});
