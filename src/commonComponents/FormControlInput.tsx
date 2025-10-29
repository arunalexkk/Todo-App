import * as React from 'react';
import { View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';

interface Props {
  inputName: string;
  placeholder: string;
  inputType: 'text' | 'password';
  required: boolean;
  invalid: boolean;
  errorMessage?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const FormControlInputComponent: React.FC<Props> = ({
  inputName,
  placeholder,
  inputType,
  required,
  invalid,
  errorMessage,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <Text>{inputName}{required ? ' *' : ''}</Text>
      <TextInput
        secureTextEntry={inputType === 'password'}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        error={invalid}
        style={{ backgroundColor: 'transparent' }}
        activeOutlineColor={colors.primary}
      />
      <HelperText type="error" visible={invalid}>
        {errorMessage}
      </HelperText>
    </View>
  );
};

export default FormControlInputComponent;