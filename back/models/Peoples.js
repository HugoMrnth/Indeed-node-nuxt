module.exports = (sequelize, DataTypes) => {
    const Peoples = sequelize.define("Peoples", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resume: {
            type: DataTypes.STRING,
        },
        catchPhrase: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    })

    Peoples.associate = (models) => {
        Peoples.belongsTo(models.Companies)
        Peoples.hasMany(models.Applications, {
            onDelete: "cascade",
        })
    }

    return Peoples
}