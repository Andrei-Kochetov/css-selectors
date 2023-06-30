
import './main.scss';
import { BasicElement } from "../../../../util/basicElement";
import { DescriptionLevel } from './description-level/description-level';
import { Table } from './table/table';
import { CssInput } from './input-wrapper/css_input/css_input';
import { CodeArea } from './code_area/code_area';
import { ButtonEnter } from './input-wrapper/button-enter/button-enter';
import { InputWrapper } from './input-wrapper/input-wrapper';

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
    viewMarkup: string,
    boardMarkup: string

}

const DESCRIPTION_LEVEL_OPTIONS = {
    tag: 'div',
    classNames: ['description-level']
};
const TABLE_OPTIONS = {
    tag: 'table',
    classNames: ['table']
};
const INPUT_WRAPPER_OPTIONS = {
    tag: 'div',
    classNames: ['input-wrapper']
};
const CSS_INPUT_OPTIONS = {
    tag: 'input',
    classNames: ['css-input']
};
const BUTTON_ENTER_OPTIONS = {
    tag: 'button',
    classNames: ['btn-enter']
};
const CODE_AREA_OPTIONS = {
    tag: 'code',
    classNames: ['code-area','language-html', 'scroll-block']
};
export class Main extends BasicElement {
    description;
    table;
    inputWrapper;
    cssInput;
    buttonEnter;
    pre:HTMLElement;
    codeArea;
    wrapperTable:HTMLElement;
    //num;
    level;
    constructor(option: optionObject, level:Partial<ObjLevel>){
        super(option);
        this.level = level;

        this.description = new DescriptionLevel(DESCRIPTION_LEVEL_OPTIONS, level.doThis!);
        this.description.appended(this.element);
        this.wrapperTable = document.createElement('div');
        this.wrapperTable.classList.add('wrapper-table');
        this.table = new Table(TABLE_OPTIONS, level.viewMarkup!);
        this.table.appended(this.wrapperTable);
        this.element.append(this.wrapperTable);
        this.inputWrapper = new InputWrapper(INPUT_WRAPPER_OPTIONS);
        this.inputWrapper.appended(this.element);
        this.cssInput = new CssInput(CSS_INPUT_OPTIONS, level.selector!);
        this.cssInput.appended(this.inputWrapper.element);
        this.buttonEnter = new ButtonEnter(BUTTON_ENTER_OPTIONS);
        this.buttonEnter.appended(this.inputWrapper.element);
        this.pre = document.createElement('pre');
        //this.num = document.createElement('div');
        //this.num.innerHTML = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n';
        //this.num.classList.add('numeration');
        this.codeArea = new CodeArea(CODE_AREA_OPTIONS, level.boardMarkup!);
        //this.codeArea.element.append(this.num);
        this.codeArea.appended(this.pre);
        this.element.append(this.pre);
    }  
}
