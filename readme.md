# Apikachu store

- [Installation and usage](#installation-and-usage)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Git](#git)
- [Documentation](#documentation)
- [Style Guide](#style-guide)
  - [Breakpoints](#breakpoints)
  - [Properties order](#properties-order)

<a name="installation-and-usage"></a>

## 1. Installation and usage

<a name="prerequisites"></a>

### 1.1 Prerequisites

latest version of node and npm. [download](https://nodejs.org/es/)

<a name="installation"></a>

### 1.2 Installation

```shell
git clone https://github.com/bit-hug-learning/apikachu-store.git
cd apikachu-store
npm install
```

<a name="development"></a>

### 1.3 Development

Start dev server

```shell
npm run start
```

Start storybook

```shell
npm run storybook
```

<a name="git"></a>

## 2. Git

There are a set of rules to keep in mind:

- Perform work in a feature branch.
  _Why:_
  > Because this way all work is done in isolation on a dedicated branch rather than the main branch. It allows you to submit multiple pull requests without confusion. You can iterate without polluting the master branch with potentially unstable, unfinished code. [read more...](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow)
- Branch out from `dev`

  _Why:_

  > This way, you can make sure that code in master will almost always build without problems, and can be mostly used directly for releases (this might be overkill for some projects).

- Never push into `dev` or `main` branch. Make a Pull Request.

  _Why:_

  > It notifies team members that they have completed a feature. It also enables easy peer-review of the code and dedicates forum for discussing the proposed feature.

- Delete local and remote feature branches after merging.
  _Why:_
  > It will clutter up your list of branches with dead branches. It ensures you only ever merge the branch back into (`main` or `dev`) once. Feature branches should only exist while the work is still in progress.

<a name="Documentation"></a>

## 3. Documentation

- Comment your code. Try to make it as clear as possible what you are intending with each major section.
- Don't use comments as an excuse for a bad code. Keep your code clean.
- Don't use clean code as an excuse to not comment at all.
- Keep comments relevant as your code evolves.
- Recommended using [JSDoc](https://www.youtube.com/watch?v=r0H-acWQS6c)

<a name="style-guide"></a>

## 4. Style Guide

<a name="style-guide"></a>

### 4.1 Breakpoints

- Mobile: 320px
- Tablet: 768px
- Desktop: 1280px

<a name="properties-order"></a>

### 4.2 Properties order

Orden de las propiedades de los selectores:

1. Posicionamiento: display, position(static, relative, absolute, etc), etc.
2. Modelo caja: content(width,height,min/max), padding, border, margin
3. Tipografía: font-family, font-size, font-weight, line-height, etc.
4. Visuales-estética: color, background, border-radius, box-shadow, etc.
5. Otros: transition, animation, etc.

```css
  display:
  position:
  left/right/top/bottom:

  width/(min-max):
  height/(min-max):
  padding:
  margin:
  border:

  font-family:
  font-size:
  font-weight:
  line-height:

  color:
  background:
  border-radius:
  box-shadow:
  cursor:

  transition:
  animation-name:
  animation-duration:
  animation-iteration-count:
```
