/**
 * Created by dongjie on 20/4/18.
 */


export let API = '';

if(process.env.NODE_ENV=='development'){
    API = 'http://testapi.eosio.sg';
}else if(process.env.NODE_ENV=='test'){
    API = 'http://testapi.eosio.sg';
}else if(process.env.NODE_ENV=='production'){
    API = 'http://api.eosio.sg';
}