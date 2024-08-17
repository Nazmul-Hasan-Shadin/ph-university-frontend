import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { string } from "zod";

export type TError={
    data:{
        message:string,
        stack:string,
        success:boolean
    },
    status:number
}

export type TMeta={
    limit:number;
    page:number,
    total:number,
    totalPage:number
}


export type TResponse<T>={
    data?:T ;
    error?:TError,
    meta?:TMeta,
    success:boolean,
    message:string
}
 export type TQueryParma={
    name:string,
    value : boolean | React.Key
 }

export type TResponsRedux<T>=TResponse<T> & BaseQueryApi