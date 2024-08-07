import type { ColumnType, Generated, Selectable } from 'kysely'

export interface Database {
  person: PersonTable
  pet: PetTable
}

export type PersonId = string & { __brand?: 'Person' }
export interface PersonTable {
  id: Generated<PersonId>
  nickname: string
  /** @default other */
  gender: Generated<'MAN' | 'WOMAN' | 'OTHER'>
  created_at: ColumnType<Date, string | undefined, never>
}
export type Person = Selectable<PersonTable>

export type PetId = string & { __brand?: 'Pet' }
export interface PetTable {
  id: Generated<PetId>
  name: string
  person_id: PersonId
  species: 'dog' | 'cat'
}
