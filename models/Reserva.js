// TODO: Crear modelo de datos de Reserva

// Importar Sequelize y configurar la conexión a la base de datos
const {sequelize, DataTypes} = require('../db');

// Definir el modelo "Cliente"
const Cliente = sequelize.define('Cliente', {
  cliente_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definir el modelo "Reserva"
const Reserva = sequelize.define('Reserva', {
  reserva_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo_reserva: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fecha_reserva: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Establecer la relación entre Cliente y Reserva
Cliente.hasMany(Reserva, {foreignKey: 'cliente_id'});
Reserva.belongsTo(Cliente, {foreignKey: 'cliente_id'});

// Sincronizar los modelos con la base de datos
sequelize
  .sync()
  .then(() => {
    console.log('Los modelos se han sincronizado correctamente.');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });
