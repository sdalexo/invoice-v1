/*const apifetch = (url:string,method:string,body={},shouldAuthorize=true)=>{
    
    let authorization = {};
    if(shouldAuthorize){
        const token = localStorage.getItem('token');
        if(!token){
            
        }else{
             authorization = {
                'authorize':localStorage.getItem('token')
            };
        }
    }
    return fetch(url,{
        method:method,
        headers:{
            ...authorization,
            'content-type':'application/json',
            'accept':'application/json',
        },
        body: JSON.stringify(body)
    })
} */

export default class apiFetch {
    url:string = 'http://127.0.0.1:8000/api/v1/';
    method:string = 'GET';
    headers:any = {'content-type':'application/json','accept':'application/json'};
    body:any =null;
    constructor(url:string){
       this.url = this.url+url;
    }
    Method(method:string){
        this.method = method;
        return this;
    }
    Header(hearder:{}){
        this.headers = {...this.headers,...hearder}
        return this;
    }

    Body(body:{}){
        this.body = body;
        return this;
    }
    Authorize(){
        const token = localStorage.getItem('token');
       if(token){
            this.headers = {
                ...this.headers,
                'Authorization':token
            }
       }else{
        throw new Error('No hay token')
       }
       return this;
    }
     Send(){
        const options = this.body? {body:JSON.stringify(this.body),method:this.method,headers:this.headers}: {method:this.method,headers:this.headers};
        return fetch(this.url,options)
    }
    
}