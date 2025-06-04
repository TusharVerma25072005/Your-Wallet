"use client"

import { SearchBar } from "../../components/searchBar"
import { SearchItem } from "../../components/searchItem"
import { useState } from "react"
import { SendMoneyCard } from "../../components/sendCard"

interface SendMoneyCardProps {
    payId: string;
    name: string;
    email: string;
    phone: string;
    id : string;
}


export default function Transfer() {
    const [showCard, setShowCard] = useState(false);
    const [selectedUser, setSelectedUser] = useState<SendMoneyCardProps>({
        payId: "",
        name: "",
        email: "",
        phone: "",
        id: ""
    });
    const [Users, setUsers] = useState<SendMoneyCardProps[]>([]);
    return (
        <>
            <div className="flex flex-col justify-center items-center px-3">

                <SearchBar setUsers={setUsers} />

                {showCard && <SendMoneyCard
                    payId={selectedUser.payId}
                    name={selectedUser.name}
                    email={selectedUser.email}
                    phone={selectedUser.phone}
                    setShowCard={setShowCard}
                    id={selectedUser.id}
                />}
                {!showCard && <div className="w-full">

                    {Users.map((user, index) => (
                        <SearchItem
                            onClick={() => {
                                setShowCard(true);
                                setSelectedUser(user);
                            }}
                            key={index}
                            payId={user.payId}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                        />
                    ))}
                </div>

                }

            </div>
        </>
    )
}
