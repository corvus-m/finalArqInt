



//como este en la documentacion
export type CharacterFind = {
    id: number,
    name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Object, //eliminar? cambiar por any?
  location: Object,
  image: string,
  episode: string[]
  created: string
}

// export type CharactersFind{

//     info: Info
//     results: [Character]
      
// }


export type EpisodeFind = {
    id: number,
  name:  string,
  air_date:  string,
  episode:  string,
  characters: string[],
  created: string
}

// export type EpisodesFind = {
//     info: Info
//     results: [Episode]
// }

export type LocationFind = {
    id: number,
    name:  string,
    type:  string,
    dimension:  string,
    residents: string[]
    created: string
  }
  
//   type LocationsFind {
//     info: Info
//     results: [Location]
//   }
  

export type InfoFind = {
    count: number,
    pages: number,
    next: number,
    prev: number
  }




// export type AuthorFind = {
//     _id: ObjectId,
//     email: string,
//     password: string,
//     token: string,
//     recetas: string[]
// }

// export type RecipieFind = {
//     _id: ObjectId,
//     name: string,
//     description: string,
//     ingredientes: string[],
//     autor: string,
// }

// export type IngredientFind = {
//     _id: ObjectId,
//     name: string,
//     recetas: string[]
//     autor: string
// }

