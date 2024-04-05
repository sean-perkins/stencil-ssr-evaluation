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
    // Official Stencil React Output Target (with Next.js)
    reactOutputTarget({
      outDir: '../../apps/nextjs/src/app/components/',
      esModules: true,
      experimentalUseClient: true
    }),
    // Official Stencil React Output Target (with Remix)
    reactOutputTarget({
      outDir: '../../apps/remix/app/',
    }),
    // Community Stencil React Output Target (with Next.js)
    communityReactOutputTarget({
      outputPath: '../../apps/nextjs/src/app/proxies-2.ts'
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
