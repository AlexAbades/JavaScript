import { DiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Weather } from '../types'
import diaryData from './diaries.json' // typescript no soporta este tipe de archivos,
// hay que ir al tssconfig.json y añadir "resolveJsonModule": true

// Now we can specify a new constant and declare it to be from type Array
// furthermore, we can specify that array to be an array of DiaryEntry which
// it's just the new type we've created
// Sometimes we can face an Error related to the type of the json. Typescript thinks that the
// type of the json can be antything. We can solve that problem with type assertion.
// Which basically obligates typescript to consider that constant works in a specific way
// Usual happens with .json from external API
// Array<DiaryEntry> === DiaryEntry[]

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries // recuperamos lals entries del diaryData

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry // Explicilty removing comment QUESTION: que son los ...? y como lo quita
    return restOfDiary
  }

  return undefined
}
// We can defina a variable that's exactly the same as the above but without sensitive content,
// let's say without the comment

// export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries

// If we do it like that, without explicitly specifying which fields from the object we want, it will
// pass all the information.
// QUESTION: Why we have to create a new Type if we have to map it later?

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addEntry = (date: string, weather: Weather, visibility: Visibility,
  comment: string): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    weather,
    visibility,
    comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
} // para añadir una entrada
