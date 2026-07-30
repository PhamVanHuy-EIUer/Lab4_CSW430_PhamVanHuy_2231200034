import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        {icon && (
          <Icon
            source={icon}
            size={24}
            style={styles.icon}
          />
        )}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderContainer: {
    paddingHorizontal: 15,
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 16,
    gap: 10,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: '#9e9696',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    color: 'black',
    marginRight: 20,
    alignSelf: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: '#1565C0',
    fontSize: 14,
    marginTop: 4,
  },
});

export default DetailListItem;