import { ElementParams, ILevelOptions } from '../../types/types'

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

export const levelsArticles: Array<ElementParams> = [
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 1',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 2',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 3',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 4',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 5',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 6',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 7',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 8',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 9',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 10',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 11',
  },
  {
    tag: 'div',
    classNames: ['level'],
    textContent: 'Level 12',
  }
]



export const levelsData: Array<ILevelOptions> = [
  {
    level: 1,
    solution: 'catBlack',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use 'catBlack'",
      },
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
    solution: 'catBlack',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use 'catBlack'",
      },
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
      {
        tag: 'catWhite',
        classNames: ['animal'],
        textContent: "",
      },
      {
        tag: 'catBlack',
        classNames: ['animate', 'animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second'>&#60; catBlack / &#62;</div>
    <div class='second'>&#60; catWhite / &#62;</div>
    <div class='second'>&#60; catBlack / &#62;</div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 3,
    solution: '#cat',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use '#cat'",
      },
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
    solution: 'cat',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use 'catBlack'",
      },
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
    <div class='second'>&#60; house / &#62;
    <div class='third'>&#60; catWhite / &#62;</div>
    &#60; house / &#62 </div>
    <div class='second'>&#60; catWhite / &#62;</div>
    &#60; game / &#62
    </div>`,
  },
  {
    level: 5,
    solution: 'cat',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use 'catBlack'",
      },
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
      {
        tag: 'catWhite',
        classNames: ['animal'],
        textContent: "",
      },
    ],
    codeNode: `
    <div class='container'> &#60; game &#62
    <div class='second'>&#60; catBlack / &#62;</div>
    <div class='second'>&#60; catWhite / &#62;</div>
    &#60; game / &#62
    </div>`,
  },

]