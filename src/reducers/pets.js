import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const schoolApi = createApi({
    reducerPath: 'schoolApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080'}),
    endpoints: (builder) => ({
        getPetByOwner: builder.query({
            query: (name) => `/api/v1/pets/owner/${owner}`,
        }),
        getPets : builder.query({
            query:()=> '/api/v1/pets'
        }),
        getHelloWorld: builder.query({
            query:()=> '/api'
        }),
        getHomepage: builder.query({
            query:()=> '/'

        }),
        getPetByName: builder.query({
            query: (name)=> '/api/v1/pets/$name'
        }),
    }),
})

export const {useGetPetsQuery, useGetHomepageQuery, useGetPetByOwnerQuery, useGetPetByNameQuery, useGetHelloWorldQuery} = schoolApi