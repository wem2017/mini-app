import {Linking} from 'react-native';
import {
  ApplicationContext,
  HeaderRightAction,
  InputDropDown,
  NavigationButton,
  Screen,
  ScreenContainerProps,
} from '@passionui/components';
import React, {useContext, useState} from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import {PlaygroundProps} from '../../../components/Playground/types.ts';
import {PreviewProps} from '../../../components/Preview/types.ts';

const InputDropDownUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const {theme} = useContext(ApplicationContext);
  const [showPlayground, setShowPlayground] = useState(false);
  const preview: PreviewProps = {
    component: InputDropDown,
    data: {
      value: {
        title: 'Value',
        value: [
          {
            value: 'Value',
          },
        ],
      },
      size: {
        title: 'Size',
        value: [
          {
            value: 'small',
            props: {floatingValue: 'Floating'},
          },
          {
            value: 'large',
            props: {floatingValue: 'Floating'},
          },
        ],
      },
      floatingValue: {
        title: 'Floating Value',
        value: [
          {
            value: 'Floating',
          },
        ],
      },
      floatingIcon: {
        title: 'Floating Icon',
        value: [
          {
            value: 'palette-swatch-outline',
            props: {floatingValue: 'Floating'},
          },
        ],
      },
      floatingIconColor: {
        title: 'Floating Icon Color',
        value: [
          {
            value: theme.colors.primary.default,
            props: {
              floatingValue: 'Floating',
              floatingIcon: 'palette-swatch-outline',
              placeholder: 'Placeholder input',
            },
          },
        ],
      },
      placeholder: {
        title: 'Placeholder',
        value: [
          {
            value: 'Placeholder input',
            props: {floatingValue: 'Floating'},
          },
        ],
      },
      error: {
        title: 'Error',
        value: [
          {
            value: 'Error input',
            props: {floatingValue: 'Floating', value: 'value not correct'},
          },
        ],
      },
      icon: {
        title: 'Icon',
        value: [
          {
            value: 'palette-swatch-outline',
            props: {
              floatingValue: 'Floating',
              placeholder: 'Placeholder input',
            },
          },
        ],
      },
      iconColor: {
        title: 'Icon Color',
        value: [
          {
            value: theme.colors.primary.default,
            props: {
              floatingValue: 'Floating',
              placeholder: 'Placeholder input',
              icon: 'palette-swatch-outline',
            },
          },
        ],
      },
      required: {
        title: 'Required',
        value: [
          {
            value: true,
            props: {
              floatingValue: 'Floating',
              placeholder: 'Placeholder input',
              icon: 'palette-swatch-outline',
            },
          },
        ],
      },
      disabled: {
        title: 'Disabled',
        value: [
          {
            value: true,
            props: {
              floatingValue: 'Floating',
              placeholder: 'Placeholder input',
            },
          },
        ],
      },
    },
  };
  const playground: PlaygroundProps = {
    component: InputDropDown,
    data: {
      value: {
        value: 'Value',
        type: 'string',
      },
      size: {
        value: 'small',
        type: 'enum',
        data: ['small', 'large'],
      },
      floatingValue: {
        value: 'Floating value',
        type: 'string',
      },
      floatingIcon: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      floatingIconColor: {
        value: undefined,
        type: 'string',
      },
      placeholder: {
        value: 'Input placeholder',
        type: 'string',
      },
      error: {
        value: 'Input error',
        type: 'string',
      },
      icon: {
        value: 'shape-outline',
        type: 'string',
      },
      iconColor: {
        value: undefined,
        type: 'string',
      },
      required: {
        value: false,
        type: 'bool',
      },
      disabled: {
        value: false,
        type: 'bool',
      },
    },
  };
  const renderContent = () => {
    if (showPlayground) {
      return <Playground {...playground} />;
    }
    return <Preview {...preview} />;
  };

  const openCode = () => {
    try {
      Linking.openURL(example);
    } catch (e) {}
  };

  return (
    <Screen
      enableKeyboardAvoidingView={true}
      navigation={navigation}
      headerStyle={'surface'}
      options={{
        title: 'InputDropDown',
        headerRight: props => (
          <HeaderRightAction {...props}>
            <NavigationButton
              icon={'file-edit-outline'}
              onPress={() => setShowPlayground(!showPlayground)}
            />
            <NavigationButton icon={'xml'} onPress={openCode} />
          </HeaderRightAction>
        ),
      }}>
      {renderContent()}
    </Screen>
  );
};

export default InputDropDownUsage;
