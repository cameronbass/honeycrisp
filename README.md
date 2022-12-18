# Honeycrisp  &nbsp; [![npm version](https://badge.fury.io/js/honeycrisp.svg)](https://badge.fury.io/js/honeycrisp)

<p align="center">
<img src="https://user-images.githubusercontent.com/13616332/207875618-daed766b-64bc-4f73-a62b-3fad21c3b705.png">
</p>
<h2 align="center">A Crispy Input For Numbers</h2>

Honeycrisp is a number input that is inspired by common two-factor auth login flows that require 6-digit inputs for one-time passwords. 

<h1>Demo</h1>

We have created a demonstration that can be found on [Codepen](https://codepen.io/cambass23/pen/wvxwJKY)

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

These items will be removed from the list after completion. Feel free to contribute!

<h1>License</h1>
<p>MIT</p>
