/**react 页面文件 */
export const reactPageTemplate = (pageName: string) => {
  return `import { View } from '@tarojs/components';
import styles from './index.module.scss';

const ${pageName} = () => {
  return <View>${pageName}</View>;
};
export default ${pageName};`;
};

/**react 组件 */
export const reactComponentTemplate = (componentName: string) => {
  return `import { View } from '@tarojs/components';
import styles from './index.module.scss';

export const ${componentName} = () => {
  return <View>${componentName}</View>;
};`;
};
