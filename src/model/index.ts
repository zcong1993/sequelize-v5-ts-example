import { User } from './user'
import { Post } from './post'
import { Tag } from './tag'
import { TagPost } from './tagPost'
import { UserDetail } from './userDetails'

User.hasMany(Post, { constraints: false, as: 'posts', foreignKey: 'authorId' })
Post.belongsTo(User, {
  constraints: false,
  as: 'author',
  foreignKey: 'authorId'
})
Post.belongsToMany(Tag, { constraints: false, through: TagPost })
Tag.belongsToMany(Post, { constraints: false, through: TagPost })
User.hasOne(UserDetail, {
  constraints: false,
  as: 'detail',
  foreignKey: 'userId'
})

export { User, Post, Tag, UserDetail }
