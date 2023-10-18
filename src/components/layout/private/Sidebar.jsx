import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useForm } from '../../../hooks/useForm'
import { Link } from 'react-router-dom'
import { Global } from '../../../helpers/Global'

export const Sidebar = () => {


    const { auth } = useAuth()
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [more, setMore] = useState(true)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        listUser(1)
    }, [])

    const listUser = async (nextPage = 1) => {
        setLoading(true)
        //Peticion para obtener usuarios

        const request = await fetch(Global.url + "user/list/" + nextPage, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }

        })

        const data = await request.json()
        console.log(data.users)
        setUsers(data.users)



    }





    return (
        <>
            <div className="col-md-3">
                {users.map(user => (
                    <div className="chat-container" key={user._id}>
                        <div className="friends-list">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>
                                        <span>{user.name}</span>
                                        <p></p>{user.online ? <span className="ml-auto online-indicator"></span> : <span className="ml-auto offline-indicator"></span> }
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
        </>

    )
}
