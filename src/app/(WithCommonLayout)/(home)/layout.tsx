/* eslint-disable prettier/prettier */
import { ReactNode } from 'react'

const layout = ({ children, recentPosts }: { children: ReactNode, recentPosts: ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">

            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
                {recentPosts}
            </main>
        </div>
    )
}

export default layout