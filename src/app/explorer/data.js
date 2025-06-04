export const data = [
  {
    id: 1,
    name: 'public',
    isFolder: true,
    children: [{
      id: 2,
      name: 'file.svg',
      isFolder: false,
    }]
  },
  {
    id: 3,
    name: 'src',
    isFolder: true,
    children: [
      {
        id: 4,
        name: "app",
        isFolder: true,
        children: [
          {
            id: 5,
            name: 'chip',
            isFolder: true,
            children: [{
              id: 6,
              name: 'page.js',
              isFolder: false
            }],
            id: 7,
            name: 'explorer',
            isFolder: true,
            children: [{
              id: 8,
              name: 'page.js',
              isFolder: false
            }]
          }
        ]
      }
    ]
  }, {
    name: 'package.json',
    isFolder: false
  }

];