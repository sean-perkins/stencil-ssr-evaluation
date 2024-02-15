import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

import { reactOutputTarget as communityReactOutputTarget } from '@stencil-community/react-output-target';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'dist-hydrate-script'
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
    }),
    communityReactOutputTarget({
      outputPath: '../../apps/nextjs/src/app/proxies-2.ts'
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
