import { syncForce, dump } from './common'
import { User, Post, Tag } from './model'

const run = async () => {
  await syncForce()

  const user = await User.create(
    {
      name: 'zcong',
      detail: {
        gender: 'male'
      }
    },
    {
      include: [
        {
          association: User.associations.detail
        }
      ]
    }
  )

  const post = await user.createPost({
    title: 'test',
    description: 'desc',
    content: 'lorem'
  })

  dump(user)
  dump(post)

  const u = await Post.findByPk(1, {
    include: [
      {
        association: Post.associations.author
      }
    ]
  })

  dump(u)

  const p2 = await user.createPost(
    {
      title: 'test2',
      description: 'desc',
      content: 'lorem',
      tags: [
        {
          name: 'tag1'
        }
      ]
    },
    {
      include: [
        {
          association: Post.associations.tags
        }
      ]
    }
  )

  dump(p2)

  const tag = await Tag.findByPk(1)

  const p3 = await user.createPost({
    title: 'test2',
    description: 'desc',
    content: 'lorem'
  })
  await p3.addTag(tag)

  dump(p3)

  const p4 = await Post.findAll({
    include: [
      {
        association: Post.associations.author
      },
      {
        association: Post.associations.tags
      }
    ]
  })

  dump(p4)
}

run().catch(console.log)
