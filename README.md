# Ecommmerce Application


## Create React Using Vite :-
```
npm create vite@latest
```
## Install Node-Modules Package :-
```
npm i
```
## Install Tailwind CSS :-
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## Configure your template paths :-
```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Add the Tailwind directives to index.css :-
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
