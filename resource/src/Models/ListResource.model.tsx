import React from 'react';
import Data from './Data.model';
import Support from './Support.model';

interface IListResource {
    page: number,
    per_page: number,
    total: number,
    total_pages: number ,
    data: Data ,
    support: Support
}

export default IListResource;