/* eslint-disable prettier/prettier */
import { ReactNode } from 'react'

import { Navbar } from '@/src/components/UI/navbar'


const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
            </main>
        </div>
    )
}

export default layout