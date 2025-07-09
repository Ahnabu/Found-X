/* eslint-disable prettier/prettier */
import { ReactNode } from 'react'

const layout = ({ children, recentPosts }: { children: ReactNode, recentPosts: ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">

            <main className="container mx-auto max-w-7xl md:pt-16 pt-2 md:px-6 px-2 flex-grow">
                {children}
                {recentPosts}
            </main>
        </div>
    )
}

export default layout