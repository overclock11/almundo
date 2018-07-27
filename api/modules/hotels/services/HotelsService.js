"use strict";
const json = require('../resources/data');
class HotelsService {
    constructor(){

    }

    /**
     * Retorna todos los hoteles
     * @returns {Promise<any>}
     */
    getAll(){
        return new Promise((resolve,reject)=>{
            resolve(json);
        });
    }

    /**
     * Funcion que recibe el nombre del usuario y lo busca en el json para retornar el hotel
     * @param {String} name
     */
    searchByName(name){
        return new Promise((resolve,reject)=>{
            try{
                let result = json.filter((hotel)=>{
                    return hotel.name === name;
                });
                resolve(result);
            } catch (e) {
                console.log(e);
                reject(e);
            }
        })
    }

    /**
     * Busca un hotel segun su numero de estrellas
     * @param {string} stars
     * @returns {Promise<any>}
     */
    searchByStars(stars){
        return new Promise((resolve,reject)=>{
            try{
                let result = json.filter((hotel)=>{
                    return hotel.stars === parseInt(stars);
                });
                resolve(result);
            } catch (e) {
                console.log(e);
                reject(e);
            }
        })
    }
}
module.exports = HotelsService;