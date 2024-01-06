import React, {FC, useContext, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {
  ApplicationContext,
  InputSearch,
  Radio,
  SizedBox,
  Spacing,
  Styles,
  Text,
} from '@passionui/components';
import {BottomSheetPickerProps, PickerItem} from './types.ts';
import styles from './styles.ts';

const BottomSheetPicker: FC<BottomSheetPickerProps> = ({
  data,
  selected,
  onSelect,
  renderItem,
}) => {
  const {theme} = useContext(ApplicationContext);
  const [search, setSearch] = useState('');

  const defaultRenderItem = ({item}: any) => {
    let borderColor = theme.colors.border.default;
    if (item.value === selected?.value) {
      borderColor = theme.colors.primary.default;
    }
    return (
      <TouchableOpacity
        onPress={() => {
          onSelect?.(item);
        }}
        style={[
          styles.item,
          {
            borderColor,
            backgroundColor: theme.colors.background.surface,
          },
        ]}>
        {item.icon && (
          <>
            <SizedBox width={24} height={24}>
              {item.icon}
            </SizedBox>
            <SizedBox width={8} />
          </>
        )}
        <View style={Styles.flex}>
          <Text typography={'action_s'}>{item.title}</Text>
          {item.subTitle && (
            <Text typography={'label_xs'}>{item.subTitle}</Text>
          )}
        </View>
        <Radio
          value={item.value}
          groupValue={selected?.value}
          onChange={() => onSelect?.(item)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={Styles.flex}>
      <View style={[Styles.paddingHorizontalM, Styles.paddingVerticalXS]}>
        <InputSearch
          placeholder={'Search option'}
          defaultValue={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        renderItem={renderItem ?? defaultRenderItem}
        style={Styles.flex}
        contentContainerStyle={[
          Styles.paddingHorizontalM,
          Styles.paddingVerticalS,
        ]}
        data={data.filter((item: PickerItem) => {
          return item.title.toUpperCase().includes(search.toUpperCase());
        })}
        ItemSeparatorComponent={() => <View style={{height: Spacing.S}} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default BottomSheetPicker;
