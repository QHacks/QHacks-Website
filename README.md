# QHacks Website

[![CircleCI
Status](https://circleci.com/gh/qhacks/qhacks-website.svg?style=shield&circle-token=2816988f179e0cb9a7ce228608a9a72fb62c7f64)](https://circleci.com/gh/qhacks/qhacks-website)
[![Coverage
Status](https://coveralls.io/repos/github/qhacks/qhacks-website/badge.svg?branch=dev)](https://coveralls.io/github/qhacks/qhacks-website?branch=dev)

This repository contains the QHacks website! The website is to serve as a
marketing resource for our event and to act as a gateway for hackers to access
our [dashboard](https://github.com/qhacks/qhacks-dashboard). In addition to
containing our event website for the current year, this repo also contains
branches that have our websites from our previous years.

The website is built using [Gatsby](https://www.gatsbyjs.org/) which utilizes
[React](https://reactjs.org/) to generate static sites. For data fetching we are
using a combination of [GraphQL](https://graphql.org/learn/) and
[REST](https://en.wikipedia.org/wiki/Representational_state_transfer) from many
different sources. For testing we use [Jest](https://jestjs.io/) and track our
test coverage using [Coveralls](https://coveralls.io/). For more information
about the technical specifications please refer to the
[wiki](https://github.com/qhacks/qhacks-website/wiki).

## Utilize

Utilize the scripts below in the root of the project to get started:

**Build the website:**

`npm run build`

**Build the website while watching changes:**

`npm run develop`

**Run the linter to check code style:**

`npm run style`

**Run the formatter to fix code style issues:**

`npm run format`

**Run the entire test suite:**

`npm run test`

**Run only the Jest tests:**

`npm run jest-tests`

**Run only the Jest tests in watch mode:**

`npm run jest-tests-watch`

**Run only the Jest tests and report coverage data to Coveralls:**

`npm run jest-tests-with-coverage`

> NOTE: You likely won't need to do this and it will fail because some
> environment variables are required. We use this in our CI environment.

**Run only the Cypress tests with server:**

`npm run cypress-tests`

> NOTE: This will start a server and host the website at the `baseURL` that
> Cypress requires and shut down the server once all the testing is complete.

**Open the Cypress test runner:**

`npm run cypress-open`

**Run only the Cypress tests without server:**

`npm run cypress-run`

> NOTE: To run this you must have the website being served to the `baseURL` set
> in the Cypress config.

**Run only the Cypress tests and record data to the Cypress dashboard:**

`npm run cypress-run-record`

> NOTE: You likely won't need to do this and it will fail because some
> environment variables are required. We use this in our CI environment.

## Contributing

A general guide to contribute in this repository is:

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request :rocket:

> See more information in our [contributing
> guide](https://github.com/qhacks/qhacks-website/blob/dev/CONTRIBUTING.md).

## License

Copyright 2018 QHacks

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

> See the entire license in our [license
> file](https://github.com/qhacks/qhacks-website/blob/dev/LICENSE).
