const { DataTypes, Sequelize } = require ("sequelize");

module.exports = (sequelize)=> {sequelize.define("Dogs",{
    id:{
        type:DataTypes.UUID,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4,
        //defaultValue:DataTypes.UUIDV4 para que asigne aleatoramente 
    },
   name:{
        type:DataTypes.STRING,
        allowNull:false,
   },
   height:{
        type:DataTypes.INTEGER,
   },
   weight:{
        type:DataTypes.INTEGER,
   },
   life_span:{
        type:DataTypes.INTEGER,
   },
   created:{
    type: DataTypes.BOOLEAN,
    defaultValue: true,   
   },
}, {timestamps: false});

};

