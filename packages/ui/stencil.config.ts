import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'components',
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
    reactOutputTarget({
      componentCorePackage: 'ui',
      proxiesFile: '../../apps/nextjs/src/app/proxies.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: false
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
