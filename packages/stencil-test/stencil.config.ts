import { Config } from '@stencil/core';
import { vueOutputTarget as vue3OutputTarget } from '@stencil/vue-output-target';
import { vueOutputTarget as vue2OutputTarget } from 'stencil-vue2-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { solidOutputTarget } from 'stencil-solid-output-target';

export const config: Config = {
  namespace: 'stencil-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vue3OutputTarget({
      componentCorePackage: 'stencil-test',
      proxiesFile: '../libraries/vue3/lib/components.ts',
    }),
    vue2OutputTarget({
      componentCorePackage: 'stencil-test',
      proxiesFile: '../libraries/vue2/lib/components.ts',
    }),
    reactOutputTarget({
      componentCorePackage: 'stencil-test',
      proxiesFile: '../libraries/react/lib/components/stencil-generated/index.ts',
    }),
    solidOutputTarget({
      componentCorePackage: 'stencil-test',
      proxiesFile: '../libraries/solid/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
