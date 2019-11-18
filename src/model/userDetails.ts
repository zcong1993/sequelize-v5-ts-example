import { DataTypes } from 'sequelize'
import { CommonModel, createCommonModelConfig } from '../common'

export class UserDetail extends CommonModel {
  public gender!: string
}

UserDetail.init(
  {
    gender: {
      type: new DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  },
  {
    modelName: 'user_details',
    ...createCommonModelConfig()
  }
)
