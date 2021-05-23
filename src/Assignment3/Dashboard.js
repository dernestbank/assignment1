import React from 'react'
import Profile from './Profile'

function Dashboard({forDash}) {
    return (
        <div>
            
            <Profile
            forProf= {forDash}
            />
       {/* you boy {props.forDash}  */}


        </div>
    )
}

export default Dashboard
