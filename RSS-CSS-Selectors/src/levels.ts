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
        doThis : "Select the tag dishs",
        selector : "dish",
        syntax : "A",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: `<dish class="active"></dish>\n<dish class="active"></dish>\n<apple></apple>`,
        boardMarkup: `HTML Viewer

1 <dish>
2 <dish>
3 <apple>`
    },
    {
        doThis : "Select the tag tray ",
        selector : "tray",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<tray class="active"></tray>\n<dish></dish>\n<tray class="active"></tray>',
        boardMarkup: `HTML Viewer

1 <tray>
2 <dish>
3 <tray>`
    },
    {
        doThis : "Select the apple on the dish",
        selector : "dish apple",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<tray><apple></apple></tray>\n<dish><apple class="active"></apple></dish>\n<tray></tray>',
        boardMarkup: `HTML Viewer

1 <tray>
2     <apple>
3 </tray>
4 <dish>
5     <apple>
6 </dish>
7 <tray>`
    },
    {
        helpTitle : "Select elements by their #id",
        selectorName : "Type Selector",
        doThis : "Select dish with border by #id",
        selector : "#border",
        syntax : "A",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: `<dish class="active" id="border"></dish>\n<apple></apple>\n<dish><apple></apple></dish>`,
        boardMarkup: `HTML Viewer

1 <dish id="border">
2 <apple>
3 <dish>
4     <apple>
5 </dish>`
    },
    {
        doThis : "Select apple by class",
        selector : ".left-apple",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<tray><dish><apple class="left-apple active"></apple></dish></tray>\n<tray><dish><apple></apple></dish></tray>',
        boardMarkup: `HTML Viewer

1  <tray>
2      <dish>
3          <apple class="left-apple">
4      </dish>
5  </tray>
6  <tray>
7      <dish>
8          <apple>
9      </dish>
10 </tray>`
    },
    {
        doThis : "Select all elements inside the tray",
        selector : "tray *",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<tray><dish class="active"><moon class="active"></moon></dish></tray>\n<tray><dish class="active"><moon class="active"></moon></dish></tray>',
        boardMarkup: 
`HTML Viewer

1  <tray>
2     <dish>
3          <moon>
4          </moon>
5      </dish>
6  </tray>
7  <tray>
8      <dish>
9          <moon>
10         </moon>
11    </dish>
12 </tray>`
    },
    {
        doThis : "Select tray first child",
        selector : "tray:first-child",
        syntax : "A",
        helpTitle : "Select tray ",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<tray><packman class="active"></packman><moon></moon></tray>\n<dish id="border"><moon></moon></dish>\n<tray><moon class="active"></moon><packman></packman></tray>',
        boardMarkup: 
`HTML Viewer

1  <tray>
2      <packman>
3      <moon>
4  </tray>
5  <dish id="border">
6      <moon>
7  </dish>
8  <tray>
9      <moon>
10    <packman>
11 </tray>`
    },
    {
        doThis : "Select  packman that come after moon",
        selector : "moon ~ packman",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<tray><moon></moon><packman class="small active"></packman></tray>\n<tray><moon></moon><packman class="active"></packman></tray>\n<packman></packman>\n<dish><moon></dish>\n<packman></packman>',
        boardMarkup: 
`HTML Viewer

1  <tray>
2      <moon>
3      <packman class="small">
4  </tray>
5  <tray>
6      <moon>
7      <packman>
8  </tray>
9  <packman>
10 <dish>
11     <moon>
12 </dish>
13 <packman>`
    },
    {
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        doThis : "Select all elements",
        selector : "*",
        syntax : "A",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<apple class="active"></apple>\n<moon class="active"></moon>\n<packman class="active"></packman></packman><moon class="active"></moon><packman class="active"></packman>\n<dish class="active"></dish>',
        boardMarkup: 
`HTML Viewer

1 <apple>
2 <moon>
3 <packman>
4 </packman>
5 <moon>
6 <packman>
7 <dish>
8     <moon>
9 </dish>`
    },
    {
        doThis : "Select empty tray",
        selector : "tray:empty",
        syntax : "A",
        helpTitle : "Select empty tray",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<tray class="active"></tray><tray><apple></apple><moon></moon></tray><tray><dish id="border"></dish></tray><tray class="active"></tray>',
        boardMarkup: 
`HTML Viewer

1 <tray>
2 <tray>
3     <apple>
4     <moon>
5 </tray>
6 <tray>
7     <dish id="border">
8 </tray>
9 <tray class="active">`
    },
    {
        doThis : "Select all fruits by attribute",
        selector : "[fruit]",
        syntax : "A",
        helpTitle : "Select elements by their type",
        selectorName : "Type Selector",
        help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples : [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        viewMarkup: '<apple fruit="true" class="active"></apple><moon></moon><apple fruit="true" class="active"></apple><dish><packman fruit="true" class="active"></packman></dish><moon></moon>',
        boardMarkup: 
`HTML Viewer

1 <apple fruit="true">
2 <moon>
3 <apple fruit="true">
4 <dish>
5     <packman fruit="true">
6 </dish>
7 <moon>`
    },
];