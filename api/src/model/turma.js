module.exports = (sequelize, DataTypes) => {
  const Turma = sequelize.define("Turma", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Turma.associate = (models) => {
    Turma.belongsTo(models.Professor, { foreignKey: "professorId" });
    Turma.hasMany(models.Matricula, { foreignKey: "turmaId" });
  };

  return Turma;
};
