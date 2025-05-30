# Contributing to Gobot

## Target Branch

**Please open all non-hotfix PRs against the `dev` branch!**

Gobot follows a ["git flow"](http://nvie.com/posts/a-successful-git-branching-model/)-style model for managing development.

## Issue Contributions

When opening new issues or commenting on existing issues on this repository
please make sure discussions are related to concrete technical issues with the
Gobot software.

## Code Contributions

The Gobot project welcomes new contributors.

This document will guide you through the contribution process.

What do you want to contribute?

* I want to otherwise correct or improve the docs or examples
* I want to report a bug
* I want to add some feature or functionality to an existing hardware platform
* I want to add support for a new hardware platform

Descriptions for each of these will eventually be provided below.

## General Guidelines

* All active development is in the `dev` branch. New or updated features must be added to the `dev` branch.
* All patches must be provided under the Apache 2.0 License
* Please use the -S option in git to "sign off" that the commit is your work and you are providing it under the
  Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and describe the changes sufficient.
* Please follow our naming conventions for Pull Requests.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers
  from time to time but they can complicate merges and should be done separately.
* Take care to maintain the existing coding style.
* `golangci-lint` your code, see [instruction for local installation](https://golangci-lint.run/usage/install/#local-installation)
* `gofumpt` your code (the go version will be automatically obtained from go.mod), see [instructions](https://github.com/mvdan/gofumpt/blob/master/README.md)
* Add unit tests for any new or changed functionality and run tests with `-race` flag activated.
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git
* Use one of the latest existing platforms/drivers etc. as a blueprint for creating a new one

## Creating Pull Requests

Because Gobot makes use of self-referencing import paths, you will want
to implement the local copy of your fork as a remote on your copy of the
original Gobot repo. Katrina Owen has [an excellent post on this workflow](https://splice.com/blog/contributing-open-source-git-repositories-go/).

The basics are as follows:

1. Fork the project via the GitHub UI

2. `git clone` the upstream repo and set it up as the `upstream` remote and your own repo as the `origin` remote:

    `git clone https://github.com/hybridgroup/gobot.git`
    `cd $GOPATH/src/gobot.io/x/gobot`
    `git remote rename origin upstream`
    `git remote add origin git@github.com/YOUR_GITHUB_NAME/gobot`

    All import paths should now work fine assuming that you've got the
    proper branch checked out.

3. Get all dependencies:

   * `cd $GOPATH/src/gobot.io/x/gobot`
   * `go mod tidy` will fetch  all the dependencies at their needed version.

## Landing Pull Requests

(This is for committers only. If you are unsure whether you are a committer, you are not.)

1. Set the contributor's fork as an upstream on your checkout

   `git remote add contrib1 https://github.com/contrib1/gobot`

2. Fetch the contributor's repo

   `git fetch contrib1`

3. Checkout a copy of the PR branch

   `git checkout pr-1234 --track contrib1/branch-for-pr-1234`

4. Review the PR as normal

5. Land when you're ready via the GitHub UI

## Convention for Pull Request Descriptions

Making unified descriptions helps a lot to generate the [CHANGELOG](./CHANGELOG.md) for the next release.
We support the style from <https://www.conventionalcommits.org>, so you can use something like this:

* type(scope): description
* i2c(PCF8583): added
* gpio(HD44780): fix wrong constants
* raspi(PWM): refactor usage
* docs(core): usage of Kernel driver
* or alternative: core(docs): usage of Kernel driver
* build(style): adjust rule for golangci-lint

We try to keep it as simple as possible:

* Do not use "fix" or "bugfix" for `type`
* Please assign "fix", "style", "refactor", "perf", "test" etc. to the related `type` (driver-type/platform-name etc.),
  and start the description with e.g. "fix...", "test..." etc.
* For `type` use the name of the deepest folder (e.g. i2c/raspi/system). Feel free to order "examples" to the
  related driver.
* Further values for `type` are: "docs", "build", "core"
* Please use "build" instead of "CI"
* For the `scope` use the name of the driver or feature (e.g. grove/PWM).
* If unsure don't panic, follow your feeling. Possibly the reviewer will correct it or suggest a better description.

## Developer's Certificate of Origin 1.0

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I
  have the right to submit it under the open source license indicated
  in the file; or
* (b) The contribution is based upon previous work that, to the best
  of my knowledge, is covered under an appropriate open source license
  and I have the right under that license to submit that work with
  modifications, whether created in whole or in part by me, under the
  same open source license (unless I am permitted to submit under a
  different license), as indicated in the file; or
* (c) The contribution was provided directly to me by some other
  person who certified (a), (b) or (c) and I have not modified it.

## Code of Conduct

Gobot is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
[You can read about it here](CODE_OF_CONDUCT.md).

## Origins

This document is based on the original [io.js contribution guidelines](https://github.com/nodejs/io.js/blob/main/CONTRIBUTING.md)
