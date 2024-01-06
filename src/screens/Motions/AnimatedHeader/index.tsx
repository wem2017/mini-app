import {
  ApplicationContext,
  Button,
  HeaderBanner,
  Input,
  Screen,
  ScreenContainerProps,
  SizedBox,
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
  const [title, setTitle] = useState('Title');

  return (
    <Screen
      navigation={navigation}
      scrollable={true}
      enableKeyboardAvoidingView={true}
      options={{title}}
      scrollViewProps={{keyboardShouldPersistTaps: 'handled'}}
      footerComponent={<Button onPress={() => {}} title={'Button'} />}
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
          backgroundColor: theme.colors.background.surface,
        }}>
        <View style={Styles.rowSpace}>
          <Text typography={'title_s'}>Surface</Text>
          <Switch value={surface} onChange={() => setSurface(!surface)} />
        </View>
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

export default ExtendedHeader;
