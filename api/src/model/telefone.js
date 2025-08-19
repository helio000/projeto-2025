module.exports = (sequelize, DataTypes) => {
  const Telefone = sequelize.define("Telefone", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Telefone;
};
