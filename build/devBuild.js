const fs = require('fs'), path = require('path'), endOfLine = require('os').EOL, render = require('json-templater/string');
// 检测是否是文件
const isFile = path => fs.lstatSync(path).isFile();
// 组件路径
const COMPONENTS_PATH = path.join(__dirname, '../src/components/');
// 输出的入口文件路径，根据此文件生成 npm 包
const OUTPUT_FILE = path.join(COMPONENTS_PATH, 'index.ts');
// 组件文件夹下的入口文件名
const ENTRY_FILE = 'index.ts', DOC_FILE = 'README.md';

// 获取组件文件夹及其入口文件路径
const components = fs.readdirSync(COMPONENTS_PATH).filter(name => {
  // 首先验证组件文件夹权限
  const folderPath = path.join(COMPONENTS_PATH, name);
  try {
    if (isFile(folderPath)) {
      return false;
    }
    const entryPath = path.join(folderPath, ENTRY_FILE);
    fs.accessSync(entryPath, fs.constants.R_OK | fs.constants.W_OK);
    const docPath = path.join(folderPath, DOC_FILE);
    fs.accessSync(docPath, fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch (err) {
    console.log(
      `${name}：文件夹里无("${ENTRY_FILE}")入口文件，或者没有 "${DOC_FILE}" 说明文件`
    );
    return false;
  }
}).map(name => {
    let title = name;
    const folderPath = path.join(COMPONENTS_PATH, name);
    const docPath = path.join(folderPath, DOC_FILE);
    try {
      const doc = fs.readFileSync(docPath, {encoding: 'utf-8'}).trim();
      // 获取 markdown 文件第一行
      const [firstLine] = doc.split('\n');
      // 选择二级标题后的文字作为文档标题
      const arr = firstLine.split(/^#\s/);
      // 若没有标题，则使用默认值
      title = arr[1] || title;
    } catch (err) {
      console.warn('[读取组件文档出错]：', err);
    }
    return {
      name: name,
      componentName: name,
      title: title,
      entry: `./${name}`,
    };
  });

const importList = components.map(item =>
  render(`import {{componentName}} from '{{entry}}';`, {
    componentName: item.componentName,
    entry: item.entry,
  })
);
const installList = components.map(item =>
  render(`  {{componentName}}`, {
    componentName: item.componentName,
  })
);
const exportList = components.map(item =>
  render(`  {{componentName}}`, {
    componentName: item.componentName,
  })
);

const TEMPLATE = `/**
 * 脚本'./build/devBuild.js' 文件自动生成
 */
import {App} from 'vue'
// 导入组件（用于注册所有组件）
{{importList}}

// 定义组件列表
const components: any[] = [
{{installList}}
];

const plugins: any[] = [];

const install = (app: App): void => {

  components.forEach(component => {
    component.name && app.component(component.name, component)
  });
  plugins.forEach(plugin => {
    app.use(plugin)
  })
};

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue);
}

export default {
  version: '{{version}}',
  // 导出的对象必须具有 install 方法，才能被 Vue.use() 方法安装
  install
};

// 具名导出
export {
{{exportList}},
}
`;

const template = render(TEMPLATE, {
  version: process.env.VERSION || require('../package.json').version,
  importList: importList.join(endOfLine),
  installList: installList.join(`,${endOfLine}`),
  exportList: exportList.join(`,${endOfLine}`),
});

fs.writeFileSync(OUTPUT_FILE, template);
console.log('[build entry] DONE:', OUTPUT_FILE, '\n');

const TEMPLATE_JSON_ITEM = `  "{{name}}": {
    "name": "{{name}}",
    "title": "{{title}}",
    "componentName": "{{componentName}}"
  }`;
const jsonList = components.map(item => render(TEMPLATE_JSON_ITEM, item));
const TEMPLATE_JSON = `{
{{list}}
}
`;
const jsonTemp = render(TEMPLATE_JSON, {
  list: jsonList.join(`,${endOfLine}`),
});
const PATH_JSON = path.join(COMPONENTS_PATH, 'index.json');
fs.writeFileSync(PATH_JSON, jsonTemp);
console.log('[build json] DONE:', PATH_JSON, '\n');
