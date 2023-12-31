import {
  Colors,
  Screen,
  Spacing,
  ScreenContainerProps,
} from '@passionui/components';
import React from 'react';
import {View} from 'react-native';

const DefaultHeader: React.FC<ScreenContainerProps> = ({navigation}) => {
  return (
    <Screen
      navigation={navigation}
      scrollable={true}
      headerStyle={'default'}
      style={{padding: Spacing.M}}>
      <View
        style={{
          width: '100%',
          height: 1000,
          borderRadius: Spacing.M,
          backgroundColor: Colors.white,
        }}
      />
    </Screen>
  );
};

export default DefaultHeader;