# Investment Calculator

This is an Angular 18 project that calculates investment growth over time based on user input.

## Features

- Enter initial investment, annual investment, expected return, and duration.
- View yearly breakdown of investment value, interest earned, total interest, and invested capital.
- Responsive UI with Angular standalone components.

## Getting Started

### Install dependencies

```sh
npm install
```

### Development server

Run the development server:

```sh
npm start
```

Navigate to [http://localhost:4200](http://localhost:4200). The app reloads automatically if you change source files.

### Build

To build the project:

```sh
npm run build
```

Build artifacts are stored in the `dist/` directory.

### Running unit tests

Run unit tests via [Karma](https://karma-runner.github.io):

```sh
npm test
```

## Project Structure

```
src/
  app/
    app.component.ts
    app.component.html
    investment.service.ts
    investment-input.model.ts
    header/
      header.component.ts
      header.component.html
      header.component.css
    user-input/
      user-input.component.ts
      user-input.component.html
      user-input.component.css
    investment-results/
      investment-results.component.ts
      investment-results.component.html
      investment-results.component.css
  index.html
  main.ts
  styles.css
public/
  favicon.ico
  investment-calculator-logo.png
```

## Further help

For Angular CLI help use:

```sh
ng help
```

Or see the [Angular CLI documentation](https://angular.io/cli)
