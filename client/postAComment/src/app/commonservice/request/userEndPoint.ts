import { environment } from './../../../environments/environment';
export const POST = 'POST';
export const COMMENT = 'COMMENT';
export const LIKE = 'LIKE';
export const COMMENTPOST = 'COMMENTPOST'
export const UserEndPoint = (type:string,params:any)=> {
  console.log("------------------------------------", params)
  switch (type) {
    /*case POST:
      return environment.API_ROOT + 'post/' ;*/
    case POST:
      let ActionPro = environment.API_ROOT + 'post';
      console.log("------------", ActionPro)
      if (typeof params != "undefined") {
        ActionPro += '/' + params;
        console.log("ActionPro")
      } else {
        ActionPro = environment.API_ROOT + 'post';
      }
      return ActionPro;

    case COMMENT:
      return environment.API_ROOT + 'comment/' + params;

    case LIKE:
      return environment.API_ROOT + 'like/' + params;

    case COMMENTPOST:
      return environment.API_ROOT + 'comment/'
  }
}


/*import { environment } from "../../../environments/environment";
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
  console.log("UserEndPoints---->",environment.API_ROOT + endpoints[type])
  return environment.API_ROOT + endpoints[type];
};*/

