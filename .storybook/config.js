import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {muiTheme} from 'storybook-addon-material-ui';
import { withConsole } from '@storybook/addon-console';

addDecorator(StoryRouter());

// Material-UI theme
addDecorator(muiTheme());

addDecorator((storyFn, context) => withConsole()(storyFn)(context));