import {Linking} from 'react-native';
import {
  ApplicationContext,
  HeaderRightAction,
  NavigationButton,
  Screen,
  ScreenContainerProps,
  Text,
} from '@passionui/components';
import React, {useContext, useState} from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import {PlaygroundProps} from '../../../components/Playground/types.ts';
import {PreviewProps} from '../../../components/Preview/types.ts';

const Typography = [
  'headline_default',
  'headline_s',
  'headline_l',
  'headline_xl',
  'title_default',
  'title_xs',
  'title_s',
  'header_default',
  'header_xs',
  'header_s',
  'paragraph',
  'description_default',
  'description_xs',
  'description_s',
  'label_default',
  'label_xxs',
  'label_xs',
  'label_s',
  'action_xxs',
  'action_xs',
  'action_s',
];

const TextUsage: React.FC<ScreenContainerProps> = ({navigation, example}) => {
  const {theme} = useContext(ApplicationContext);
  const [showPlayground, setShowPlayground] = useState(false);

  const preview: PreviewProps = {
    component: Text,
    data: {
      typography: {
        title: 'Typography',
        value: Typography.map(i => {
          return {
            value: i,
            props: {children: i},
          };
        }),
      },
      color: {
        title: 'Color',
        direction: 'row',
        value: [
          {
            value: theme.colors.text.default,
            props: {children: 'default'},
          },
          {
            value: theme.colors.text.secondary,
            props: {children: 'secondary'},
          },
          {
            value: theme.colors.text.disable,
            props: {children: 'disable'},
          },
          {
            value: theme.colors.text.hint,
            props: {children: 'hint'},
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Text,
    data: {
      children: {
        value: 'Typography',
        type: 'string',
      },
      typography: {
        value: 'paragraph',
        type: 'enum',
        data: Typography,
      },
      color: {
        value: theme.colors.text.default,
        type: 'enum',
        data: [
          theme.colors.text.default,
          theme.colors.text.hint,
          theme.colors.text.disable,
          theme.colors.text.secondary,
        ],
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
        title: 'Text',
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

export default TextUsage;
