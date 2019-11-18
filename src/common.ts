import { inspect } from 'util'
import { Sequelize, Model } from 'sequelize'

const sequelize = new Sequelize('mysql://root:root@localhost:3306/test_seq')

class CommonModel extends Model {
  public id!: number

  // timestamps!
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date | null
}

const createCommonModelConfig = () => ({
  sequelize,
  timestamps: true,
  underscored: true,
  deletedAt: 'deleted_at',
  paranoid: true
})

const syncForce = async () => sequelize.sync({ force: true })

const dump = (data: any) => {
  if (Array.isArray(data)) {
    console.log(JSON.parse(JSON.stringify(data)))
  } else {
    console.log(data.toJSON())
  }
}

export { sequelize, CommonModel, createCommonModelConfig, syncForce, dump }
