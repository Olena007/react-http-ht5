import React, { useEffect, useState } from 'react';
import { StatusCode } from "react-http-status-code";
import { SingleComponent } from './SingleComponent';
import Card from "../components/CardComponent";
import Data from '../Models/Data.model';
import Support from '../Models/Support.model';


interface IListResource {
    data: Data ,
    support: Support
} 

async function get() : Promise<IListResource> {
    const response = await fetch('https://reqres.in/api/unknown/23');
    console.log(response);
    return await response.json();
} 

export function NotFound() {
    const [creatSingle, setCreateSingle] = React.useState<IListResource[]>([]);

    useEffect(() => {
        async function init(){
            const resultGetSingle = await get();
            setCreateSingle([resultGetSingle]);
        }

        init();
    },[]);

    return ( <>
    <SingleComponent></SingleComponent>
        {
            <StatusCode code={400}>
            <div>
                <p>Sorry, page was not found</p>
            </div>
        </StatusCode>
        }
        </>)
}