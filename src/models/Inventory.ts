import {Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'inventories',
})
export class Inventory extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location!: string;
    
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
    })
    price!: number;
}
