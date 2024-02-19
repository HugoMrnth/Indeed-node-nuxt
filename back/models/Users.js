module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isACompany: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })

    Users.associate = (models) => {
        Users.hasMany(models.Companies, {
            onDelete: "cascade",
        });
        Users.hasMany(models.Peoples, {
            onDelete: "cascade",
        });
    }

    return Users
}