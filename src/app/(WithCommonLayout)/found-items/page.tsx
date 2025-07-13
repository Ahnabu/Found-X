/* eslint-disable prettier/prettier */
import React from 'react'

import axiosInstance from '@/src/lib/AxiosInstance'



async function FoundItems() {

    const { data } = await axiosInstance.get('/found-items')
    return (
        <div>FoundItems</div>
    )
}

export default FoundItems