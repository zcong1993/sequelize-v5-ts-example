import {
  DataTypes,
  Association,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin
} from 'sequelize'
import { CommonModel, createCommonModelConfig } from '../common'
import { Post } from './post'
import { UserDetail } from './userDetails'

export class User extends CommonModel {
  public name!: string

  public getProjects!: HasManyGetAssociationsMixin<Post>
  public addPost!: HasManyAddAssociationMixin<Post, number>
  public hasPost!: HasManyHasAssociationMixin<Post, number>
  public countPosts!: HasManyCountAssociationsMixin
  public createPost!: HasManyCreateAssociationMixin<Post>

  public posts?: Post[]
  public detail?: UserDetail

  public static associations: {
    posts: Association<User, Post>
    detail: Association<User, UserDetail>
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }
  },
  {
    modelName: 'users',
    ...createCommonModelConfig()
  }
)
