module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Contatos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('contatos');
    }
};