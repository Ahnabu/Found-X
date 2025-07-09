/* eslint-disable prettier/prettier */
import { Input } from '@heroui/input'

import { SearchIcon } from '../../icons'

const Landing = () => {
    return (
        <div
            className=" max-h-screen min-h-[50%]
   md:h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center ">
            <div className='md:pt-32 pt-6 max-w-xl flex-1 mx-auto'>
                <form className='flex-1'>
                    <Input
                        aria-label='Search'
                        classNames={{
                            inputWrapper: "bg-default-100",
                            input: 'text-sm'
                        }}
                        labelPlacement='outside'
                        placeholder='Search...'
                        size='lg'
                        startContent={
                            <SearchIcon
                                className='pointer-events-none flex-shrink-0 text-default-500'
                            />
                        }
                        type='text'
                    />
                </form>
            </div>
        </div>
    )
}

export default Landing