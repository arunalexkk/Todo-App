import { Button } from 'react-native-paper';
import * as React from 'react';
import { colors } from '../utils/colors';
interface Props {
  text: string;
  onPressAction: (...args: any[]) => any;
  extraProps?: Object;
}

const BaseButtonComponent: React.FC<Props> = ({
  text,
  onPressAction,
  ...extraProps
}) => {
  return (
    <Button
      mode="contained"
      onPress={onPressAction}
      buttonColor={colors.primary}
      {...extraProps}
    >
      {text}
    </Button>
  );
};

export default BaseButtonComponent;