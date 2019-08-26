// const add = function(aaa, bbb) {
//   console.log('add-src')
//   return aaa + bbb
// }
// const minus = function(aaa, bbb) {
//   return aaa - bbb
// }

// export {
//   add,
//   minus
// }

import Button from './button'
import Card from './card'

const components = [
  Button,
  Card
]

const install = (Vue) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

export {
  install, 
  Button,
  Card
}

export default {
  install
};