import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {muiTheme} from 'storybook-addon-material-ui';
import { withConsole } from '@storybook/addon-console';
import theme from '../src/theme/'

addDecorator(StoryRouter());

// Material-UI theme
addDecorator(muiTheme([theme]));

addDecorator((storyFn, context) => withConsole()(storyFn)(context));