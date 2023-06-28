 interface ObjLevel {
    helpTitle : string,
    selectorName : string,
    doThis : string,
    selector : string,
    syntax : string,
    help : string,
    examples : string[],
    viewMarkup:string,
    boardMarkup: string

}

export const levels: Partial<ObjLevel>[] = [
    {
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        doThis : "Select the plates",
        selector : "plate",
        syntax : "A",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: `<plate class="active"></plate>\n<plate class="active"></plate>\n<apple></apple>`,
        boardMarkup: `<plate></plate>\n<plate></plate>\n<apple></apple>`
    },
    {
        doThis : "Select the bento boxes",
        selector : "bento",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<bento class="active"></bento>\n<plate></plate>\n<bento class="active"></bento>',
        boardMarkup: '<bento></bento>\n<plate></plate>\n<bento></bento>'
    },
    {
        doThis : "Select the bento boxes",
        selector : "apple",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<bento></bento>\n<plate><apple class="active"></apple></plate>\n<bento></bento>',
        boardMarkup: '<bento></bento>\n<plate><apple></apple></plate>\n<bento></bento>'
    },
    {
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        doThis : "Select the plates",
        selector : "#plate",
        syntax : "A",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: `<plate class="active id="plate"></plate>\n<apple></apple>\n<plate><apple></apple></plate>`,
        boardMarkup: `<plate id="plate""></plate>\n<apple></apple>\n<plate><apple></apple></plate>`
    },
    {
        doThis : "Select the bento boxes",
        selector : "bento",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<plate><bento><apple class="left-apple active"></apple></bento></plate>\n<plate><bento><apple></apple></bento></plate>',
        boardMarkup: 
`<plate>
    <bento>
        <apple class="left-apple">
        </apple>
    </bento>
</plate>
<plate>
    <bento>
        <apple>
        </apple>
    </bento>
</plate>`
    },
    {
        doThis : "Select the bento boxes",
        selector : "apple",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<bento></bento>\n<plate><apple class="active"></apple></plate>\n<bento></bento>',
        boardMarkup: '<bento></bento>\n<plate><apple></apple></plate>\n<bento></bento>'
    },
    {
        doThis : "Select the bento boxes",
        selector : "bento",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<bento class="active"></bento>\n<plate></plate>\n<bento class="active"></bento>',
        boardMarkup: '<bento></bento>\n<plate></plate>\n<bento></bento>'
    },
    {
        doThis : "Select the bento boxes",
        selector : "apple",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<bento></bento>\n<plate><apple class="active"></apple></plate>\n<bento></bento>',
        boardMarkup: '<bento></bento>\n<plate><apple></apple></plate>\n<bento></bento>'
    },
    {
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        doThis : "Select the plates",
        selector : "plate",
        syntax : "A",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: `<plate class="active"></plate>\n<plate class="active"></plate>\n<apple></apple>`,
        boardMarkup: `<plate></plate>\n<plate></plate>\n<apple></apple>`
    },
    {
        doThis : "Select the bento boxes",
        selector : "bento",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<bento class="active"></bento>\n<plate></plate>\n<bento class="active"></bento>',
        boardMarkup: '<bento></bento>\n<plate></plate>\n<bento></bento>'
    },
    {
        doThis : "Select the bento boxes",
        selector : "apple",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<bento></bento>\n<plate><apple class="active"></apple></plate>\n<bento></bento>',
        boardMarkup: '<bento></bento>\n<plate><apple></apple></plate>\n<bento></bento>'
    },
];