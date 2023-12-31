/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from 'stencil-test';




const customElementTags: string[] = [
 'my-component',
 'my-test',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const MyComponent = /*@__PURE__*/ Vue.extend({

  props: {
    first: {} as PropOptions<Components.MyComponent['first']>,
    middle: {} as PropOptions<Components.MyComponent['middle']>,
    last: {} as PropOptions<Components.MyComponent['last']>,
    color: {} as PropOptions<Components.MyComponent['color']>,
  },


  render: createCommonRender('my-component', ['myChange']),
});


export const MyTest = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.MyTest['color']>,
    title: {} as PropOptions<Components.MyTest['title']>,
    value: {} as PropOptions<Components.MyTest['value']>,
  },


  render: createCommonRender('my-test', []),
});

