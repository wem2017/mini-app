import {
  ApplicationContext,
  Container,
  Item,
  ItemList,
  NavigationButton,
  Radius,
  Screen,
  ScreenContainerProps,
  Shadow,
  SizedBox,
  Spacing,
  Styles,
  Text,
} from '@passionui/components';

import React, {useCallback, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeSetting} from '../index.tsx';

const StylesGuide: React.FC<ScreenContainerProps> = ({navigation}) => {
  const {theme, navigator} = useContext(ApplicationContext);

  const headerRight = useCallback(
    (props: any) => (
      <NavigationButton
        {...props}
        icon={'palette-outline'}
        onPress={() => {
          navigator?.push({screen: ThemeSetting});
        }}
      />
    ),
    [navigator],
  );

  return (
    <Screen
      navigation={navigation}
      options={{
        title: 'Styles Guide',
        headerRight,
      }}
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
          <Text typography={'title_s'}>Primary</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(theme.colors.primary)}
          renderItem={({item}) => {
            const backgroundColor = (theme.colors.primary as any)[item];
            return (
              <View>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </View>
            );
          }}
          keyExtractor={item => `primary${item}`}
        />
        <Item>
          <Text typography={'title_s'}>Secondary</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(theme.colors.secondary)}
          renderItem={({item}) => {
            const backgroundColor = (theme.colors.secondary as any)[item];
            return (
              <>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </>
            );
          }}
          keyExtractor={item => `secondary${item}`}
        />
        <Item>
          <Text typography={'title_s'}>Background</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(theme.colors.background)}
          renderItem={({item}) => {
            const backgroundColor = (theme.colors.background as any)[item];
            return (
              <>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </>
            );
          }}
          keyExtractor={item => `background${item}`}
        />
        <Item>
          <Text typography={'title_s'}>Text</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(theme.colors.text)}
          renderItem={({item}) => {
            const backgroundColor = (theme.colors.text as any)[item];
            return (
              <>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </>
            );
          }}
          keyExtractor={item => `text${item}`}
        />
        <Item>
          <Text typography={'title_s'}>Border</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(theme.colors.border)}
          renderItem={({item}) => {
            const backgroundColor = (theme.colors.border as any)[item];
            return (
              <>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </>
            );
          }}
          keyExtractor={item => `border${item}`}
        />
        <Item>
          <Text typography={'title_s'}>Success</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(theme.colors.success)}
          renderItem={({item}) => {
            const backgroundColor = (theme.colors.success as any)[item];
            return (
              <>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </>
            );
          }}
          keyExtractor={item => `success${item}`}
        />
        <Item>
          <Text typography={'title_s'}>Warning</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(theme.colors.warning)}
          renderItem={({item}) => {
            const backgroundColor = (theme.colors.warning as any)[item];
            return (
              <>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </>
            );
          }}
          keyExtractor={item => `success${item}`}
        />
        <Item>
          <Text typography={'title_s'}>Error</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(theme.colors.error)}
          renderItem={({item}) => {
            const backgroundColor = (theme.colors.error as any)[item];
            return (
              <>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </>
            );
          }}
          keyExtractor={item => `success${item}`}
        />
      </Container>
      <SizedBox height={Spacing.M} />
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
          <Text typography={'title_s'}>Spacing</Text>
        </Item>
        <View style={Styles.row}>
          {Object.keys(Spacing).map(item => {
            return (
              <View
                key={item}
                style={{alignItems: 'center', marginRight: Spacing.L}}>
                <View
                  style={{
                    height: 32,
                    margin: Spacing.S,
                    width: (Spacing as any)[item],
                    backgroundColor: theme.colors.primary.default,
                  }}
                />
                <Text typography={'label_s'}>{item}</Text>
              </View>
            );
          })}
        </View>
      </Container>
      <SizedBox height={Spacing.M} />
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
          <Text typography={'title_s'}>Radius</Text>
        </Item>
        <ItemList
          scrollEnabled={false}
          widthSpan={3}
          data={Object.keys(Radius)}
          renderItem={({item}) => {
            const borderRadius = (Radius as any)[item];
            return (
              <>
                <View
                  style={[
                    styles.box,
                    {
                      backgroundColor: theme.colors.primary.default,
                      borderRadius,
                      borderColor: theme.colors.border.default,
                    },
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
              </>
            );
          }}
          keyExtractor={item => `radius${item}`}
        />
      </Container>
    </Screen>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 60,
    borderRadius: Radius.M,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
});
export default StylesGuide;
