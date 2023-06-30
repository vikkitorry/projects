import { ILevelOptions } from '../../types/types'

export const levelsData: Array<ILevelOptions> = [
  {
    level: 1,
    solution: 'catBlack',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'catBlack',
        classNames: ['one', 'animate', 'animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; catBlack / &#62;</div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 2,
    solution: 'catWhite',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'hedgehog',
        classNames: ['one', 'animate', 'animal'],
        textContent: "",
      },
      {
        tag: 'hare',
        classNames: ['two', 'animal'],
        textContent: "",
      },
      {
        tag: 'hedgehog',
        classNames: ['three','animate', 'animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; hedgehog / &#62;</div>
    <div class='second two'>&#60; hare / &#62;</div>
    <div class='second three'>&#60; hedgehog / &#62;</div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 3,
    solution: '#cat',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'catBlack',
        classNames: ['one', 'animate', 'animal'],
        textContent: "",
        id: "cat"
      },
      {
        tag: 'dogWhite',
        classNames: ['two', 'animal'],
        textContent: "",
      },
      {
        tag: 'dogWhite',
        classNames: ['three', 'animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; catBlack <span class = 'id'>id = 'cat'</span> / &#62; </div>
    <div class='second two'>&#60; dogWhite / &#62;</div>
    <div class='second three'>&#60; dogWhite / &#62;</div>
    &#60; game / &#62
    </div>`,
  },

  {
    level: 4,
    solution: 'house catWhite',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'catBlack',
        classNames: ['one', 'animal'],
        textContent: "",
      },
      {
        tag: 'house',
        classNames: ['two'],
        textContent: "",
        child: [{
          tag: 'catWhite',
          classNames: ['three', 'animate', 'animal'],
          textContent: "",
        },]
      },
      {
        tag: 'catWhite',
        classNames: ['four', 'animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; catBlack / &#62;</div>
    <div class='second two'>&#60; house &#62;
    <div class='third three'>&#60; catWhite / &#62;</div>
    &#60; house / &#62 </div>
    <div class='second four'>&#60; catWhite / &#62;</div>
    &#60; game / &#62
    </div>`,
  },

  {
    level: 5,
    solution: '.cat',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'catWhite',
        classNames: ['one', 'animal', 'cat', 'animate'],
        textContent: "",
      },
      {
        tag: 'elk',
        classNames: ['two', 'animal'],
        textContent: "",
      },
      {
        tag: 'house',
        classNames: ['three'],
        textContent: "",
        id: 'house',
        child: [{
          tag: 'catWhite',
          classNames: ['four', 'animate', 'animal', 'cat'],
          textContent: "",
        },]
      },
      {
        tag: 'house',
        classNames: ['five'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; catWhite <span class = 'id'>class = 'cat' </span>/ &#62;</div>
    <div class='second two'>&#60; elk / &#62;</div>
    <div class='second three'>&#60; house &#62;
    <div class='third four'>&#60; catWhite <span class = 'id'>class = 'cat' </span>/ &#62;</div>
    &#60; house / &#62 </div>
    <div class='second five'>&#60; house / &#62 </div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 6,
    solution: 'catWhite .sweet',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'catWhite',
        classNames: ['one', 'animal', 'sweet', 'animate'],
        textContent: "",
      },
      {
        tag: 'dogWhite',
        classNames: ['two', 'animal', 'sweet'],
        textContent: "",
      },
      {
        tag: 'house',
        classNames: ['three'],
        textContent: "",
        id: 'house',
        child: [{
          tag: 'catWhite',
          classNames: ['four','animate', 'animal', 'sweet'],
          textContent: "",
        },]
      },
      {
        tag: 'houseDark',
        classNames: ['five'],
        textContent: "",
        id: 'house',
        child: [{
          tag: 'catWhite',
          classNames: ['six','animal'],
          textContent: "",
        },]
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; catWhite <span class = 'id'>class = 'sweet' </span>/ &#62;</div>
    <div class='second two'>&#60; dogWhite <span class = 'id'>class = 'sweet' </span> / &#62;</div>
    <div class='second three'>&#60; house &#62;
    <div class='third four'>&#60; catWhite <span class = 'id'>class = 'sweet' </span>/ &#62;</div>
    &#60; house / &#62 </div>
    <div class='second five'>&#60; houseDark &#62;
    <div class='third six'>&#60; catWhite / &#62;</div>
    &#60; houseDark / &#62 </div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 7,
    solution: 'catWhite, dogWhite',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
      boardMarkup:
      [
        {
          tag: 'dogBlack',
          classNames: ['one','animal'],
          textContent: "",
        },
        {
          tag: 'catBlack',
          classNames: ['two','animal'],
          textContent: "",
        },
        {
          tag: 'catWhite',
          classNames: ['three','animate', 'animal'],
          textContent: "",
        },
        {
          tag: 'dogWhite',
          classNames: ['four','animate', 'animal'],
          textContent: "",
        },
      ],
      codeNode: `
      <div class='container'> &#60; game &#62
      <div class='second one'>&#60; dogBlack / &#62;</div>
      <div class='second two'>&#60; catBlack / &#62;</div>
      <div class='second three'>&#60; catWhite / &#62;</div>
      <div class='second four'>&#60; dogWhite / &#62;</div>
      &#60; game / &#62
      </div>`,
    },
  {
    level: 8,
    solution: '*',
    description:
    {
      tag: 'p',
      classNames: ['task-desc'],
      textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'elk',
        classNames: ['one','animate', 'animal'],
        textContent: "",
      },
      {
        tag: 'catBlack',
        classNames: ['two','animate', 'animal'],
        textContent: "",
      },
      {
        tag: 'catWhite',
        classNames: ['three','animate', 'animal'],
        textContent: "",
      },
      {
        tag: 'dogWhite',
        classNames: ['four','animate', 'animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; elk / &#62;</div>
    <div class='second two'>&#60; catBlack / &#62;</div>
    <div class='second three'>&#60; catWhite / &#62;</div>
    <div class='second four'>&#60; dogWhite / &#62;</div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 9,
    solution: 'bigHouse *',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'bigHouse',
        classNames: ['one',],
        textContent: "",
        child: [
          {
            tag: 'catWhite',
            classNames: ['two','animate', 'animal', 'cat'],
            textContent: "",
          },
          {
            tag: 'catblack',
            classNames: ['three','animate', 'animal', 'cat'],
            textContent: "",
          },
          {
            tag: 'dogblack',
            classNames: ['four','animate', 'animal', 'right-animal'],
            textContent: "",
          },
          {
            tag: 'dogWhite',
            classNames: ['five','animate', 'animal', 'right-animal'],
            textContent: "",
          },
      ]
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; bigHouse &#62;
    <div class='third two'>&#60; catWhite / &#62;</div>
    <div class='third three'>&#60; catblack / &#62;</div>
    <div class='third four'>&#60; dogblack / &#62;</div>
    <div class='third five'>&#60; dogWhite / &#62;</div>
    &#60; bigHouse / &#62 </div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 10,
    solution: 'bigHouse .cat',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'bigHouse',
        classNames: ['one',],
        textContent: "",
        child: [
          {
            tag: 'catWhite',
            classNames: ['two','animate', 'animal', 'cat'],
            textContent: "",
          },
          {
            tag: 'catblack',
            classNames: ['three','animate', 'animal', 'cat'],
            textContent: "",
          },
          {
            tag: 'elk',
            classNames: ['four','animal', 'right-animal'],
            textContent: "",
          },
          {
            tag: 'hare',
            classNames: ['five','animal', 'right-animal'],
            textContent: "",
          },
        ]
      },
      {
        tag: 'catBlack',
        classNames: ['six','animal', 'cat'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; bigHouse &#62;
    <div class='third two'>&#60; catWhite <span class = 'id'>class = 'cat' </span>/ &#62;</div>
    <div class='third three'>&#60; catblack <span class = 'id'>class = 'cat' </span>/ &#62;</div>
    <div class='third four'>&#60; elk / &#62;</div>
    <div class='third five'>&#60; hare / &#62;</div>
    &#60; bigHouse / &#62 </div>
    <div class='second six'>&#60; catblack <span class = 'id'>class = 'cat' </span>/ &#62;</div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 11,
    solution: 'catWhite:first-child',
    description:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Select the moving object.",
      },
    boardMarkup:
    [
      {
        tag: 'bigHouse',
        classNames: ['one',],
        textContent: "",
        child: [
          {
            tag: 'catWhite',
            classNames: ['two','animate', 'animal', 'cat'],
            textContent: "",
          },
          {
            tag: 'catWhite',
            classNames: ['three','animal', 'cat'],
            textContent: "",
          },
          {
            tag: 'catWhite',
            classNames: ['four','animal', 'right-animal'],
            textContent: "",
          },
          {
            tag: 'dogWhite',
            classNames: ['five','animal', 'right-animal'],
            textContent: "",
          },
        ]
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second one'>&#60; bigHouse &#62;
    <div class='third two'>&#60; catWhite / &#62;</div>
    <div class='third three'>&#60; catWhite / &#62;</div>
    <div class='third four'>&#60; catWhite / &#62;</div>
    <div class='third five'>&#60; dogWhite / &#62;</div>
    &#60; bigHouse / &#62 </div>
    &#60; game / &#62
    </div>`,
  },
]

/*
01. plate
02. bento
03. #fancy
04. plate apple
05. #fancy pickle
06. .small
07. orange.small
08. bento orange.small
09. plate, bento
10. *
11. plate *
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. orange:first-child
16. plate apple:only-child, plate pickle:only-child
17. .small:last-child
18. plate:nth-child(3)
19. bento:nth-last-child(3)
20. apple:first-of-type*/