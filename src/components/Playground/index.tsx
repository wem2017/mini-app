import React, {useContext, useEffect, useState} from 'react';
import {PlaygroundProps} from './types.ts';
import {ScrollView, View} from 'react-native';
import {
  ApplicationContext,
  CheckBox,
  Container,
  Input,
  InputDropDown,
  Item,
  ItemList,
  Shadow,
  SizedBox,
  Spacing,
  Styles,
  Switch,
  Text,
} from '@passionui/components';
import BottomSheetPicker from '../BottomSheetPicker';

const Playground: React.FC<PlaygroundProps> = ({
  component: Component,
  data,
}) => {
  const {theme, navigator} = useContext(ApplicationContext);
  const [compProps, setCompProps] = useState<any>({});

  useEffect(() => {
    let props = {};
    Object.keys(data).forEach(i => {
      props = {...props, [i]: data[i].value};
    });
    setCompProps(props);
  }, [data]);

  const onCheckUndefined = (value: boolean, key: string) => {
    let newValue = !value ? undefined : data?.[key]?.value;
    const newProps = {...compProps, [key]: newValue};
    setCompProps(newProps);
  };

  const onChangeProps = (value: any, key: string) => {
    const newProps = {...compProps, [key]: value};
    setCompProps(newProps);
  };

  const buildComponent = (key: string) => {
    const item = data[key];
    switch (item.type) {
      case 'string':
        return (
          <Input
            size={'small'}
            floatingValue={key}
            value={compProps?.[key]}
            onChangeText={text => onChangeProps(text, key)}
          />
        );
      case 'number':
        return (
          <Input
            keyboardType={'numeric'}
            size={'small'}
            floatingValue={key}
            value={`${compProps?.[key]}`}
            onChangeText={text => onChangeProps(Number(text), key)}
          />
        );
      case 'object':
        const parseSafe = (text: string) => {
          try {
            return JSON.parse(text);
          } catch (e) {
            return undefined;
          }
        };
        return (
          <Input
            size={'small'}
            floatingValue={key}
            value={JSON.stringify(compProps?.[key])}
            onChangeText={text => onChangeProps(parseSafe(text), key)}
          />
        );

      case 'enum':
        return (
          <InputDropDown
            size={'small'}
            floatingValue={key}
            value={compProps?.[key]}
            onPress={() => {
              navigator?.showBottomSheet({
                title: 'Select Options',
                screen: () => (
                  <BottomSheetPicker
                    data={item.data.map((i: string) => {
                      return {title: i, value: i};
                    })}
                    selected={{
                      title: compProps?.[key],
                      value: compProps?.[key],
                    }}
                    onSelect={(select: any) => {
                      navigator?.pop();
                      onChangeProps(select.value, key);
                    }}
                    renderItem={undefined}
                  />
                ),
              });
            }}
          />
        );
      default:
        return <View />;
    }
  };

  return (
    <ScrollView stickyHeaderIndices={[0]} keyboardShouldPersistTaps={'handled'}>
      <View
        style={{
          paddingVertical: Spacing.M,
          backgroundColor: theme.colors.background.default,
        }}>
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
            <Text typography="title_s">Preview</Text>
            <SizedBox height={8} />
            <View style={Styles.rowCenter}>
              <Component {...compProps} />
            </View>
          </Item>
        </Container>
      </View>
      <Container>
        <ItemList
          keyboardShouldPersistTaps={'handled'}
          widthSpan={12}
          scrollEnabled={false}
          data={Object.keys(data)}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  Shadow.light,
                  {
                    borderRadius: Spacing.M,
                    backgroundColor: theme.colors.background.surface,
                    padding: Spacing.M,
                  },
                ]}>
                <View style={Styles.rowSpace}>
                  <Text typography={'title_xs'}>{item}</Text>
                  {data[item].type === 'bool' && (
                    <Switch
                      onChange={() => onChangeProps(!compProps?.[item], item)}
                      value={compProps?.[item]}
                    />
                  )}
                </View>
                <SizedBox height={8} />
                {buildComponent(item)}
                <CheckBox
                  style={{marginTop: Spacing.M}}
                  label={'Is undefined'}
                  value={!compProps?.[item]}
                  onChange={value => onCheckUndefined(!value, item)}
                />
              </View>
            );
          }}
          keyExtractor={item => item}
        />
      </Container>
      <SizedBox height={24} />
    </ScrollView>
  );
};

export default Playground;
