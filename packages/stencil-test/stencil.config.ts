import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';
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
    vueOutputTarget({
      componentCorePackage: 'stencil-test',
      proxiesFile: '../libraries/vue/lib/components.ts',
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
