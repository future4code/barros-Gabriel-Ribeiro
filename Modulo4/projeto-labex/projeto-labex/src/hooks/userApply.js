import React,{useEffect, useState} from 'react'
import axios from 'axios'

export const userApply=(url,body)=>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [erro, setErro] = useState(undefined)
    
    useEffect(() => {
        setIsLoading(true);
        axios.post(url,body).then(response =>{
          setIsLoading(false)
          setData(response.data)
          console.log(data)
        }).catch(error =>{
          setIsLoading(false)
          setErro(error)
        })
      }, [])

    return [data,isLoading,erro];
}

export default userApply;