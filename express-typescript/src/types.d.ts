export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

// interface: Let's say it's like a contract that an object should have.
// interfaces are thought to be extendable such as:

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Instead of creating another type for the nonsensitive type, we caan just say that we
// want the above class without specific information. We explicitly select (pick) the
// specific variables we want.
export type NonSensitiveInfoDiaryEntry2 = Pick<DiaryEntry, 'id' | 'date' | 'weather' |
'visibility'>

// The opposite would be explicitly ommit the ones you don't want
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
/*

//  From here below we are not goig to ise it on the code, just for the seek of the explanation.
interface SpecialDairyEntry extends DiaryEntry{
    flightNumber: number
}

// In fact, we can also decalre objects in a new type, such as

export type DiaryEntry2 = {
    id:number,
    date: string,
    weather: Weather,
    visibiity: Visibility,
    commeent: string
}

// And types can also be extended.

type SpecialDiaryEntry2 = DiaryEntry2 & {
    flightNumber: number
}

// But it's not that readble.
// Usually use tye is the variable it's goinf to stay as composition (fixed).
// Interfaces can be named the same and they won't be rewrite, they would be extended.
// Types will be rewrite
*/
