import React from 'react'
import Notification from './Notification'

function Profile({forProf}) {
    return (
        <div>
            
            <Notification 
            forNotif = {forProf}
            />

        </div>
    )
}

export default Profile
