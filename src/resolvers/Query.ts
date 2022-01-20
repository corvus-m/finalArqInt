// import { Collection, Db, MongoClient, ObjectId } from "mongodb";
// import { connectDB } from "../mongo";
// import { AuthorFind, IngredientFind, RecipieFind } from "../types";

import axios, { AxiosResponse } from 'axios';

import { EpisodeFind, CharacterFind, LocationFind, InfoFind, FilterCharacterType, CharactersFind } from "../types";

import http from 'http';


const apiUrl:string = "https://rickandmortyapi.com/api";




export const Query = {

  character: async (parent: any, {id}:{id:number}, context:any)  => {
    //let urlfin:string = apiUrl+"/character"+ id;
    const car:CharacterFind =  (await axios.get(apiUrl+"/character/"+ id)).data as CharacterFind ;

    console.log("HOLA");
    // console.log(car.name);
    // car.episode.forEach(async (e:string) => console.log(e) )
    return car;
  },

  characters: async(parent:any, args:any , context:any) => {
    
    const filtro:FilterCharacterType = args.filter as FilterCharacterType;

    console.log(filtro);
    let filtroQuery:string = "";
    let cont:number = 0;

    if(filtro.gender != null) {
      filtroQuery = "?gender=" +filtro.gender; 
      cont++;
    }

    if(filtro.name  != null) {
      if (!cont)  {filtroQuery = "?name=" +filtro.name;} 
      else filtroQuery += "&name="+filtro.name;
      cont++;
    }

    if(filtro.species  != null) {
      if (!cont)  {filtroQuery = "?species=" +filtro.species;} 
      else filtroQuery += "&species="+filtro.species;
      cont++;
    }

    if(filtro.status  != null){
      if (!cont)  {filtroQuery = "?status=" +filtro.status;} 
      else filtroQuery += "&status="+filtro.status;
      cont++;
    }

    if(filtro.type  != null){
      if (!cont)  {filtroQuery = "?type=" +filtro.type;} 
      else filtroQuery += "&type="+filtro.type;
      cont++;
    }


    //let urlfinal:string = apiUrl +""

    const datos:CharactersFind = (await axios.get(apiUrl+"/character/"+filtroQuery)).data
    // const informacion:InfoFind = datos.info;
    // const personajes:any =datos.results;
    // console.log(personajes);
    

return datos;

  }




}


  export const Character = { 
    
    episode:  async (parent:any, args: any, context:any) => {
      // console.log("EEEEE");
      // console.log(parent.name);

            const episodes: EpisodeFind[] =parent.episode.map(async (ep:string) =>{
              // console.log("ep");
              // console.log(ep);
              const episodio:EpisodeFind = (await axios.get(ep)).data  as EpisodeFind ;
              //console.log(episodio.name)
              return episodio;
          
            } );
            
            return episodes;
        },
        location:  async (parent:any, args: any, context:any) => {
          // console.log("EEEEE");
           console.log(parent.location);
    
                const loc: LocationFind = (await axios.get(parent.location.url)).data as LocationFind;
                return loc;

            },
        origin:  async (parent:any, args: any, context:any) => {
          // console.log("EEEEE");
           console.log(parent.origin);
    
                const loc: LocationFind = (await axios.get(parent.origin.url)).data as LocationFind;
                return loc;

            }
            


   }

   export const Episode = { 
    
    characters:  async (parent:any, args: any, context:any) => {


            const personajes: CharacterFind[] =parent.characters.map(async (car:string) =>{
              // console.log("ep");
              // console.log(ep);
              const personaje:CharacterFind = (await axios.get(car)).data  as CharacterFind ;
              //console.log(episodio.name)
              return personaje;
          
            } );
            
            return personajes;
        }
            


   }

   export const Location = { 
    
    residents:  async (parent:any, args: any, context:any) => {


            const personajes: CharacterFind[] =parent.residents.map(async (car:string) =>{
              // console.log("ep");
              // console.log(ep);
              const personaje:CharacterFind = (await axios.get(car)).data  as CharacterFind ;
              //console.log(episodio.name)
              return personaje;
          
            } );
            
            return personajes;
        }
            


   }

   
   export const Characters = { 
    
    info:  async (parent:any, args: any, context:any) => {


            const information: InfoFind =parent.info  ;
            console.log("aaaaa");
            console.log(information);
            return information;

            
        },

  //   results:   async (parent:any, args: any, context:any) => {
     
  //     console.log("BBBB");
  //     //console.log(parent.results);
      
  //     const personajes: CharacterFind[] =parent.results.map(async (car:string) =>{
  //       // console.log("ep");
  //       // console.log(ep);
  //       const personaje:CharacterFind = (await axios.get(car)).data  as CharacterFind ;
  //       console.log(personaje)
  //       return personaje;
    
  //     } );
      
  //     return personajes;
  // }

}


   
// // addRecipie: async (parent:any, {name, description, ingredientes}:{ name:string, description:string, ingredientes:string[], res:any},
// //     {token, collectionIng, collectionRec, res}:{token:string, collectionIng:Collection, collectionRec:Collection,  res:any}) => {

// export const Query = {
    
//     getRecipes: async (parent: any, args: {}, { collectionIng, collectionRec, res}:{ collectionIng:Collection, collectionRec:Collection,  res:any}) => {
        
//         const recetas =  collectionRec.find({}) ;
//         return recetas.toArray();
          
//     },

//     getRecipe: async (parent: any, {id_str}: {id_str:string}, 
//       {  collectionRec, res}:{  collectionRec:Collection,  res:any}) => {
 
//       const receta =  await collectionRec.findOne({_id: new ObjectId(id_str)}) ;
//       res.status(200);
//       return receta;
  
//   },

//   getUser:async (parent: any, {id_str}: {id_str:string}, 
//     {  collectionUsu, res}:{ collectionUsu:Collection,  res:any}) => {
      
     

//       const usuario :AuthorFind = await collectionUsu.findOne({_id: new ObjectId(id_str)}) as unknown as AuthorFind  ;
      
      
//       if(usuario == null){
//         res.status(404);
//       return usuario;
//       }
//       res.status(200);
//       return usuario;
  
//   },

//   getUsers:async (parent: any, args:any, 
//     {  collectionUsu, res}:{ collectionUsu:Collection,  res:any}) => {
      
     
//       const usuarios =  collectionUsu.find({}) ;
//       return usuarios.toArray();

//   }



// }




















// //enlaces de tipo

// export const Recipe = { 
//   author: async(parent:any, args: any, {collectionUsu}:{collectionUsu:Collection}) =>{
//     const elAutor:AuthorFind = await  collectionUsu.findOne({email: parent!.autor}) as unknown as AuthorFind;
//     return elAutor
//   },
//   ingredients:  async (parent:any, args: any, {collectionIng}:{collectionIng:Collection}) => {
//           const Ingredientes: IngredientFind[] =parent!.ingredientes.map(async (ing:string) =>{
//             const elIngrediente:IngredientFind=  await collectionIng.findOne({ name: ing }) as unknown as IngredientFind ;
//             return elIngrediente
//           } )
          
//           return Ingredientes;
//       }


// }


//   export const Ingredient = { 
//     author: async(parent:any, args: any, {collectionUsu}:{collectionUsu:Collection}) =>{
//       const elAutor:AuthorFind = await  collectionUsu.findOne( {email: parent!.autor}) as unknown as AuthorFind;
      
//       return elAutor
//     },

//     recipes:  async (parent:any, args: any, {collectionRec}:{collectionRec:Collection}) => {
   
//             const Recetas: RecipieFind[] =parent!.recetas.map(async (rec:string) =>{
//               const laReceta:RecipieFind = await collectionRec.findOne({ name: rec }) as unknown as RecipieFind ;
//               return laReceta
//             } )
            
//             return Recetas;
//         }


//   }


//   export const User = { 
    
//     recipes:  async (parent:any, args: any, {collectionRec}:{collectionRec:Collection}) => {
   
//             const Recetas: RecipieFind[] =parent!.recetas.map(async (rec:string) =>{
//               const laReceta:RecipieFind = await collectionRec.findOne({ name: rec }) as unknown as RecipieFind ;
//               return laReceta
//             } )
            
//             return Recetas;
//         }


//   }


