import { ActivityIndicator, Text } from 'react-native-paper';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { spacing } from '../utils/spacing';
import { commonStyles } from '../styles/commonStyles';

const LoadingSpinnerComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={colors.primary} size="small" />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flex1,
    ...commonStyles.center,
    flexDirection: 'row',
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    marginLeft: spacing.medium,
  },
});

export default LoadingSpinnerComponent;