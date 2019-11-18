import { CommonModel, createCommonModelConfig } from '../common'

export class TagPost extends CommonModel {}

TagPost.init(
  {},
  {
    modelName: 'tag_posts',
    ...createCommonModelConfig()
  }
)
