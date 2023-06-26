import './header.scss';
import { BasicElement } from "../../../../util/basicElement";
import { HelpButton } from './help_button/help_button';
import { NameTask } from './name_task/name_task';


type optionObject = {
    tag: string,
    classNames: string[],
};
const HELP_BUTTON_OPTIONS = {
    tag: 'button',
    classNames: ['help-button']
};
const NAME_TASK_OPTIONS = {
    tag: 'div',
    classNames: ['name-task']
};

export class Header extends BasicElement {
    helpButton;
    nameTask;
    constructor(option: optionObject){
        super(option);
        this.helpButton = new HelpButton(HELP_BUTTON_OPTIONS);
        this.helpButton.appended(this.element);
        this.nameTask = new NameTask(NAME_TASK_OPTIONS);
        this.nameTask.appended(this.element);
    }

}
