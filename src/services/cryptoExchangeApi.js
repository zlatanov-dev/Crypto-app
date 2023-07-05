
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;
const EXCHANGE_API_HOST = process.env.REACT_APP_EXCHANGE_API_HOST;

const cryptoExchangeApiHeaders = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': EXCHANGE_API_HOST
}

const baseUrl = `https://${EXCHANGE_API_HOST}`;

const createRequest = (url) => ({ url, headers: cryptoExchangeApiHeaders });

export const cryptoExchangeApi = createApi({
    reducerPath: 'cryptoExchangeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
        }),
    })
});

export const {
    useGetExchangesQuery,
} = cryptoExchangeApi;
