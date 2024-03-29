module.exports = (sequelize, DataTypes) =>{
    const Address = sequelize.define("Address", {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        public_place:{
            type: DataTypes.STRING,
            allowNull: false
        },
        number:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        complement:{
            type: DataTypes.STRING(90),
            allowNull: false
        },
        reference:{
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code:{
            type: DataTypes.STRING(10),
            allowNull: false
        },
        district:{
            type: DataTypes.STRING,
            allowNull: false
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false
        },
        state:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: "addresses",
        timestamps: true
    });

    // Address.associate = (models)=>{
    //     Address.belongsTo(models.User);
    // }

    return Address;
}