# Z1-FRONTEND-DEVELOPER
## Para testear:
- Clonar el repo en local;
- `npm i` para instalar las dependencias
- `npm start` y abrir [http://localhost:3000](http://localhost:3000)

## Funcionalidades más importantes
- Si no hay foto previa, en la pagina principal se mostrerá la imagen del documento de default;
- Si hay imagen previa, se mostrará esta con el resultado previo (`accepted` o `rejected`)
- No hay camera real, si no un simulador. La imagen viene tomada dando con un click a la pantalla de la camera. He intentado simular un caso real donde hay el evento a través del cual la camera se focaliza en el documento y coge las informaciones (como los lectores QR del móvil)
- Si la imagen previa ha sido aprobada, la siguente imagen que se obtendrá por el simulador de camera será distinta (hay 3 imagenes de documentos distintas que vienen cogidas en [manera random](https://github.com/SaraPeir/z1-frontend-developer/blob/master/src/redux/slices/setPhoto.tsx#L26));
- Si la imagen previa ha sido rechazada, el simulador de la camera irá a "fotografar" siempre el mismo documento, hasta que el resultado de la API será positivo. 

Por lo restante, el comportamiento es el mismo escrito en los requerimientos[https://www.notion.so/Front-End-Developer-Spanish-f52babcb87bd401aa164033e06dbc419]

## Getting Started with Create React App
- Desarollo con React, usando Typescript;
- 2 paginas principales: `Home` y `Camera`. Para pasar de la una a la otra he usado `react-router-dom` (ver [aquí](https://github.com/SaraPeir/z1-frontend-developer/blob/master/src/App.tsx#L16))
- Gestión del estado global con `Redux` (incluida la llamada a la [API](https://github.com/SaraPeir/z1-frontend-developer/blob/master/src/redux/slices/fetchApi.tsx#L15))
- Tests unitarios solo de algunos ficheros ([Home](https://github.com/SaraPeir/z1-frontend-developer/blob/master/src/modules/Home/Home.test.tsx), [Camera](https://github.com/SaraPeir/z1-frontend-developer/blob/master/src/modules/Camera/Camera.test.tsx) y [setPhoto](https://github.com/SaraPeir/z1-frontend-developer/blob/master/src/redux/tests/setPhoto.test.tsx) Redux reducer), usando `React Testing Library`

