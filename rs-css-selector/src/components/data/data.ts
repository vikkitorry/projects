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
    solution: 'plate',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use 'plate'",
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
        tag: 'span',
        classNames: [],
        textContent: "< plate >",
      },
      {
        tag: 'span',
        classNames: ['second'],
        textContent: "< bento / >",
      },
      {
        tag: 'span',
        classNames: [],
        textContent: "< / plate >",
      },
    ],
  },
  {
    level: 2,
    solution: 'plate',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use 'plate'",
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
        tag: 'span',
        classNames: [],
        textContent: "< plate >",
      },
      {
        tag: 'span',
        classNames: ['second'],
        textContent: "< bento / >",
      },
      {
        tag: 'span',
        classNames: ['second'],
        textContent: "< aaaa / >",
      },
      {
        tag: 'span',
        classNames: [],
        textContent: "< / plate >",
      },
    ],
  },
  {
    level: 3,
    solution: 'plate',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use 'plate'",
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
        tag: 'span',
        classNames: [],
        textContent: "<plate>",
      },
      {
        tag: 'span',
        classNames: ['second'],
        textContent: "<bento />",
      },
      {
        tag: 'span',
        classNames: [],
        textContent: "</plate>",
      },
    ],
  },
  {
    level: 4,
    solution: 'plate',
    prompt:
      {
        tag: 'p',
        classNames: ['task-desc'],
        textContent: "Try to use 'plate'",
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
        tag: 'span',
        classNames: [],
        textContent: "<plate>",
      },
      {
        tag: 'span',
        classNames: ['second'],
        textContent: "<bento />",
      },
      {
        tag: 'span',
        classNames: [],
        textContent: "</plate>",
      },
    ],
  }
]