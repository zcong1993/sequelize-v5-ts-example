import {
  DataTypes,
  Association,
  HasManyCreateAssociationMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyAddAssociationMixin
} from 'sequelize'
import { CommonModel, createCommonModelConfig } from '../common'
import { User } from './user'
import { Tag } from './tag'

export class Post extends CommonModel {
  public title!: string
  public description: string
  public content: string

  public author?: User
  public tags?: Tag[]

  public createTag!: HasManyCreateAssociationMixin<Tag>
  public addTag!: BelongsToManyAddAssociationMixin<Tag, number>

  public static associations: {
    author: Association<Post, User>
    tags: Association<Post, Tag>
  }
}

Post.init(
  {
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    authorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    description: new DataTypes.STRING(),
    content: new DataTypes.TEXT()
  },
  {
    modelName: 'posts',
    ...createCommonModelConfig()
  }
)
