import {Linking} from 'react-native';
import {
  ApplicationContext,
  HeaderRightAction,
  NavigationButton,
  Screen,
  ScreenContainerProps,
  Tag,
} from '@passionui/components';
import React, {useContext, useState} from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import {PlaygroundProps} from '../../../components/Playground/types.ts';
import {PreviewProps} from '../../../components/Preview/types.ts';

const TagUsage: React.FC<ScreenContainerProps> = ({navigation, example}) => {
  const {theme} = useContext(ApplicationContext);
  const [showPlayground, setShowPlayground] = useState(false);

  const preview: PreviewProps = {
    component: Tag,
    data: {
      label: {
        title: 'Label',
        direction: 'row',
        value: [{value: 'sale'}, {value: 'opening'}, {value: 'closed'}],
      },
      icon: {
        title: 'Icon',
        direction: 'row',
        value: [
          {value: 'palette-swatch-outline'},
          {value: 'shape-outline'},
          {value: 'transition'},
        ],
      },
      color: {
        title: 'Color',
        direction: 'row',
        value: [
          {value: theme.colors.primary.default},
          {value: theme.colors.secondary.default},
          {value: theme.colors.error.default},
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Tag,
    data: {
      label: {
        value: 'label',
        type: 'string',
      },
      icon: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      color: {
        value: theme.colors.primary.default,
        type: 'string',
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
        title: 'Tag',
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

export default TagUsage;
