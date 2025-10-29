import { Text, TouchableRipple } from 'react-native-paper';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../utils/spacing';
import { colors } from '../utils/colors';
interface Props {
  title: string;
  content: string;
  onNotePress: () => void;
  onNoteLongPress: () => void;
}

const ListItemComponent: React.FC<Props> = ({
  title,
  content,
  onNotePress,
  onNoteLongPress,
}) => {
  return (
    <TouchableRipple
      onPress={onNotePress}
      onLongPress={onNoteLongPress}
      style={styles.pressable}
    >
      <View style={styles.container}>
        {title ? (
          <Text style={styles.title}>
            {title}
          </Text>
        ) : null}

        {content ? (
          <Text style={styles.content}>
            {content}
          </Text>
        ) : null}
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  pressable: {
    margin: spacing.xsmall,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  container: {
    padding: spacing.small,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    color: colors.gray,
  },
});


export default ListItemComponent;