import React from 'react'

export const Chat = () => {
    return (
        <>
    {/*sala Chat*/}
                    <div className="col-md-9">
                        <div className="chat">
                            <div className="chat-header">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>
                                <span>Amigo 1</span>
                            </div>
                            <div className="chat-messages">

                                <div className="message outgoing">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>mi nombre
                                    <div className="message-content">
                                        
                                        <p>Hola, ¿cómo estás?</p>
                                        <span className="message-time">10:30 AM</span>
                                    </div>
                                </div>
                                <div className="message incoming">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"></img>nombre amigo
                                    <div className="message-content">
                                        <p>¡Hola! Estoy bien, ¿y tú?</p>
                                        <span className="message-time">10:35 AM</span>
                                    </div>
                                </div>

                            </div>
                            <div className="chat-input">

                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Escribe tu mensaje"></input>
                                    <button className="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>

           
        </>
    )
}
