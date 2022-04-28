import { DefaultNamingStrategy } from 'typeorm'
import { snakeCase } from 'typeorm/util/StringUtils'
import * as pluralize from 'pluralize'

export default class TypeOrmNamingStrategy extends DefaultNamingStrategy {
  tableName(className: string, customName: string) {
    return customName || pluralize(snakeCase(className))
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ) {
    return (
      snakeCase(embeddedPrefixes.join('_')) +
      (customName || snakeCase(propertyName))
    )
  }

  relationName(propertyName: string) {
    return snakeCase(propertyName)
  }

  joinColumnName(relationName: string, referencedColumnName: string) {
    return snakeCase(
      `${pluralize.singular(relationName)}_${referencedColumnName}`,
    )
  }

  joinTableName(
    firstTableName: string,
    secondTableName: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    firstPropertyName: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    secondPropertyName: string,
  ) {
    return snakeCase(`${firstTableName}_${secondTableName}`)
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName: string,
  ) {
    return snakeCase(
      `${pluralize.singular(tableName)}_${columnName || propertyName}`,
    )
  }

  classTableInheritanceParentColumnName(
    parentTableName: string,
    parentTableIdPropertyName: string,
  ) {
    return snakeCase(
      `${pluralize.singular(parentTableName)}_${parentTableIdPropertyName}`,
    )
  }
}
