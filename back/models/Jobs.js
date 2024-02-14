module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define("Jobs", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shortDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(10000),
            allowNull: false
        },
        wage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hours: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    Jobs.associate = (models) => {
        Jobs.belongsTo(models.Companies)
        Jobs.hasMany(models.Applications, {
            onDelete: "cascade",
        })
    }

    return Jobs
}