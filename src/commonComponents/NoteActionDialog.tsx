import * as React from 'react';
import { Dialog, Button, Portal } from 'react-native-paper';

interface Props {
  sheetIsOpen: boolean;
  closeSheet: () => void;
  onDelete: () => void;
}

const NoteActionDialogComponent: React.FC<Props> = ({
  sheetIsOpen,
  closeSheet,
  onDelete,
}) => {
  return (
    <Portal>
      <Dialog visible={sheetIsOpen} onDismiss={closeSheet}>
        <Dialog.Title>Note actions</Dialog.Title>
        <Dialog.Actions>
          <Button
            onPress={() => {
              onDelete();
              closeSheet();
            }}
          >
            Delete
          </Button>
          <Button onPress={closeSheet}>Cancel</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default NoteActionDialogComponent;