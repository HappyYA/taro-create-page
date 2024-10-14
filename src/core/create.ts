import fss from 'fs-extra';
import * as vscode from 'vscode';
import {
  reactComponentTemplate,
  reactPageTemplate,
} from '../template/page.template';
import { wxConfigTemplate } from '../template/config.template';
import { styleTemplate } from '../template/style.template';

/**检测是否有重名目录 */
export function checkDirExist(dir: string): boolean {
  return fss.existsSync(dir);
}
/**获取当前目录下的所有文件夹名字 */
export function getDirList(dir: string): string[] {
  return fss.readdirSync(dir);
}
/**创建页面 */
export const createPage = (pageRoot: string, pageName: string) => {
  //tsx文件路径
  const tsxPath = `${pageRoot}/index.tsx`;
  //scss文件路径
  const scssPath = `${pageRoot}/index.module.scss`;
  //config文件路径
  const configPath = `${pageRoot}/index.config.ts`;
  //写入文件
  fss.ensureDirSync(pageRoot);
  fss.writeFileSync(tsxPath, reactPageTemplate(pageName));
  fss.writeFileSync(scssPath, styleTemplate());
  fss.writeFileSync(configPath, wxConfigTemplate());
  vscode.window.showInformationMessage(`${pageName}页面创建成功`);
};
/**创建组件 */
export const createComponent = (
  componentRoot: string,
  componentName: string
) => {
  //tsx文件路径
  const tsxPath = `${componentRoot}/index.tsx`;
  //scss文件路径
  const scssPath = `${componentRoot}/index.module.scss`;
  //写入文件 把组件名称首字母改为大写
  fss.ensureDirSync(componentRoot);
  const capitalizedComponentName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);
  fss.writeFileSync(tsxPath, reactComponentTemplate(capitalizedComponentName));
  fss.writeFileSync(scssPath, styleTemplate());
  vscode.window.showInformationMessage(
    `${capitalizedComponentName}组件创建成功`
  );
};
/**创建文件 */
export const createFile = (
  dir: string,
  pageName: string,
  option: {
    isPage: boolean;
  }
) => {
  //先检测当前目录下是否有重名文件夹
  if (checkDirExist(dir + '/' + pageName)) {
    console.log('文件夹已存在');
    vscode.window.showErrorMessage(`${pageName}文件夹已存在`);
    return;
  }
  if (option.isPage) {
    createPage(dir + '/' + pageName, pageName);
    return;
  } else {
    //组件名称首字母大写
    createComponent(dir + '/' + pageName, pageName);
    return;
  }
};
