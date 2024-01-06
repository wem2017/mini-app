import {
  ApplicationContext,
  Button,
  Container,
  Item,
  Screen,
  ScreenContainerProps,
  Shadow,
  SizedBox,
  Spacing,
  Styles,
  Text,
} from '@passionui/components';
import React, {useContext} from 'react';
import {View} from 'react-native';

import {AnimatedHeader, HeaderStyle} from '../index.tsx';

const Motions: React.FC<ScreenContainerProps> = ({navigation}) => {
  const {theme, navigator} = useContext(ApplicationContext);

  return (
    <Screen
      options={{title: 'Motions'}}
      navigation={navigation}
      headerStyle={'surface'}
      scrollable={true}
      scrollViewProps={{contentContainerStyle: Styles.paddingVerticalM}}>
      <Container
        padding={12}
        gutter={8}
        style={[
          Shadow.light,
          {
            borderRadius: Spacing.M,
            backgroundColor: theme.colors.background.surface,
          },
        ]}>
        <Item>
          <Text typography={'title_xs'}>Transitions</Text>
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Push'}
            onPress={() => {
              navigator?.push({
                screen: () => (
                  <View style={{flex: 1, backgroundColor: 'red'}} />
                ),
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Present'}
            onPress={() => {
              navigator?.present({
                screen: () => (
                  <View style={{flex: 1, backgroundColor: 'red'}} />
                ),
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Replace'}
            onPress={() => {
              navigator?.replace({
                screen: () => (
                  <View style={{flex: 1, backgroundColor: 'red'}} />
                ),
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Reset'}
            onPress={() => {
              navigator?.reset({
                screen: () => (
                  <View style={{flex: 1, backgroundColor: 'red'}} />
                ),
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Pop To Top'}
            onPress={() => {
              navigator?.popToTop();
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Show Modal'}
            onPress={() => {
              navigator?.showModal({
                screen: () => (
                  <View
                    style={{width: 200, height: 300, backgroundColor: 'red'}}
                  />
                ),
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Show BottomSheet'}
            onPress={() => {
              navigator?.showBottomSheet({
                title: 'Bottom Sheet',
                screen: () => <View style={{height: 300, width: '100%'}} />,
              });
            }}
          />
        </Item>
      </Container>
      <SizedBox height={16} />
      <Container
        padding={12}
        gutter={8}
        style={[
          Shadow.light,
          {
            borderRadius: Spacing.M,
            backgroundColor: theme.colors.background.surface,
          },
        ]}>
        <Item>
          <Text typography={'title_xs'}>Screen Styles</Text>
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Header Style'}
            onPress={() => {
              navigator?.push({
                screen: HeaderStyle,
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Animated Header'}
            onPress={() => {
              navigator?.push({
                screen: AnimatedHeader,
              });
            }}
          />
        </Item>
      </Container>
    </Screen>
  );
};

export default Motions;
