import axios from "axios"


export const languageAction = (lang) => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1", {
            language: lang,
        }).then((response) =>{
            console.log("post başarılı:", response.data)
        }).catch((error) => {
            console.error("api hatası:" ,error)
        }) 
      }
    }
