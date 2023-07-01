
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CRYPTO_API_KEY } from '@env';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': CRYPTO_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: ( count ) => createRequest(`/coins?limit=${count}`),
        }),

    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;
