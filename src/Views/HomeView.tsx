import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import NotesListComponent from '../commonComponents/NotesList';
import NoteActionDialogComponent from '../commonComponents/NoteActionDialog';
import { RootStackParamList } from '../navigation/CustomNavigatorTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { commonStyles } from '../styles/commonStyles';
import { colors } from '../utils/colors';
import { spacing } from '../utils/spacing';
import { Text } from 'react-native-paper';
import { useHomeManager } from '../hooks/useHomeManager';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeView: React.FC<Props> = ({ navigation }) => {
  const { notes, openSheet, deleteNote, openDeleteDialog, closeDeleteDialog } = useHomeManager();

  return (
    <View style={styles.container}>
      <NoteActionDialogComponent
        onDelete={deleteNote}
        sheetIsOpen={openSheet}
        closeSheet={closeDeleteDialog}
      />

      {notes.length > 0 ? (
        <NotesListComponent
          onNotePress={id => navigation.navigate('Note', { id })}
          onNoteLongPress={openDeleteDialog}
        />
      ) : (
        <View style={[commonStyles.flex1, commonStyles.center]}>
          <Text>No notes yet. Tap the + button to add one!</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Note')}>
        <MaterialCommunityIcons name="plus" color={colors.white} size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flex1,
    marginTop: spacing.medium,
  },
  fab: {
    position: 'absolute',
    margin: spacing.large,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    ...commonStyles.center,
    elevation: 8,
  },
});

export default HomeView;