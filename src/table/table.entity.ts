export enum ControlType { text, image, button, date };

export class TableTitle {
  name: string; // 表头标题
  key: string; // 取值key
  minwidth: number; // 最小宽度
  maxwidth: number; // 最大宽度
  controlType: ControlType; // 类型
  option: any; // 附加选项

  constructor(obj: {
    name: string,
    key: string,
    minwidth?: number,
    maxwidth?: number,
    controlType?: ControlType,
    option?: any
  }) {
    this.name = obj && obj.name;
    this.key = obj && obj.key;
    this.minwidth = obj && obj.minwidth || null;
    this.maxwidth = obj && obj.maxwidth || null;
    this.controlType = obj && obj.controlType || ControlType.text;
    this.option = obj && obj.option || null;
  }
}

export class TableOption {
  titles: TableTitle[]; // 表头列表
  lists: Array <any> ; // 数据列表
  totalPage: number; // 总页数
  currentPage: number; // 当前页
  size: number; // 查询每页显示个数
  errorMessage: string; // 错误信息
  loading: boolean; // 是否加载中
  queryKey: string; // 查询键
  ifPage: boolean; // 是否分页

  constructor(obj ? ) {
    this.titles = obj && obj.titles || null;
    this.lists = obj && obj.lists || [];
    this.totalPage = obj && obj.totalPage || null;
    this.currentPage = obj && obj.currentPage || null;
    this.size = obj && obj.size || 10;
    this.errorMessage = obj && obj.errorMessage || '';
    this.queryKey = obj && obj.queryKey || '';
    this.loading = obj && obj.loading || true;
    this.ifPage = obj && obj.ifPage || false;
  }

}
