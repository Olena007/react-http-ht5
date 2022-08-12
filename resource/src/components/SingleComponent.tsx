import React, { useEffect, useState } from 'react';
import Card from "../components/CardComponent";
import Data from '../Models/Data.model';
import Support from '../Models/Support.model';
import { ListComponent } from './ListComponent';

interface IListResource {
    data: Data ,
    support: Support
} 

async function get() : Promise<IListResource> {
    const response = await fetch('https://reqres.in/api/unknown/2');
    console.log(response);
    return await response.json();
} 

export function SingleComponent() {
    const [creatSingle, setCreateSingle] = React.useState<IListResource[]>([]);

    useEffect(() => {
        async function init(){
            const resultGetSingle = await get();
            setCreateSingle([resultGetSingle]);
        }

        init();
    },[]);

    return ( <>
    <ListComponent></ListComponent>
        {creatSingle.map(item => (
            <Card key={item.data.id} title={'Get single <resource>'} description={ ' data: ' + item.data.id + ' ' + item.data.name + ' ' + item.data.year + ' ' + item.data.color + ' ' + item.data.pantone_value + ' support: ' + item.support.text + ' ' + item.support.url}/>
    
        ))}
        </>)
}