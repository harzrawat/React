
# Manual Setup of React with Vite (Without create-vite)

This document explains how to manually set up a React project using **Vite** from scratch, without using `create-vite`, and explains **why each command and configuration is required**.

---

## 1. Project Structure

Create a project folder:

```bash
mkdir my-project
cd my-project
````

Initial structure:

```text
my-project/
├── index.html
├── app.jsx
└── package.json   (created later)
```

---

## 2. `index.html`

Create `index.html` with the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--
      We are NOT using CDN links for:
      - React
      - ReactDOM
      - Babel

      Instead, we will install everything via npm
    -->
    <div id="root"></div>

    <!-- Entry point of the application -->
    <script type="module" src="./app.jsx"></script>
</body>
</html>
```

### Explanation

* `div#root`

  * React needs a **DOM node** where it can mount the virtual DOM.
* `type="module"`

  * Allows usage of **ES Modules** (`import/export`)
  * Required because `app.jsx` uses `import React from "react"`

---

## 3. `app.jsx`

Create `app.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>hey this manually set up of react vite</h1>;

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(element);
```

### Explanation

* `import React from "react"`

  * Required to use JSX
* `import ReactDOM from "react-dom/client"`

  * Provides `createRoot()` (React 18+ API)
* `createRoot(...).render(...)`

  * Creates a **React root**
  * Renders the React element inside `div#root`

---

## 4. Initialize npm

Run:

```bash
npm init
```

This creates `package.json`.

### What `package.json` Contains

#### 1. Project Metadata

* `name`
* `version`
* `description`

#### 2. Dependencies

* Libraries required at runtime (React, ReactDOM)

#### 3. Dev Dependencies

* Tools needed only during development (Vite, plugins)

#### 4. Scripts

* Commands like `npm run dev`, `npm run build`

#### 5. Engine Compatibility

* Specifies supported Node.js versions

#### 6. Tool Configuration

* Vite, ESLint, Babel read config from here

---

## 5. Install React

```bash
npm install react
```

### Why?

* Provides:

  * JSX support
  * Component model
  * Hooks and Virtual DOM
* Without this:

  * `import React from "react"` fails

---

## 6. Install ReactDOM

```bash
npm install react-dom
```

### Why?

* ReactDOM connects **React** to the **browser DOM**
* Required for:

  ```js
  ReactDOM.createRoot(...)
  ```

---

## 7. Install Vite (Dev Dependency)

```bash
npm install -D vite
```

### Why `-D`?

* `-D` means **devDependency**
* Vite is:

  * A **development server**
  * A **build tool**
* Not needed in production runtime

### What Vite Does

* Starts a dev server
* Converts JSX → JavaScript
* Handles ES module imports
* Provides Hot Module Replacement (HMR)

---

## 8. Run the Project (Temporary)

```bash
npx vite
```

### What `npx vite` Does

* Runs Vite without adding a script
* Uses local `node_modules/.bin/vite`
* Starts dev server (usually on `localhost:5173`)

---

## 9. Add Proper Scripts (Recommended)

Modify `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Meaning of Each Script

| Script            | Purpose                   |
| ----------------- | ------------------------- |
| `npm run dev`     | Starts dev server         |
| `npm run build`   | Creates production build  |
| `npm run preview` | Previews production build |

Now run using:

```bash
npm run dev
```

---

## 10. Why JSX Works Without Babel CDN?

Because **Vite uses ESBuild internally**, which:

* Compiles JSX extremely fast
* Replaces the need for Babel in development

---

## 11. Install React Plugin for Vite

```bash
npm install -D @vitejs/plugin-react
```

### Why This Plugin Is Needed

* Enables:

  * JSX transformation
  * Fast Refresh (React HMR)
  * Automatic JSX runtime handling
* Prevents JSX import errors
* Handles React-specific optimizations

---

## 12. Create `vite.config.js`

Create `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});
```

### Explanation

#### `defineConfig()`

* Provides:

  * Type safety
  * Better IDE autocomplete
* Wraps Vite configuration

#### `plugins: [react()]`

* Adds React support to Vite
* Handles:

  * JSX syntax
  * Import statements
  * React Fast Refresh

---

## 13. How Import Statements Are Handled

Example:

```js
import React from "react";
```

### What Happens Internally

1. Browser sees ES module
2. Vite intercepts request
3. Vite resolves `react` from `node_modules`
4. JSX is transformed to JavaScript
5. Browser receives valid JS

Without Vite:

* Browser cannot understand JSX
* Import from `node_modules` fails

---

## 14. Final Folder Structure

```text
my-project/
├── node_modules/
├── index.html
├── app.jsx
├── vite.config.js
├── package.json
└── package-lock.json
```

---

## 15. Summary (One Line)

> This setup manually creates a React project using Vite by installing React, ReactDOM, and Vite separately, configuring scripts and plugins to handle JSX, ES modules, and fast development without using any CDN or scaffolding tool.

---

