# 🔐 Proyecto Login y Registro con Autenticación

Este proyecto implementa un sistema completo de **login y registro de usuarios** utilizando tecnologías web modernas. Incluye autenticación básica, conexión a base de datos MySQL y un backend con Node.js y Express.

---

## 🧩 Tecnologías utilizadas

| Capa | Herramientas |
|------|---------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express |
| **Base de datos** | MySQL |
| **Entorno de desarrollo** | Visual Studio Code |

---

## 🚀 Funcionalidades principales

- Registro de nuevos usuarios con validación de datos.
- Inicio de sesión con verificación de credenciales.
- Conexión segura al servidor MySQL.
- Encriptación de contraseñas con `bcrypt`.
- Mensajes dinámicos de éxito o error en el frontend.
- Estructura modular y fácil de mantener.

---

## 📁 Estructura del proyecto

```
📂 PaginaWebPPS/
│
├── 📂 public/
│   ├── 📄 index.html
│   ├── 🎨 style.css
│   └── ⚙️ script.js
│
├── 🚀 server.js
├── 📦 package.json
├── 📦 package-lock.json
└── 📝 README.md
```
---

## ⚙️ Instalación y ejecución

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/cruzzdf/PaginaWebPPS.git
   cd PaginaWebPPS
  

2. **Instala las dependencias:**
    ```bash
    npm install

3. **Configura la base de datos MySQL**
    ```bash
    CREATE DATABASE PaginaWebPPS;
    USE PaginaWebPPS;

    CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin','estudiante','invitado') DEFAULT 'estudiante',
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

4. **Ejecuta el servidor**
    ```bash
    node server.js

5. **Abre tu navegador en:**
    ```bash
    http://localhost:3000

---

## 🔒 Seguridad
- Contraseñas encriptadas con bcrypt.

- Validación de entradas para evitar inyecciones SQL.

- Uso de body-parser para manejar solicitudes JSON.

---

## 🧠 Aprendizajes y objetivos
Este proyecto demuestra el flujo completo de autenticación web:

- Comunicación entre frontend y backend.

- Manejo de sesiones y validaciones.

- Integración de Node.js con MySQL.

---

## 👨‍💻 Autor
- Cruzzdf (SWE) 
- Estudiante del Politécnico Grancolombiano  
- Proyecto académico de construcción de software.

---

## 📜 Licencia
**Este proyecto se distribuye bajo la licencia MIT.
Puedes usarlo, modificarlo y compartirlo libremente con atribución.**
