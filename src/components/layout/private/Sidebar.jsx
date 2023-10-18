import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useForm } from '../../../hooks/useForm'

import { Global } from '../../../helpers/Global'

export const Sidebar = async(e) => {
    e.preventDefault()

    const { auth } = useAuth()
    const { form, changed } = useForm()
    const [stored, setStored] = useState("not_stored")
    const [user, setUser] = useState({})


    const request = await fetch (Global.url +"user/list", {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }

    })
    const data = await request.json()
    console.log(data)
    setUser(data)

    return (
        <>
            <div className="col-md-3">
                <div className="chat-container">
                    <div className="friends-list">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>
                                    <span>Amigo 1</span>
                                    <span className="ml-auto online-indicator"></span>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>
                                    <span>Amigo 2</span>
                                    <span className="ml-auto offline-indicator"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
