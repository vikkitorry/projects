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
        classNames: ['animate', 'animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second'>&#60; catBlack / &#62;</div>
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
        tag: 'catWhite',
        classNames: ['animate', 'animal'],
        textContent: "",
      },
      {
        tag: 'catBlack',
        classNames: ['animal'],
        textContent: "",
      },
      {
        tag: 'catWhite',
        classNames: ['animate', 'animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second'>&#60; catWhite / &#62;</div>
    <div class='second'>&#60; catBlack / &#62;</div>
    <div class='second'>&#60; catWhite / &#62;</div>
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
        classNames: ['animate', 'animal'],
        textContent: "",
        id: "cat"
      },
      {
        tag: 'catWhite',
        classNames: ['animal'],
        textContent: "",
      },
      {
        tag: 'catWhite',
        classNames: ['animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second'>&#60; catBlack <span class = 'id'>id = 'cat'</span> / &#62; </div>
    <div class='second'>&#60; catWhite / &#62;</div>
    <div class='second'>&#60; catWhite / &#62;</div>
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
        classNames: ['animal'],
        textContent: "",
      },
      {
        tag: 'house',
        classNames: [],
        textContent: "",
        child: {
          tag: 'catWhite',
          classNames: ['animate', 'animal'],
          textContent: "",
        },
      },
      {
        tag: 'catWhite',
        classNames: ['animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second'>&#60; catBlack / &#62;</div>
    <div class='second'>&#60; house &#62;
    <div class='third'>&#60; catWhite / &#62;</div>
    &#60; house / &#62 </div>
    <div class='second'>&#60; catWhite / &#62;</div>
    &#60; game / &#62
    </div>`,
  },

  {
    level: 5,
    solution: 'cat',
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
        classNames: ['animal'],
        textContent: "",
      },
      {
        tag: 'house',
        classNames: [],
        textContent: "",
        id: 'house',
        child: {
          tag: 'catWhite',
          classNames: ['animate', 'animal'],
          textContent: "",
        },
      },
      {
        tag: 'house',
        classNames: [],
        textContent: "",
        child: {
          tag: 'catWhite',
          classNames: ['animal'],
          textContent: "",
        },
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second'>&#60; catBlack / &#62;</div>
    <div class='second'>&#60; house <span class = 'id'>id = 'house'</span> &#62;
    <div class='third'>&#60; catWhite / &#62;</div>
    &#60; house / &#62 </div>
    <div class='second'>&#60; house &#62;
    <div class='third'>&#60; catWhite / &#62;</div>
    &#60; house / &#62 </div>
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