/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // mySidebar: [{type: 'autogenerated', dirName: '.'}],
  books: [
    'books/index',
    {
      type: 'category',
      label: '클린코드',
      items: [
        'books/clean-code/introduction'
      ]
    },
    {
      type: 'category',
      label: '오브젝트',
      items: [
        'books/object/introduction',
        'books/object/01',
        'books/object/02',
        'books/object/03'

      ]
    },
    {
      type: 'category',
      label: '프레임워크 없는 프론트엔드 개발',
      items: [
        'books/frameworkless-front-end-development/introduction',
        'books/frameworkless-front-end-development/01',
        'books/frameworkless-front-end-development/02',
        'books/frameworkless-front-end-development/03',
      ]
    },
    {
      type: 'category',
      label: '만들면서 배우는 클린 아키텍처',
      items: [
        'books/get-your-hands-dirty-on-clean-architecture/introduction',
        'books/get-your-hands-dirty-on-clean-architecture/01',
        'books/get-your-hands-dirty-on-clean-architecture/02',
        'books/get-your-hands-dirty-on-clean-architecture/03',
        'books/get-your-hands-dirty-on-clean-architecture/04',
        'books/get-your-hands-dirty-on-clean-architecture/05',
        'books/get-your-hands-dirty-on-clean-architecture/06',
      ]
    },
    {
      type: 'category',
      label: '스칼라로 배우는 함수형 프로그래밍',
      items: [
        'books/functional-programming-in-scala/introduction',
        'books/functional-programming-in-scala/04'
      ]
    },
    {
      type: 'category',
      label: '이펙티브 타입스크립트',
      items: [
        'books/effective-typescript/introduction',
        'books/effective-typescript/03',
        'books/effective-typescript/04',
      ]
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
