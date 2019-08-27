const fs = require('fs');
const path = require('path');
const uppercamelize = require('uppercamelcase');

const tips = '// This file is auto gererated by build/build-entry.js';
const SRC_PATH = path.resolve(__dirname, '../src');

function getComponents() {
  const excludes = [
    'index.js'
  ];
  const Components = fs.readdirSync(SRC_PATH).filter(component => excludes.indexOf(component) === -1);

  return Components;
}

function buildEntry() {

  const Components = getComponents();
  const importList = Components.map(name => `import ${uppercamelize(name)} from './${name}';`);
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  const installList = exportList;

  const content = `${tips}
${importList.join('\n')}

const components = [
  ${installList.join(',\n  ')}
];

const install = (Vue) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

export {
  install,
  ${exportList.join(',\n  ')}
};

export default {
  install
};
`;

  fs.writeFileSync(path.resolve(SRC_PATH, 'index.js'), content);
}

buildEntry();
