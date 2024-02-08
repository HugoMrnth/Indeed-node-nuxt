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
            type: DataTypes.STRING,
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
        // company: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        
    })

    return Jobs
}