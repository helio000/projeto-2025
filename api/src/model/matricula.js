module.exports = (sequelize, DataTypes) => {
  const Matricula = sequelize.define("Matricula", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Matricula.associate = (models) => {
    Matricula.belongsTo(models.Aluno, { foreignKey: "alunoId" });
    Matricula.belongsTo(models.Turma, { foreignKey: "turmaId" });
  };

  return Matricula;
};
