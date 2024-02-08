module.exports = (sequelize, DataTypes) => {
    const Applications = sequelize.define("Applications", {
        validated: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false  
        }
    })

    Applications.associate = (models) => {
        Applications.belongsTo(models.Jobs);
        Applications.belongsTo(models.Peoples);
    }

    return Applications
}