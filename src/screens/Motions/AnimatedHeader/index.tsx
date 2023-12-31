import {
  ApplicationContext,
  HeaderBanner,
  Screen,
  ScreenContainerProps,
  Spacing,
  Styles,
  Switch,
  Text,
} from '@passionui/components';
import React, {useContext, useState} from 'react';
import {View} from 'react-native';

const ExtendedHeader: React.FC<ScreenContainerProps> = ({navigation}) => {
  const {theme} = useContext(ApplicationContext);
  const [surface, setSurface] = useState(false);
  return (
    <Screen
      navigation={navigation}
      scrollable={true}
      animatedHeader={{
        type: surface ? 'surface' : 'default',
        component: props => (
          <HeaderBanner
            {...props}
            source={{uri: 'https://source.unsplash.com/random'}}
          />
        ),
      }}>
      <View
        style={{
          width: '100%',
          height: 1000,
          padding: Spacing.M,
          borderRadius: Spacing.M,
          backgroundColor: theme.colors.background.default,
        }}>
        <View style={Styles.rowSpace}>
          <Text typography={'title_s'}>Surface</Text>
          <Switch value={surface} onChange={() => setSurface(!surface)} />
        </View>
      </View>
    </Screen>
  );
};

export default ExtendedHeader;
