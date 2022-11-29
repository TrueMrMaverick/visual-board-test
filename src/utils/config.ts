import {VBConfig} from "../types/config";

const vbConfig: VBConfig = [
  {
    index: 0,
    height: 240,
    items: [
      {
        id: '1',
        name: 'Item 1',
        start: 0,
        end: 6,
      },
      {
        id: '2',
        name: 'Item 2',
        start: 6,
        end: 12,
      }
    ]
  },
  {
    index: 1,
    height: 240,
    items: [
      {
        id: '3',
        name: 'Item 3',
        start: 0,
        end: 6,
      },
      {
        id: '4',
        name: 'Item 4',
        start: 8,
        end: 12,
      },
    ]
  },
  {
    index: 2,
    height: 240,
    items: [
      {
        id: '5',
        name: 'Item 5',
        start: 0,
        end: 6,
      },
      {
        id: '6',
        name: 'Item 6',
        start: 6,
        end: 12,
      }
    ]
  },
  {
    index: 3,
    height: 240,
    items: [
      {
        id: '7',
        name: 'Item 7',
        start: 5,
        end: 6,
      },
      {
        id: '8',
        name: 'Item 8',
        start: 9,
        end: 12,
      }
    ]

  },
  {
    index: 4,
    height: 240,
    items: [
      {
        id: '9',
        name: 'Item 9',
        start: 0,
        end: 9,
      }
    ]
  },
  {
    index: 5,
    height: 240,
    items: [
      {
        id: '10',
        name: 'Item 10',
        start: 0,
        end: 6,
      },
    ]
  }
];

export default vbConfig;


export const getVbConfig = (): VBConfig => JSON.parse(JSON.stringify(vbConfig));