# &lt;ult-action&gt;
[![NPM version](http://img.shields.io/npm/v/ult-action.svg?style=flat)](http://npmjs.org/ult-action)
[![NPM downloads](http://img.shields.io/npm/dm/ult-action.svg?style=flat)](http://npmjs.org/ult-action)
[![Dependency Status](http://img.shields.io/david/cledev/ult-action.svg?style=flat)](https://david-dm.org/cledev/ult-action)

> A custom element to wire up events and methods on different elements.

## Demo

[Check it live!](http://cledev.github.io/ult-action)

## Install
Install the components using [NPM](http://www.npmjs.org)

```sh
$ npm install ult-action --save
```

Install the component using [Bower](http://bower.io/):

```sh
$ bower install ult-action --save
```

Or [download as ZIP](https://github.com/cledev/ult-action/archive/master.zip).

## Usage

1. Import the tiny (**3.5k** minified and gzipped) Ultralight-Elements platform:

    ```html
    <script src="bower_components/ultralight-platform/dist/ultralight-platform.min.js"></script>
    ```

    The ultralight platfrom and all ultralight elements are wrapped in a **UMD** wrapper, so they are also ready to be used with CommonJS module loaders like  **browserify**, or your favorite **AMD** module loader.


2. Import Custom Element:

    ```html
    <script src="bower_components/ult-action/dist/ult-action.min.js">
    ```

    or require ult-action with **browserify** or your favorite **AMD** loader

3. Start using it!

    ```html
    <ult-action></ult-action>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`foo`         | *string*    | `bar`        | Lorem ipsum dolor.

## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`unicorn()`   | None.        | Nothing.    | Magic stuff appears.

## Events

Event         | Description
---           | ---
`onsomething` | Triggers when something happens.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Gulp](http://gulpjs.com/):

    ```sh
    $ [sudo] npm install -g bower gulp
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ gulp server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ gulp build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ gulp deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/cledev/ult-action/CHANGELOG.md).

## License


[MIT License](http://opensource.org/licenses/MIT)

