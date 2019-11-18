import { DataTypes, Association } from 'sequelize'
import { CommonModel, createCommonModelConfig } from '../common'
import { Post } from './post'

export class Tag extends CommonModel {
  public name!: string

  public posts?: Post[]

  public static associations: {
    posts: Association<Tag, Post>
  }
}

Tag.init(
  {
    name: {
      type: new DataTypes.STRING(30),
      allowNull: false,
      unique: true
    }
  },
  {
    modelName: 'tags',
    ...createCommonModelConfig()
  }
)
