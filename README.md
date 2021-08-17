# Z1-FRONTEND-DEVELOPER
## Para testear:
- Clonar el repo en local;
- `npm i` para instalar las dependencias
- `npm start` y abrir [http://localhost:3000](http://localhost:3000)

## Funcionalidades más importantes
- Si no hay foto previa, en la pagina principal se mostrerá la imagen del documento de default;
- Si hay imagen previa, se mostrará esta con el resultado previo (`accepted` o `rejected`)
- No hay camera real, si no un simulador. La imagen viene tomada dando con un click a la pantalla de la camera. He querido simular el evento donde la camera se focaliza en el documento para coger las informaciones (como los lectores QR del móvil)
- Si la imagen previa ha sido aprobada, la siguente imagen que se obtendrá por el simulador de camera será distinta (hay 3 imagenes de documentos distintas que vienen cogidas en manera random);
- Si la imagen previa ha sido rechazada, el simulador de la camera irá a "fotografar" siempre el mismo documento, hasta que el resultado de la API será positivo. 

Para lo restante, el comportamiento es el mismo escrito en los requerimientos[https://www.notion.so/Front-End-Developer-Spanish-f52babcb87bd401aa164033e06dbc419]

## Getting Started with Create React App
- Desarollo con React, usando typescript;
- 2 paginas principales: `Home` y `Camera`. Para pasar de la una a la otra he usado `react-router-dom`
- Gestion del estado global con `Redux` (incluida la llamada a la API)
- Tests unitarios solo de algunos ficheros, usando `React Testing Library`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
