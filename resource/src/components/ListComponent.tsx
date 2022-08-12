import React, { useEffect, useState } from 'react';
import Card from "../components/CardComponent";
import Data from '../Models/Data.model';
import Support from '../Models/Support.model';

interface IListResource {
    page: number,
    per_page: number,
    total: number,
    total_pages: number ,
    data: Data ,
    support: Support
} 

async function get() : Promise<IListResource> {
    const response = await fetch('https://reqres.in/api/unknown');
    console.log(response);
    return await response.json();
  } 

export function ListComponent() {
    const [creatList, setCreateList] = React.useState<IListResource[]>([]);

    useEffect(() => {
        async function init(){
            const resultGetList = await get();
            setCreateList([resultGetList]);
        }

        init();
    },[]);

    return ( <>
    {creatList.map(item => (
        <Card key={item.data.id} title={'Get list <resource>'} description={ 'page: ' + item.page + ' per_page:  ' + item.per_page + ' total: ' + item.total + ' total_pages:  ' + item.total_pages + ' data: ' + item.data.id + ' ' + item.data.name + ' ' + item.data.year + ' ' + item.data.color + ' ' + item.data.pantone_value + ' support: ' + item.support.text + ' ' + item.support.url}/>

    ))}
    </>)
  }