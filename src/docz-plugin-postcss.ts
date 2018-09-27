// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { css } from 'docz-plugin-css';
import postcssPresetEnv from 'postcss-preset-env';

const defaultOpts = {
  stage: 0,
  browsers: 'last 2 versions',
  features: {
    'nesting-rules': true,
  },
};

export const postCSSPlugin = (opts = defaultOpts) =>
  css({
    preprocessor: 'postcss',
    loaderOpts: {
      plugins: [postcssPresetEnv(opts)],
    },
  });
