import React from 'react';

import { storiesOf } from '@storybook/react';

import TitleBar from '../components/TitleBar.tsx'

storiesOf('TitleBar', module)
  .add('with text', () => <TitleBar title={"Some Text"}></TitleBar>)
  .add('with some emoji', () => <TitleBar title={"😀 😎 👍 💯"}></TitleBar>)
  .add('with logo', () => <TitleBar title={"Some Text"} logo={"https://upload.wikimedia.org/wikipedia/commons/6/62/Tesla_Motors_Logo.svg"}></TitleBar>)
;
