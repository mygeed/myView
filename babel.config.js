module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup'],
        plugins: ['line-numbers', 'match-braces', 'copy-to-clipboard'],
        theme: 'tomorrow',
        css: true,
      },
    ],
  ],
  // ATTENTION!!
  // Preset ordering is reversed, so `@babel/typescript` will called first
  // Do not put `@babel/typescript` before `@babel/env`, otherwise will cause a compile error
  // See https://github.com/babel/babel/issues/12066
/*  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false
      }
    ],
    '@babel/typescript'
  ],*/
/*  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/proposal-class-properties',
    '@babel/transform-runtime',
    'lodash',
    [
      'babel-plugin-module-resolver',
      {
        root: ['myView'],
        alias: {
          '@c': 'myView/src/components',
          '@u': 'myView/src/utils'
        }
      }
    ],
    ['@babel/plugin-proposal-private-methods', { 'loose': false }]
  ],*/
/*  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        '@babel/transform-typescript'
      ]
    }
  ],*/
  env: {
    utils: {
      ignore: [
        '**/*.test.ts',
        '**/*.spec.ts'
      ]
    }
  }
};
