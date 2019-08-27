// This file is auto gererated by build/build-entry.js
import Button from './button';
import Card from './card';

const components = [
  Button,
  Card
];

const install = (Vue) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

export {
  install,
  Button,
  Card
};

export default {
  install
};
