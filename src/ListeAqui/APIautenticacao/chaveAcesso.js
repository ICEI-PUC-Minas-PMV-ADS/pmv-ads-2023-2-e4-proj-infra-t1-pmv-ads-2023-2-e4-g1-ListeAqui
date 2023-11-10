import axios from "axios";
import React from "react";


export function RecuperaToken (){
  const headers ={
      "content-type":"application/json"
  }
  
  const data={
      "nome":"listeaqui-001",
      "senha":"listeaquipuc123"
  }
   return axios.post('https://win8044.site4now.net:8172/MsDeploy.axd?site=listeaqui-001-site1/swagger/index.html',data,{headers}).
    then(response=>{
      return response.data.jwtToken
      }).
      catch(error=>{
       console.error(error)
       throw error
      })
   
}