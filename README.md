# gaia

## Integrantes

- Ahumada, Manuel
- Gonzalez Cornet, Josefina
- Lategana, Juan Ignacio
- Priotto, Nicolas

## Deployment

La webapp se encuentra disponible en un deploy de Vercel en el url:
https://gaiahackitba.vercel.app

La webapp fue disenada para formatos mobile, por lo cual se recomienda utilizar un browser en un smartphone o la funcion de Responsive Design Mode con un tamano de telefono del browser (en la ventana donde se encuentra la consola). En IOS, se presenta la posibilidad de simular una app con la web, para esto, al entrar al url ir a compartir y luego elegir Save to Home. De esta manera, se evita el searchbar del browser. En caso de no hacerlo se recomienda esconderlo manualmente para una mejor experiencia de usuario.

## Build

Para buildear y ejecutar este proyecto se debe tener instalado NodeJS + npm.

Primero instalar dependencias:

```bash
  npm install
```

Luego buildear el proyecto:

```bash
  npm run build
```

Despues ejecutar la build en un server local:

```bash
  npm start
```

Finalmente se puede acceder al mismo en la url:
http://localhost:3000