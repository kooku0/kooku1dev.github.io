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
        'books/clean-code/introduction',
      ]
    },
    {
      type: 'category',
      label: '오브젝트',
      items: [
        'books/object/introduction',
        'books/object/01',
        'books/object/02',
        'books/object/03',
        'books/object/04',
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
        'books/frameworkless-front-end-development/05',
        'books/frameworkless-front-end-development/06',
        'books/frameworkless-front-end-development/07',
        'books/frameworkless-front-end-development/08',
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
        'books/get-your-hands-dirty-on-clean-architecture/07',
        'books/get-your-hands-dirty-on-clean-architecture/08',
        'books/get-your-hands-dirty-on-clean-architecture/09',
        'books/get-your-hands-dirty-on-clean-architecture/10',
        'books/get-your-hands-dirty-on-clean-architecture/11',
        'books/get-your-hands-dirty-on-clean-architecture/12',
      ]
    },
    {
      type: 'category',
      label: '스칼라로 배우는 함수형 프로그래밍',
      items: [
        'books/functional-programming-in-scala/introduction',
        'books/functional-programming-in-scala/04',
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
    {
      type: 'category',
      label: '실용주의 프로그래머',
      items: [
        'books/the-pragmatic-programmer/introduction',
        'books/the-pragmatic-programmer/preface',
        'books/the-pragmatic-programmer/01',
        'books/the-pragmatic-programmer/02',
      ]
    },
    {
      type: 'category',
      label: '테스트 주도 개발',
      items: [
        'books/test-driven-development/introduction',
        'books/test-driven-development/preface',
        'books/test-driven-development/01',
        'books/test-driven-development/01',
      ]
    },
    {
      type: 'category',
      label: '함수형 자바스크립트',
      items: [
        'books/functional-programming-in-javascript/introduction',
        'books/functional-programming-in-javascript/preface',
        'books/functional-programming-in-javascript/01',
        'books/functional-programming-in-javascript/02',
        'books/functional-programming-in-javascript/03',
        'books/functional-programming-in-javascript/04',
        'books/functional-programming-in-javascript/05',
        'books/functional-programming-in-javascript/06',
        'books/functional-programming-in-javascript/07',
        'books/functional-programming-in-javascript/08',
      ]
    },
  ],
};

module.exports = sidebars;
