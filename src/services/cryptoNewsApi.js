import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_CRYPTO_API_KEY;
const NEWS_API_HOST = process.env.REACT_APP_NEWS_HOST;


const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': NEWS_API_HOST
  }

  const baseUrl = `https://${NEWS_API_HOST}`;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ( { newsCategory, count } ) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
