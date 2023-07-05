
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_CRYPTO_API_KEY;
const CRYPTO_API_HOST = process.env.REACT_APP_CRYPTO_API_HOST;

const cryptoApiHeaders = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': CRYPTO_API_HOST
}

const baseUrl = `https://${CRYPTO_API_HOST}`;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: ( count ) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: ( coinId ) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),
        
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
