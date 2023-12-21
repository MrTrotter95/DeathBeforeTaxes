import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export const BASE_URL = 'https://localhost:7119/api/';


const getData = async (params: string) => {
    const response = await axios.get(`${BASE_URL}${params}`)

    return response.data
}

export const useGetData = (item: string, params: string) => {
    return useQuery(
        {
            queryKey: [`${item}`],
            queryFn: () => getData(params)
        }
    )
}



const getFullResponse = async (params: string) => {
    const response = await axios.get(`${BASE_URL}${params}`)
    return response
}

export const useGetFullResponse = (item: string, params: string) => {
    return useQuery(
        {
            queryKey: [`${item}`],
            queryFn: () => getFullResponse(params)
        }
    )
}