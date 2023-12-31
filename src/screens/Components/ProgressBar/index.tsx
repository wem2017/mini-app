import {Linking} from 'react-native';
import {
  ApplicationContext,
  HeaderRightAction,
  NavigationButton,
  ProgressBar,
  Screen,
  ScreenContainerProps,
} from '@passionui/components';
import React, {useContext, useState} from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import {PlaygroundProps} from '../../../components/Playground/types.ts';
import {PreviewProps} from '../../../components/Preview/types.ts';

const ProgressBarUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const {theme} = useContext(ApplicationContext);
  const [showPlayground, setShowPlayground] = useState(false);
  const preview: PreviewProps = {
    component: ProgressBar,
    data: {
      percent: {
        title: 'Percent',
        value: [
          {
            value: 0,
          },
          {
            value: 50,
          },
          {
            value: 100,
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: ProgressBar,
    data: {
      percent: {
        value: 50,
        type: 'number',
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
        title: 'ProgressBar',
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

export default ProgressBarUsage;
