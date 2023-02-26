# react-twemoji-components

<div align="center">
😃 Twemoji as individual React Components

![License](https://img.shields.io/github/license/blazingworks/react-twemoji-components?color=%235300cf&labelColor=%230a0014&style=for-the-badge)
![Contributors](https://img.shields.io/github/contributors/blazingworks/react-twemoji-components?color=%235300cf&labelColor=%230a0014&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/blazingworks/react-twemoji-components?color=%235300cf&labelColor=%230a0014&style=for-the-badge)

</div>

## What is `react-twemoji-components`?

`react-twemoji-components` is a package which exposes a component for each emoji in the Twemoji set. This is useful when you want to use Twemoji as an Icon set. If you want to use Emojis primarily in text, you should use a different package like [react-twemoji](https://github.com/zxmys/react-twemoji) or [react-emoji-render](https://github.com/tommoor/react-emoji-render)

## Current status (⚠️)

`react-twemoji-components` is currently in development and is not suggested for production use. The following things are currently still unfinished or may change at any time:

- The dataset we're using is currently stuck on Unicode 13.0. We're working on updating it to Unicode 14.0/15.0. You can still use these emojis, but their name will be their codepoint. These are however deprecated and may be removed in any future update.
- Some emojis are missing from the dataset. These include for example the letters or digits.
- The skin tone variants are currently executed as seperate components. These will be removed in the future and replaced with a single component which takes a `skinTone` prop.

## Installation

```sh
npm install react-twemoji-components
yarn add react-twemoji-components
pnpm add react-twemoji-components
```

## Usage

```tsx
import { TransgenderFlag } from "react-twemoji-components";

return <TransgenderFlag size={64} />;
```

## Special Thanks & Sponsors

- [BlazingWorks](https://blazing.works/) - for funding and maintaining the development of Reggy
- [OfficialCRUGG](https://github.com/OfficialCRUGG) - for the idea of `react-twemoji-components`
- [Twemoji](https://twemoji.twitter.com/) - for the awesome emoji set
- [DataHub](https://datahub.io/) - for formatting the emoji data into a usable format

## How to report issues / questions

- For general issues or questions, [open an issue](https://github.com/blazingworks/react-twemoji-components/issues/new)
- For security issues, please send an email to [security@blazing.works](mailto:security@blazing.works)
- For important questions, please email [developers@blazing.works](mailto:developers@blazing.works)

## License

`react-twemoji-components` is licensed under the [MIT License](/LICENSE).

<div align="center" style="margin-top: 30px">
<a href="https://blazing.works"><img src=".github/blazingworks_opensource.svg" alt="BlazingWorks Open-Sourcd" width="200px"></a>
</div>
