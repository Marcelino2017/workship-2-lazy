# Aplicando Lazy loading

Los atributos `data-cualquiercosa`  sirven para definir atributos personalizados dentro de HTML, es decir, puedes inventarte atributos, yo los he usado desde siempre porque son muy útiles para pasar datos entre HTML y JavaScript, su sintaxis consta en que SIEMPRE deben iniciar con `data-` y después de eso puedes poner cualquier cosa: `data-este-es-un-atributo-data-personalizado`,  y se pueden usar de esta manera:
```
    <div id="myDiv" data-atributo="hola" data-un-atributo="el-valor-del-atributo">
        Hola 😄
    </div>
```

De esta forma podemos tener atributos personalizados en HTML:

[Atributos personalizados en HTML5, más datos con un simple “data-…”] (https://www.genbeta.com/desarrollo/atributos-personalizados-en-html5-mas-datos-con-un-simple-data)

La forma de acceder a estos elementos desde JavaScript es mediante la propiedad dataset, esta propiedad contiene la lista de todos los atributos personalizados que le pusiste a tu elemento:

```
    const atributo = myDiv.dataset.atributo; // hola

```

Para los atributos que tienen más de un guion, JavaScript es inteligente y los convierte a camel case 🐫:

```
    const unAtributo = myDiv.dataset.unAtributo; // el-valor-del-atributo

```

# Snowpack Tailwind

> ✨ Bootstrapped with Create Snowpack App (CSA).

Ready-to-go template to create awesome websites using Tailwind on top of Snowpack and autopublish to GitHub pages using GitHub Actions.

- [Quick start](#quick-start)
- [Features](#features)
- [Available Scripts](#available-scripts)

## Quick start

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind

# Enable Prettier on git-commit
cd my-app
npm run install:husky

# Start the development server
npm start
```

✨ Optional: [Enable autopublish](#q-how-do-i-enable-auto-publish-to-github-pages) to get your site deployed on GitHub Pages on every commit you push.

#### Optional install using Yarn:

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind --use-yarn

# Enable Prettier on git-commit
cd my-app
yarn install:husky
```

## Features

- Snowpack, of course.
- Tailwind.
- Prettier.
- Force prettier on git-commit.
- Autopublish on Github Pages.

### Q: How do I enable auto publish to GitHub Pages?

1. Update the value of `homepage` in `package.json`. It should look like `https://<your-username>.github.io/<your-repo-name>` (no trailing slash).
1. Push your changes into a new GitHub repository.
1. You should see an Action running on `https://github.com/<your-username>/<repo-name>/actions`
1. Make sure to [enable GitHub pages for your repo](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) and select the `gh-pages` branch
1. Give GH Pages some minutes, your site should be live on `https://<your-username>.github.io/<your-repo-name>`
1. Enjoy :)

### Q: How do I disable auto publish to GitHub Pages?

Remove the `.github/workflows/publish.yml` file.

### Q: How do I check my code syntax (Prettier) on git-commit?

Run `npm run install:husky`.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
