import yaml from 'js-yaml'


const books = [
    { name: 'タイトル1', authors: ['著者A', '著者B'] },
    { name: 'タイトル2', authros: ['著者C', '著者D'] }
  ];

const yamlText = yaml.dump(books);