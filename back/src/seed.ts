import { createConnection } from 'typeorm'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import connConfigs from './type_orm_config'

async function loadSeeds(): Promise<void> {
  const connection = await createConnection(connConfigs)

  const file = yaml.load(fs.readFileSync('./src/seed.yml', 'utf8')) as Record<
    string,
    unknown[]
  >
  for (const [entityName, objs] of Object.entries(file)) {
    for (const data of objs) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await connection.getRepository(entityName).save(data as any)
    }
  }
  await connection.close()
}

async function dropSeeds(): Promise<void> {
  const connection = await createConnection(connConfigs)

  const file = yaml.load(fs.readFileSync('./src/seed.yml', 'utf8')) as Record<
    string,
    unknown[]
  >
  for (const entityName of Object.keys(file)) {
    const tableMeta = connection.getMetadata(entityName)
    await connection
      .getRepository(entityName)
      .query(`TRUNCATE ${tableMeta.tablePath} RESTART IDENTITY CASCADE;`)
  }
  await connection.close()
}

const args = process.argv.slice(2)
if (args.length === 1 && args[0] === 'drop') {
  dropSeeds()
} else {
  loadSeeds()
}
