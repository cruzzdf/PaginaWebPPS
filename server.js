const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('.'));  // Sirve tus archivos HTML/CSS/JS

// ─── Conexión MySQL ───────────────────────────────────────────
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // tu usuario MySQL
  password: '',         // tu contraseña MySQL
  database: 'login_db'
});

db.connect(err => {
  if (err) { console.error('❌ Error MySQL:', err); return; }
  console.log('✅ Conectado a MySQL');
});

// ─── Crear tabla si no existe ─────────────────────────────────
db.query(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// ─── RUTA: Registro ───────────────────────────────────────────
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.json({ success: false, message: 'Campos requeridos' });

  try {
    const hash = await bcrypt.hash(password, 10); // Encripta contraseña
    db.query(
      'INSERT INTO usuarios (username, password) VALUES (?, ?)',
      [username, hash],
      (err) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY')
            return res.json({ success: false, message: 'El usuario ya existe' });
          return res.json({ success: false, message: 'Error al registrar' });
        }
        res.json({ success: true, message: '✅ Usuario registrado con éxito' });
      }
    );
  } catch (e) {
    res.json({ success: false, message: 'Error del servidor' });
  }
});

// ─── RUTA: Login ──────────────────────────────────────────────
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.json({ success: false, message: 'Campos requeridos' });

  db.query(
    'SELECT * FROM usuarios WHERE username = ?',
    [username],
    async (err, results) => {
      if (err || results.length === 0)
        return res.json({ success: false, message: '❌ Usuario o contraseña incorrectos' });

      const match = await bcrypt.compare(password, results[0].password);
      if (match) {
        res.json({ success: true, message: '✅ Ingreso exitoso. ¡Bienvenido!' });
      } else {
        res.json({ success: false, message: '❌ Usuario o contraseña incorrectos' });
      }
    }
  );
});

app.listen(3000, () => console.log('🚀 Servidor en http://localhost:3000'));