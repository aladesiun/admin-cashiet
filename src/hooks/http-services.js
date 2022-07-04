import axios from "axios";
let newToken = localStorage.getItem('_ux')
let token;
if (newToken) {
    token=newToken;
}

export default {

    state: {
        endpoint:  process.env.REACT_APP_ENDPOINT,
        user: null,
        token: token
    },
    post(data){
        return  new Promise((resolve, reject) => {
            axios.post(this.state.endpoint + data.endpoint, data.details, {
                headers: { Authorization: 'Bearer ' + this.state.token,
                }
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                // context.dispatch('handleError', error);
                reject(error);
            })
        });
    },
    get(url){
        return new Promise((resolve, reject) => {
            axios.get(this.state.endpoint + url, {
                headers: {
                    Authorization: 'Bearer ' + this.state.token,
                },
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                reject(error);
            })
        });
    },
    delete(url){
        return new Promise((resolve, reject) => {
            axios.delete(this.state.endpoint + url, {
                headers: {
                    Authorization: 'Bearer ' + this.state.token,
                },
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                reject(error);
            })
        });
    },

    handleError(){
        
    }

}