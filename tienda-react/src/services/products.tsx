import { Category } from "../models/producto";

const BASE_URL = "https://api.escuelajs.co/api/v1/"

export function getProductos(){
    return fetch(BASE_URL+"products").then((response) => response.json());
}
export function getAllCategorias(){
    return fetch(BASE_URL+'categories').then(res=>res.json()).then(data=>data.filter((categoria:Category)=>categoria.name!=='Anna'&&categoria.name!=='string'))
}
export function getAllProductosByCategoria(categoria:Category){
    return fetch(BASE_URL+'products/?categoryId='+categoria.id).then(res=>res.json())
}
