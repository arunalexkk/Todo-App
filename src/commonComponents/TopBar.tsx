import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/spacing';
import { useTopBarManager } from '../hooks/topBarManager';

const TopBarComponent: React.FC = () => {
  const { searchNotes } = useTopBarManager();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Notes"
          onChangeText={searchNotes}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 64,
    paddingHorizontal: spacing.small,
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 24,
    height: 48,
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 48,
  },
  avatarButton: {
    marginRight: spacing.small,
  },
});

export default TopBarComponent;