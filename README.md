# Proyecto NestJS API

Backend basado en [NestJS](https://nestjs.com/) con TypeScript, validación de datos, documentación Swagger, testing con Jest, linters y formateo de código. Ideal para APIs estructuradas, seguras y fácilmente escalables siguiendo buenas prácticas modernas.

## Características principales

- NestJS + TypeScript
- Prisma ORM
- PostgreSQL como base de datos
- Validación de datos con class-validator
- Documentación automática con Swagger
- Testing con Jest
- Linters y Prettier para calidad de código

---

## Requisitos previos

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 9.x
- [PostgreSQL](https://www.postgresql.org/) >= 13.x
- [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference)

---

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/JorgeIgnacio-Git/proyecto-nestj.git
   cd proyecto-nestj
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Crea el archivo de variables de entorno:**

   Copia el archivo de ejemplo y edítalo con tus datos:
   ```bash
   cp .env.example .env
   ```
   Edita el archivo `.env` y configura la variable `DATABASE_URL` con tus credenciales de PostgreSQL, por ejemplo:
   ```
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/mi_base_de_datos"
   ```

---

## Configuración de la base de datos y Prisma

1. **Asegúrate de que el servidor de PostgreSQL esté corriendo y la base de datos exista.**

2. **Ejecuta las migraciones para crear las tablas:**

   ```bash
   npx prisma migrate dev --name init
   ```

3. **Genera el cliente de Prisma:**

   ```bash
   npx prisma generate
   ```

---

## Ejecución en desarrollo

```bash
npm run start:dev
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Documentación Swagger

Una vez en ejecución, accede a la documentación interactiva en:  
[http://localhost:3000/api](http://localhost:3000/api)

---

## Testing

Para correr los tests:

```bash
npm run test
```

---

## Linter y formateo

- Para ejecutar ESLint:
  ```bash
  npm run lint
  ```
- Para formatear el código con Prettier:
  ```bash
  npm run format
  ```

---

## Scripts útiles

- `npm run start` - Inicia la app en modo producción
- `npm run start:dev` - Inicia la app en modo desarrollo con recarga
- `npm run test` - Ejecuta los tests unitarios
- `npm run lint` - Corre el linter
- `npm run format` - Formatea el código

---

## Estructura básica del proyecto

```
proyecto-nestj/
├── src/
├── prisma/
│   └── schema.prisma
├── test/
├── .env.example
├── package.json
└── README.md
```

---

## Notas

- Si cambias el archivo `prisma/schema.prisma`, ejecuta `npx prisma generate` para actualizar el cliente.
- Puedes modificar las migraciones según tus necesidades con `npx prisma migrate dev`.
- Asegúrate de mantener tu archivo `.env` fuera del control de versiones por seguridad.

---

## Licencia

Este proyecto se distribuye bajo la licencia UNLICENSED.  