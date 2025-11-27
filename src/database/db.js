import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_geWhr60YHExC@ep-fragrant-resonance-ac3k1ssp-pooler.sa-east-1.aws.neon.tech/sprout?sslmode=require',
  ssl: {
    rejectUnauthorized: false // Necesario en algunos entornos con Neon (como Vercel o local con cert SSL auto-firmado)
  },
  max: 20, // Máximo número de clientes en el pool
  idleTimeoutMillis: 30000, // Cerrar clientes inactivos después de 30s
  connectionTimeoutMillis: 10000, // Timeout para conectar (aumentado para Neon cold starts)
});

// Manejar errores de clientes inactivos para evitar caídas
pool.on('error', (err, client) => {
  console.error('❌ Error inesperado en cliente inactivo de la base de datos', err);
  // No salir del proceso, dejar que el pool intente reconectar o manejar nuevas conexiones
});

// Opcional: prueba la conexión al iniciar
pool.connect()
  .then(client => {
    console.log('✅ Conectado a PostgreSQL (Neon)');
    client.release(); // Importante liberar el cliente de prueba
  })
  .catch(err => console.error('❌ Error al conectar a PostgreSQL:', err.stack));

export default pool;