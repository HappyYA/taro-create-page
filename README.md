# taro-create-page README
用来快速创建taro页面目录
## 使用方法
1. 右键单击，选择自己需要创建页面或者组件。
2. 在输入框内输入页面目录名称或者组件名称。插件会自动将名称首字母转换为大写，应用在生成的文件内容中。
3. 回车后插件按照所选功能创建相应文件结构。
## 所创建文件的代码片段内容
1. **index.tsx**  
>创建的页面内容
```jsx
import { View } from '@tarojs/components';
import styles from './index.module.scss';

const ${pageName} = () => {
  return <View>${pageName}</View>;
};
export default ${pageName};
```   
>创建的组件内容  
```js
import { View } from '@tarojs/components';
import styles from './index.module.scss';

export const ${componentName} = () => {
  return <View>${componentName}</View>;
};
```
2. **index.module.scss** 内容为空
3. **index.config.ts**
```js
export default definePageConfig({
  navigationBarTitleText: '海底捞',
});
```
**Enjoy!**
