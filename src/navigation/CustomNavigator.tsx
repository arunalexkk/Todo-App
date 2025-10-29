import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../Views/HomeView';
import TopBarComponent from '../commonComponents/TopBar';
import { colors } from '../utils/colors';
import NoteView from '../Views/NoteView';
import { RootStackParamList } from './CustomNavigatorTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CustomNavigator: React.FC = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeView}
        options={({ navigation }) => ({
          header: props => (
            <TopBarComponent
              
              {...props}
            />
          ),
        })}
      />

      <Screen name="Note" component={NoteView} />
    </Navigator>
  );
};

export default CustomNavigator;
