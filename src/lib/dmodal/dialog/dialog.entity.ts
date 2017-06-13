export class DialogButton {
  key: string; // 记录button的键值
  value: string; // button显示文本
  color: string; // button主题颜色
}

export class DialogForm {
  key: string;
  label: string;
  value: string;
}

export class DialogOptions {
  title: string; // 模态框标题
  message: string; // 模态框提示信息
  buttons: Array<DialogButton>; // 按钮列表
  forms: Array<DialogForm>;
  
  constructor(obj?: {title: string, message: string, buttons: Array<DialogButton>, forms?: Array<DialogForm>}) {
    this.title = obj && obj.title || '';
    this.message = obj && obj.message || '';
    this.buttons = obj && obj.buttons || [];
    this.forms = obj && obj.forms || [];
  }
}