module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define("Professor", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    especialidade: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Professor.associate = (models) => {
    Professor.hasMany(models.Turma, { foreignKey: "professorId" });
  };

  return Professor;
};
