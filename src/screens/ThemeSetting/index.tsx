import React, {useContext} from 'react';
import {
  ApplicationContext,
  CheckBox,
  Colors,
  Container,
  defaultDarkTheme,
  defaultTheme,
  Image,
  Item,
  ItemList,
  Radio,
  Radius,
  Screen,
  ScreenContainerProps,
  Shadow,
  SizedBox,
  Spacing,
  Styles,
  Text,
} from '@passionui/components';
import {
  DeviceEventEmitter,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';
import BottomSheetPicker from '../../components/BottomSheetPicker';

const HeaderBackground = [
  'https://static.momocdn.net/app/img/app/img/header-background.png',
  'https://img.mservice.com.vn/app/img/paylater/bg_header_pink_purple.png',
  'https://static.momocdn.net/app/app/img/investment_header.png',
];
const ThemeSetting: React.FC<ScreenContainerProps> = ({navigation}) => {
  const {theme, navigator} = useContext(ApplicationContext);

  const onSelectColor = (
    selected: string,
    onSelected: (value: any) => void,
  ) => {
    navigator?.showBottomSheet({
      title: 'Select Options',
      screen: () => (
        <BottomSheetPicker
          data={Object.keys(Colors).map((key: string) => {
            const color = (Colors as {[key: string]: string})[key];
            return {
              title: key,
              value: color,
              icon: (
                <View
                  style={[
                    styles.icon,
                    {
                      backgroundColor: color,
                      borderColor: theme.colors.border.default,
                    },
                  ]}
                />
              ),
            };
          })}
          onSelect={(data: any) => {
            navigator?.pop();
            onSelected(data);
          }}
          selected={{title: selected, value: selected}}
          renderItem={undefined}
        />
      ),
    });
  };

  return (
    <Screen
      navigation={navigation}
      options={{
        title: 'Theme',
      }}
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
          <Text typography={'title_s'}>Header</Text>
        </Item>
        <ItemList
          data={HeaderBackground}
          widthSpan={8}
          heightSpan={4}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            let selectedStyles: ImageStyle = {};
            if (item === theme.assets?.headerBackground?.uri) {
              selectedStyles = {
                borderWidth: 1,
                borderColor: theme.colors.primary.default,
              };
            }
            return (
              <TouchableOpacity
                onPress={() => {
                  DeviceEventEmitter.emit('onChangeTheme', {
                    ...theme,
                    assets: {
                      ...theme.assets,
                      headerBackground: {
                        uri: item,
                      },
                    },
                  });
                }}>
                <Image
                  source={{uri: item}}
                  style={[styles.headerImage, selectedStyles]}
                />
              </TouchableOpacity>
            );
          }}
        />
      </Container>
      <SizedBox height={12} />
      <Container
        padding={12}
        gutter={12}
        style={[
          Shadow.light,
          {
            borderRadius: Spacing.M,
            backgroundColor: theme.colors.background.surface,
          },
        ]}>
        <Item widthSpan={12}>
          <CheckBox
            label="Dark Mode"
            value={theme.dark}
            onChange={() => {
              const value = theme.dark ? defaultTheme : defaultDarkTheme;
              DeviceEventEmitter.emit('onChangeTheme', value);
            }}
          />
        </Item>
      </Container>
      <SizedBox height={12} />
      <Container
        padding={12}
        gutter={12}
        style={[
          Shadow.light,
          {
            borderRadius: Spacing.M,
            backgroundColor: theme.colors.background.surface,
          },
        ]}>
        <Item>
          <Text typography={'title_s'}>Font</Text>
        </Item>
        <Item widthSpan={4}>
          <Radio
            label="SFProText"
            value="SFProText"
            onChange={() => {
              DeviceEventEmitter.emit('onChangeTheme', {
                ...theme,
                font: 'SFProText',
              });
            }}
            groupValue={theme.font}
          />
        </Item>
        <Item widthSpan={4}>
          <Radio
            label="Raleway"
            value="Raleway"
            onChange={() => {
              DeviceEventEmitter.emit('onChangeTheme', {
                ...theme,
                font: 'Raleway',
              });
            }}
            groupValue={theme.font}
          />
        </Item>
        <Item widthSpan={4}>
          <Radio
            label="Poppins"
            value="Poppins"
            onChange={() => {
              DeviceEventEmitter.emit('onChangeTheme', {
                ...theme,
                font: 'Poppins',
              });
            }}
            groupValue={theme.font}
          />
        </Item>
      </Container>
      <SizedBox height={12} />
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
              <TouchableOpacity
                onPress={() => {
                  onSelectColor(backgroundColor, (selected: any) => {
                    (theme.colors.primary as any)[item] = selected.value;
                    DeviceEventEmitter.emit('onChangeTheme', {
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: {
                          ...theme.colors.primary,
                        },
                      },
                    });
                  });
                }}>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  onSelectColor(backgroundColor, (selected: any) => {
                    (theme.colors.secondary as any)[item] = selected.value;
                    DeviceEventEmitter.emit('onChangeTheme', {
                      ...theme,
                      colors: {
                        ...theme.colors,
                        secondary: {
                          ...theme.colors.secondary,
                        },
                      },
                    });
                  });
                }}>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  onSelectColor(backgroundColor, (selected: any) => {
                    (theme.colors.background as any)[item] = selected.value;
                    DeviceEventEmitter.emit('onChangeTheme', {
                      ...theme,
                      colors: {
                        ...theme.colors,
                        background: {
                          ...theme.colors.background,
                        },
                      },
                    });
                  });
                }}>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  onSelectColor(backgroundColor, (selected: any) => {
                    (theme.colors.text as any)[item] = selected.value;
                    DeviceEventEmitter.emit('onChangeTheme', {
                      ...theme,
                      colors: {
                        ...theme.colors,
                        text: {
                          ...theme.colors.text,
                        },
                      },
                    });
                  });
                }}>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  onSelectColor(backgroundColor, (selected: any) => {
                    (theme.colors.border as any)[item] = selected.value;
                    DeviceEventEmitter.emit('onChangeTheme', {
                      ...theme,
                      colors: {
                        ...theme.colors,
                        border: {
                          ...theme.colors.border,
                        },
                      },
                    });
                  });
                }}>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  onSelectColor(backgroundColor, (selected: any) => {
                    (theme.colors.success as any)[item] = selected.value;
                    DeviceEventEmitter.emit('onChangeTheme', {
                      ...theme,
                      colors: {
                        ...theme.colors,
                        success: {
                          ...theme.colors.success,
                        },
                      },
                    });
                  });
                }}>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  onSelectColor(backgroundColor, (selected: any) => {
                    (theme.colors.warning as any)[item] = selected.value;
                    DeviceEventEmitter.emit('onChangeTheme', {
                      ...theme,
                      colors: {
                        ...theme.colors,
                        warning: {
                          ...theme.colors.warning,
                        },
                      },
                    });
                  });
                }}>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  onSelectColor(backgroundColor, (selected: any) => {
                    (theme.colors.error as any)[item] = selected.value;
                    DeviceEventEmitter.emit('onChangeTheme', {
                      ...theme,
                      colors: {
                        ...theme.colors,
                        error: {
                          ...theme.colors.error,
                        },
                      },
                    });
                  });
                }}>
                <View
                  style={[
                    styles.box,
                    {backgroundColor, borderColor: theme.colors.border.default},
                  ]}
                />
                <Text typography={'label_s'}>{item}</Text>
                <Text typography={'label_s'}>{backgroundColor}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => `success${item}`}
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
  headerImage: {borderRadius: Radius.M, overflow: 'hidden'},
  icon: {width: '100%', height: '100%', borderRadius: Radius.XS},
});
export default ThemeSetting;
