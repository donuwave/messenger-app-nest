import { Model, Table, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../../roles/roles.model";
import { UserRoles } from "../../roles/user-roles.model";
import { Post } from "../../posts/posts.model";
import {Comments} from "../../comments/comments.model";
import {Dialog} from "../../dialogs/dialogs.model";
import {UserDialog} from "../../dialogs/user-dialogs.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({ example: "1", description: "Уникальный индификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "email@mail.ru", description: "Почтовый ящик" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "********", description: "Пароль" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({example: 'Олег', description: 'Имя'})
  @Column({type: DataType.STRING, allowNull: true })
  name: string;

  @ApiProperty({ example: true, description: "Забанен пользователь или нет?" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: true, description: "Онлайн пользователь или нет?" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  statusConnected: boolean;

  @ApiProperty({ example: true, description: "Онлайн пользователь или нет?" })
  @Column({ type: DataType.DATE, allowNull: false, defaultValue: new Date() })
  timeConnected: number;

  @ApiProperty({ example: "За оскорбления", description: "Причина блокировки" })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @ApiProperty({example: 'Фото', description: 'Цвет аватарки'})
  @Column({ type: DataType.STRING, defaultValue: 'red' })
  imgSubstitute: string;

  @Column({type: DataType.STRING})
  socket_id: string

  @Column({type: DataType.ARRAY(DataType.INTEGER), defaultValue: []})
  friends: number[];

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @BelongsToMany(() => Dialog, () => UserDialog)
  dialogs: Dialog[]

  @HasMany(() => Comments)
  comments: Comments[]

  @HasMany(() => Post)
  posts: Post[]
}
