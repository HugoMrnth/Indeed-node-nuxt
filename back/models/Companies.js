module.exports = (sequelize, DataTypes) => {
    const Companies = sequelize.define("Companies", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })

    Companies.associate = (models) => {
        Companies.belongsTo(models.Companies)
        Companies.hasMany(models.Jobs, {
            onDelete: "cascade",
        })
    }

    return Companies
}