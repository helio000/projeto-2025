module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define("Aluno", {
    ra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Aluno.associate = (models) => {
    Aluno.hasMany(models.Matricula, { foreignKey: "alunoId" });
  };

  return Aluno;
};
