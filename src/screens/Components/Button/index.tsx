import {Linking} from 'react-native';
import {
  Button,
  HeaderRightAction,
  NavigationButton,
  Screen,
  ScreenContainerProps,
} from '@passionui/components';
import React, {useState} from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import {PlaygroundProps} from '../../../components/Playground/types.ts';
import {PreviewProps} from '../../../components/Preview/types.ts';

const Types = [
  'primary',
  'secondary',
  'tonal',
  'outline',
  'danger',
  'text',
  'disabled',
];

const ButtonUsage: React.FC<ScreenContainerProps> = ({navigation, example}) => {
  const [showPlayground, setShowPlayground] = useState(false);

  const preview: PreviewProps = {
    component: Button,
    data: {
      type: {
        title: 'Type',
        value: Types.map(i => {
          return {
            value: i,
          };
        }),
      },
      size: {
        title: 'Size',
        value: [
          {
            value: 'small',
          },
          {
            value: 'medium',
          },
          {
            value: 'large',
          },
        ],
      },
      iconLeft: {
        title: 'Icon Left',
        value: [
          {
            value: 'palette-swatch-outline',
            props: {type: 'primary'},
          },
          {
            value: 'palette-swatch-outline',
            props: {type: 'secondary'},
          },
          {
            value: 'palette-swatch-outline',
            props: {type: 'tonal'},
          },
          {
            value: 'palette-swatch-outline',
            props: {type: 'outline'},
          },
          {
            value: 'palette-swatch-outline',
            props: {type: 'danger'},
          },
          {
            value: 'palette-swatch-outline',
            props: {type: 'text'},
          },
          {
            value: 'palette-swatch-outline',
            props: {type: 'disabled'},
          },
        ],
      },
      iconRight: {
        title: 'Icon Left',
        value: [
          {
            value: 'palette-swatch-outline',
          },
        ],
      },
      loading: {
        title: 'Loading',
        value: [
          {
            value: true,
            props: {type: 'primary'},
          },
          {
            value: true,
            props: {type: 'secondary'},
          },
          {
            value: true,
            props: {type: 'tonal'},
          },
          {
            value: true,
            props: {type: 'outline'},
          },
          {
            value: true,
            props: {type: 'danger'},
          },
          {
            value: true,
            props: {type: 'text'},
          },
          {
            value: true,
            props: {type: 'disabled'},
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Button,
    data: {
      type: {
        value: 'primary',
        type: 'enum',
        data: Types,
      },
      size: {
        value: 'medium',
        type: 'enum',
        data: ['small', 'medium', 'large'],
      },
      iconLeft: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      iconRight: {
        value: 'transition',
        type: 'string',
      },
      loading: {
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
        title: 'Button',
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

export default ButtonUsage;
