import {Container, Screen, ScreenContainerProps} from '@passionui/components';
import React from 'react';

const PopupUsage: React.FC<ScreenContainerProps> = ({navigation}) => {
  return (
    <Screen
      navigation={navigation}
      headerStyle={'surface'}
      options={{title: 'Components'}}>
      <Container padding={12} gutter={8}></Container>
    </Screen>
  );
};

export default PopupUsage;
