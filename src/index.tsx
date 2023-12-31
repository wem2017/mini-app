import React, {useEffect, useState} from 'react';
import {
  BottomTab,
  BottomTabItemProps,
  defaultTheme,
  NavigationContainer,
  ScreenContainerProps,
  Theme,
} from '@passionui/components';
import {useNavigationContainerRef} from '@react-navigation/native';
import {Components, StylesGuide} from './screens';
import Motions from './screens/Motions';
import PlatformApi from '@api';
import {DeviceEventEmitter} from 'react-native';
import {DATA} from './screens/Components';

const Main: React.FC<ScreenContainerProps> = () => {
  const tabs: BottomTabItemProps[] = [
    {
      name: 'Styles',
      title: 'Styles Guide',
      icon: 'palette-swatch-outline',
      screen: StylesGuide,
    },
    {
      name: 'Components',
      title: 'Components',
      icon: 'shape-outline',
      tabBarBadge: DATA.length,
      screen: Components,
    },
    {
      name: 'Motions',
      title: 'Motions',
      icon: 'transition',
      screen: Motions,
    },
  ];

  return <BottomTab tabs={tabs} />;
};
const App = () => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const onChangeTheme = (data: Theme) => {
      setTheme(data);
    };
    const subscription = DeviceEventEmitter.addListener(
      'onChangeTheme',
      onChangeTheme,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer
      theme={theme}
      screen={Main}
      navigationRef={useNavigationContainerRef()}
      onDismiss={PlatformApi.dismiss}
    />
  );
};

export default App;
