import {
  ApplicationContext,
  Button,
  Colors,
  Input,
  InputDropDown,
  Screen,
  ScreenContainerProps,
  SizedBox,
  Spacing,
} from '@passionui/components';
import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import BottomSheetPicker from '../../../components/BottomSheetPicker';

const STYLE = ['default', 'surface', 'extended', 'none'];
const HeaderStyle: React.FC<ScreenContainerProps> = ({navigation}) => {
  const {navigator} = useContext(ApplicationContext);

  const [headerStyle, setHeaderStyle] = useState(STYLE[0]);
  const [title, setTitle] = useState('Title');

  return (
    <Screen
      navigation={navigation}
      scrollable={true}
      headerStyle={headerStyle as any}
      enableKeyboardAvoidingView={true}
      options={{
        title,
      }}
      scrollViewProps={{
        contentContainerStyle: {padding: Spacing.M},
        keyboardShouldPersistTaps: 'handled',
      }}
      footerComponent={<Button onPress={() => {}} title={'Button'} />}>
      <View
        style={{
          width: '100%',
          height: 1000,
          borderRadius: Spacing.M,
          backgroundColor: Colors.white,
          padding: Spacing.M,
        }}>
        <InputDropDown
          value={headerStyle}
          floatingValue={'Header Style'}
          placeholder={'Select Header Style'}
          onPress={() => {
            navigator?.showBottomSheet({
              title: 'Select Options',
              screen: () => (
                <BottomSheetPicker
                  data={STYLE.map(i => {
                    return {title: i, value: i};
                  })}
                  selected={{
                    title: headerStyle,
                    value: headerStyle,
                  }}
                  onSelect={(select: any) => {
                    navigator?.pop();
                    setHeaderStyle(select.value);
                  }}
                  renderItem={undefined}
                />
              ),
            });
          }}
        />
        <SizedBox height={12} />
        <Input
          defaultValue={title}
          floatingValue={'Input title'}
          placeholder={'Input title for header'}
          onChangeText={setTitle}
        />
      </View>
    </Screen>
  );
};

export default HeaderStyle;
