# Honeycrisp  &nbsp; <a href="https://badge.fury.io/js/honeycrisp"><img src="https://badge.fury.io/js/honeycrisp.svg" alt="npm version" height="18"></a> [![](https://data.jsdelivr.com/v1/package/npm/honeycrisp/badge)](https://www.jsdelivr.com/package/npm/honeycrisp)&nbsp;[![](https://img.shields.io/npm/dm/honeycrisp.svg)](https://www.npmjs.com/package/honeycrisp)



<p align="center">
<img src="https://user-images.githubusercontent.com/13616332/207875618-daed766b-64bc-4f73-a62b-3fad21c3b705.png">
</p>
<h2 align="center">A Crispy Input For Numbers</h2>

Honeycrisp is a unique number input created to aid standard two-factor auth login flows by providing an enhanced input for One-Time Passwords.

<h6>Two-Factor Authentication</h6>

![2022-12-19 06 42 39](https://user-images.githubusercontent.com/13616332/208418517-5ac9117f-d81e-4b97-b191-bf30782ca563.gif)

<h1>Demo</h1>

Give it a try -> [Codepen](https://codepen.io/cambass23/pen/wvxwJKY)

<h1>Installation</h1>

Install with NPM:
```bash
$ npm install honeycrisp --save
```

Install with Yarn:
```bash
$ yarn add honeycrisp
```
<h1>Usage</h1>

```html
<div class="honeycrisp"></div>
```

```js
Honeycrisp.create('.honeycrisp');
```
You can use any classname you would like to locate the element for Honeycrisp to place the input.

<h1>Options</h1>


```js
Honeycrisp.create('.honeycrisp', {
  inputName: "name",
  inputClass: "input-class",
  WrapperClass: "wrapper-class",
  inputCount: 6,
  submitOnComplete: false,
});
```

<h1>Future Updates</h1>

- [ ] Add Tests
- [ ] Enable options for `submitOnComplete` -- Option is currently defaulted to false
- [ ] Add default stylesheet

## How can I help?

Honeycrisp is open source and contributions from the community are encouraged! No
contribution is too small.

<h1>License</h1>
<p>MIT</p>
