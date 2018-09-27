<div align="center">
  <h1>Docz Plugin PostCSS</h1>

  <img src="https://www.docz.site/static/img/logo.4f4f7bc5.svg" style="display:inline-block;vertical-align:middle;" alt="docz logo" title="docz logo" height="100px">
  <img src="https://postcss.org/_/web_modules/Hero/postcss.svg" alt="postcss logo" title="postcss logo" style="display:inline-block;vertical-align:middle;" height="80px">

  <p>Zero configuration PostCSS plugin for Docz</p>
</div>

<hr />

[![version](https://img.shields.io/npm/v/docz-plugin-postcss.svg?style=flat-square)](https://www.npmjs.com/package/docz-plugin-postcss)
[![downloads](https://img.shields.io/npm/dm/docz-plugin-postcss.svg?style=flat-square)](http://npmcharts.com/compare/docz-plugin-postcss)
[![MIT License](https://img.shields.io/npm/l/docz-plugin-postcss.svg?style=flat-square)](https://github.com/andreasonny83/docz-plugin-postcss/blob/master/license)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![Watch on GitHub](https://img.shields.io/github/watchers/andreasonny83/docz-plugin-postcss.svg?style=social)](https://github.com/andreasonny83/docz-plugin-postcss/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/andreasonny83/docz-plugin-postcss.svg?style=social)](https://github.com/andreasonny83/docz-plugin-postcss/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/andreasonny83/docz-plugin-postcss.svg?style=social)](https://twitter.com/intent/tweet?text=check%20out%20docz-plugin-postcss!%20https://github.com/andreasonny83/docz-plugin-postcss%20%f0%9f%91%8d)

- [Install](#install)
- [Usage](#usage)
- [Custom configuration](#custom-configuration)
- [License](#license)

## Install

Install `docz-plugin-postcss` using npm:

```
npm i -D docz-plugin-postcss
```

Or using Yarn with:

```
yarn add --dev docz-plugin-postcss
```

## Usage

Just import the plugin inside your `doczrc.js`

```ts
import { postCSSPlugin } from 'docz-plugin-postcss';

export default {
  plugins: [postCSSPlugin()],
};
```

## Custom configuration

This project uses [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env). You can pass a custom configuration according to the [PostCSS Preset Env documentation](https://github.com/csstools/postcss-preset-env#options).

Eg.

```ts
import { postCSSPlugin } from 'docz-plugin-postcss';

export default {
  plugins: [
    postCSSPlugin({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
```

## License

[MIT License](https://andreasonny.mit-license.org/2018) © Andrea SonnY
