import './footer.scss';
import { BasicElement } from '../../../../util/basicElement';
import { GitHubLink } from './github_link/github_link';
import { Date } from './date/date';
import { RssLogo } from './rss-link/rss-link';

type optionObject = {
    tag: string,
    classNames: string[],
};
const GITHUB_LINK_OPTIONS = {
    tag: 'a',
    classNames: ['github-link']
};
const DATE_OPTIONS = {
    tag: 'div',
    classNames: ['date']
};
const RSS_LINK_OPTIONS = {
    tag: 'a',
    classNames: ['rss-link']
};


export class Footer extends BasicElement {
    github;
    date;
    rssLink;
    constructor(option: optionObject){
        super(option);
        this.github = new GitHubLink(GITHUB_LINK_OPTIONS);
        this.github.appended(this.element);
        this.date = new Date(DATE_OPTIONS);
        this.date.appended(this.element);
        this.rssLink = new RssLogo(RSS_LINK_OPTIONS);
        this.rssLink.appended(this.element);
    }  

}
