"use client"

interface SearchBarProps {
    setUsers: (users: any[]) => void
}

import { SearchUsers } from "../../lib/searchUsers"
import { useState } from "react"

export const SearchBar = ( { setUsers }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState<string>("")

    return (
        <div className="flex items-center justify-between w-full  p-4  mt-2 sticky top-0 bg-gray-100  opacity-90">
            <input
                type="text"
                placeholder="Search Merchants"
                className="w-full px-4 py-2 text-black border border-black rounded-lg focus:outline-none "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="px-4 py-2" onClick = { async () => {
                const users =  await SearchUsers(searchTerm)
                setUsers(users)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
    )
}