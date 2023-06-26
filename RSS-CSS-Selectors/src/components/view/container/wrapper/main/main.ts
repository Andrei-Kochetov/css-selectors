
import './main.scss';
import { BasicElement } from "../../../../util/basicElement";
import { Table } from './table/table';
import { CssInput } from './css_input/css_input';
import { CodeArea } from './code_area/code_area';

type optionObject = {
    tag: string,
    classNames: string[],
};
interface ObjLevel {
    helpTitle : string,
    selectorName : string,
    doThis : string,
    selector : string,
    syntax : string,
    help : string,
    examples : string[],
    boardMarkup: string

}

const TABLE_OPTIONS = {
    tag: 'table',
    classNames: ['table']
};
const CSS_INPUT_OPTIONS = {
    tag: 'input',
    classNames: ['css-input']
};
const CODE_AREA_OPTIONS = {
    tag: 'code',
    classNames: ['code-area','language-html']
};
export class Main extends BasicElement {
    table;
    cssInput;
    pre:HTMLElement;
    codeArea;
    wrapperTable:HTMLElement;
    num;
    level;
    constructor(option: optionObject, level:Partial<ObjLevel>){
        super(option);
        this.level = level;

        this.wrapperTable = document.createElement('div');
        this.wrapperTable.classList.add('wrapper-table');
        this.table = new Table(TABLE_OPTIONS, level.boardMarkup!);
        this.table.appended(this.wrapperTable);
        this.element.append(this.wrapperTable);
        this.cssInput = new CssInput(CSS_INPUT_OPTIONS, level.selector!);
        this.cssInput.appended(this.element);
        this.pre = document.createElement('pre');
        this.num = document.createElement('div');
        this.num.innerHTML = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n';
        this.num.classList.add('numeration');
        this.codeArea = new CodeArea(CODE_AREA_OPTIONS, level.boardMarkup!);
        this.codeArea.element.append(this.num);
        this.codeArea.appended(this.pre);
        this.element.append(this.pre);
    }  
}
