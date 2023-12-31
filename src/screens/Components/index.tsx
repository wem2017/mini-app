import {
  ApplicationContext,
  Container,
  Image,
  InputSearch,
  Item,
  ItemList,
  Radius,
  Screen,
  ScreenContainerProps,
  SizedBox,
  Spacing,
  Styles,
  Text,
} from '@passionui/components';
import React, {useContext, useState} from 'react';
import TextUsage from './Text';
import Assets from '../../assets';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IconUsage from './Icon';
import ButtonUsage from './Button';
import IconButtonUsage from './IconButton';
import CheckBoxUsage from './CheckBox';
import DividerUsage from './Divider';
import ImageUsage from './Image';
import InputUsage from './Input';
import PaginationUsage from './Pagination';
import PopupUsage from './Popup';
import RadioUsage from './Radio';
import SkeletonUsage from './Skeleton';
import SwitchUsage from './Switch';
import TagUsage from './Tag';
import InputTextAreaUsage from './InputTextArea';
import InputSearchUsage from './InputSearch';
import InputMoneyUsage from './InputMoney';
import InputDropDownUsage from './InputDropDown';
import ProgressBarUsage from './ProgressBar';

const DATA = [
  {
    title: 'Text',
    icon: Assets.image.typography,
    screen: TextUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Icon',
    icon: Assets.image.icon,
    screen: IconUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'IconButton',
    icon: Assets.image.icon,
    screen: IconButtonUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Button',
    icon: Assets.image.button,
    screen: ButtonUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'CheckBox',
    icon: Assets.image.checkbox,
    screen: CheckBoxUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Radio',
    icon: Assets.image.ratio,
    screen: RadioUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Switch',
    icon: Assets.image.switch,
    screen: SwitchUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Input',
    icon: Assets.image.input,
    screen: InputUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'InputTextArea',
    icon: Assets.image.input,
    screen: InputTextAreaUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'InputSearch',
    icon: Assets.image.input,
    screen: InputSearchUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'InputMoney',
    icon: Assets.image.input,
    screen: InputMoneyUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'DropDown',
    icon: Assets.image.input,
    screen: InputDropDownUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Image',
    icon: Assets.image.icon,
    screen: ImageUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Divider',
    icon: Assets.image.divider,
    screen: DividerUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'ProgressBar',
    icon: Assets.image.icon,
    screen: ProgressBarUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Popup',
    icon: Assets.image.popup,
    screen: PopupUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Skeleton',
    icon: Assets.image.skeleton,
    screen: SkeletonUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Tag',
    icon: Assets.image.tag,
    screen: TagUsage,
    example: 'https://reactnative.dev',
  },
  {
    title: 'Pagination',
    icon: Assets.image.pagination,
    screen: PaginationUsage,
    example: 'https://reactnative.dev',
  },
];

const Components: React.FC<ScreenContainerProps> = ({navigation}) => {
  const {theme, navigator} = useContext(ApplicationContext);
  const [search, setSearch] = useState('');

  const onPress = (item: any) => {
    navigator?.push(item);
  };

  return (
    <Screen
      scrollable={true}
      scrollViewProps={{contentContainerStyle: {paddingBottom: Spacing.M}}}
      navigation={navigation}
      headerStyle={'surface'}
      headerComponent={
        <View style={Styles.paddingM}>
          <InputSearch
            placeholder={'Search component...'}
            defaultValue={search}
            onChangeText={setSearch}
          />
        </View>
      }
      options={{title: 'Components'}}>
      <Container gutter={8}>
        <ItemList
          scrollEnabled={false}
          widthSpan={4}
          data={DATA.filter(item => {
            return item.title.toUpperCase().includes(search.toUpperCase());
          })}
          renderItem={({item}) => {
            return (
              <Item widthSpan={4} heightSpan={4} key={item.title}>
                <TouchableOpacity
                  onPress={() => onPress(item)}
                  style={[
                    styles.item,
                    {backgroundColor: theme.colors.background.surface},
                  ]}>
                  <View
                    style={[
                      styles.image,
                      {backgroundColor: theme.colors.background.default},
                    ]}>
                    <Image source={item.icon} />
                  </View>
                  <SizedBox height={8} />
                  <Text typography={'action_xs'}>{item.title}</Text>
                </TouchableOpacity>
              </Item>
            );
          }}
          keyExtractor={item => item.title}
        />
      </Container>
    </Screen>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: Radius.M,
    padding: Spacing.S,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    padding: Spacing.M,
    borderRadius: Radius.M,
  },
});
export {DATA};
export default Components;
