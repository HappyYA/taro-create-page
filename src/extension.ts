// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createFile } from './core/create';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "taro" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const createTaroPageDir = vscode.commands.registerCommand(
    'taro-create-page.createTaroPageDir',
    args => {
      console.log(args);
      const options = {
        prompt: '请输入要创建的Taro Page名称',
        placeHolder: '页面文件夹名称',
      };

      vscode.window.showInputBox(options).then(pageName => {
        if (!pageName) {
          return;
        }
        if (args) {
          const folderPath = args.fsPath;
          createFile(folderPath, pageName, { isPage: true });
        } else {
          console.log(vscode.window.activeTextEditor);
        }
      });
    }
  );
  const createTaroComDir = vscode.commands.registerCommand(
    'taro-create-page.createTaroComDir',
    args => {
      console.log(args);
      const options = {
        prompt: '请输入要创建的Taro组件名称',
        placeHolder: '组件文件夹名称',
      };

      vscode.window.showInputBox(options).then(pageName => {
        if (!pageName) {
          return;
        }
        if (args) {
          const folderPath = args.fsPath;
          createFile(folderPath, pageName, { isPage: false });
        } else {
          console.log(vscode.window.activeTextEditor);
        }
      });
    }
  );

  context.subscriptions.push(createTaroPageDir, createTaroComDir);
}

// This method is called when your extension is deactivated
export function deactivate() {}
