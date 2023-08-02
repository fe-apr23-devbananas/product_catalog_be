import {
  Column,
  Model,
  DataType,
  Unique,
  AllowNull,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
})
export class Products extends Model {
  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    category: string;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
    phoneId: string;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
    itemId: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    price: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    year: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    image: string;
}