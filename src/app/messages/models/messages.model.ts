import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../../users/models/users.model";
import {Dialog} from "../../dialogs/dialogs.model";

export interface MessagesCreate{
    dialogId: number;
    userId: number;
    content: string[];
    status: string;
}

@Table({tableName: 'messages'})
export class Message extends Model<Message, MessagesCreate>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.ARRAY(DataType.TEXT), allowNull: false })
    content: string[];

    @ForeignKey(() => Dialog)
    @Column({type: DataType.INTEGER})
    dialogId: number;

    @Column({ type: DataType.STRING, allowNull: false })
    status: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User;
}