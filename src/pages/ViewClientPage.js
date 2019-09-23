import React, {useState} from 'react';


export default function ViewClientPage(){

    const [user, setUser] = useState(0);
    return(
        
        <div className = "container">
            <form>
            <label>Codigo</label>
            <input readOnly value = {user} />
             <label>Nombre</label>
             <input readOnly value = {user} />
             <label>Balance</label>
        </form>
        </div>
        
    )
}