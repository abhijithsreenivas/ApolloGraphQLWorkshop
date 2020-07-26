const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user',{
        name: {
            type: DataTypes.STRING
        }
    });

    User.associate = models => {
        // 1 -> Many
        User.hasMany(models.Car, {onDelete: 'CASCADE'});
        
    }

    User.prototype.hashPassword = async function() {
        return await bcrypt.hash(this.password, 10);
    }

    User.beforeCreate(async user => {
        user.password = await this.hashPassword(user.password);
    });

    return User;
}

module.exports = user;