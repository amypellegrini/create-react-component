# Create React Component

Inspired by Facebook's [create-react-app](https://github.com/facebook/create-react-app)

`create-react-component` is intended to be a React component boilerplate/bootstrapping utility which exposes a simple CLI to bootstrap a React component template, and it is designed to speed up the process of creating a component by assuming some reasonable standards and defaults based on popular usage.

This is just in its Alpha stage and I'm currently working alone, so don't rush! Or help me to make this faster with your contributions.

## Abstract

The idea is that given a certain folder structure for components, and a set of dependencies defined in the `package.json`, we could infer a reasonable folder structure and essential boilerplate for any React component we decide to build, thus enabling the automation of initial implementation steps such as: creating a folder with a component and test files included, defining required imports, and so on.

## Purpose

### Why not just use `create-react-app`?

There are many instances in which the implementation of a react component may require some basic boilerplate generation process comprised of small and very often repetitive steps, roughly defined as follows:

1. Create a folder with a given component name
2. Create an `index.js` file within said folder
3. Create a component named file to be exported from index
4. Create a `__tests__` folder
5. Create a test file with the component import and some basic assertion
6. And the list goes on...

## Usage/UI

The use of this utility would be limited to the command line.

## Supported stack

React is most commonly used in combination with

- Storybook
- Jest
- JSX
