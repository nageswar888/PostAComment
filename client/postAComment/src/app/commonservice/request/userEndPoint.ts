/*
import { environment } from './../../../environments/environment';
export const posts = 'posts'
export const UserEndPoint = (type:string,params:any)=>{
  switch(type){
    case posts:
      let ActionPro = environment.API_ROOT +'/posts';
      if( params.hasOwnProperty('id')){
        ActionPro +='/'+ params.id;
      }
      //alert(params + "<---->" + type);
      else{
        return environment.API_ROOT + '/project/'+params;
      }
      return ActionPro;
  }
}
*/


import { environment } from "../../../environments/environment";
export const POST = 'POST';
export const COMMENT = 'COMMENT';
export const LIKE = 'LIKE';

export const UserEndPoint = (type: string) => {
  console.log("End")
  const endpoints = {
    [POST]: 'post',
    [COMMENT]: 'comment',
    [LIKE]: 'like'
  };
  console.log("---->",environment.API_ROOT + endpoints[type])
  return environment.API_ROOT + endpoints[type];
};
