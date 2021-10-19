import React, { useState } from 'react'

const UserList = (props) => {
    console.log(props.deleteUser);
    const [regExp, setRegExp] = useState("");
    const onChange = (e) =>{
        console.log(e.target.value);
        setRegExp(e.target.value + /(.+)/); //wrong regExp
      }

    return (
        <>
            {props.search && <div class="row s12">
                <form class="col s12">
                    <div class="input-field col s12">
                    <i class="material-icons prefix">search</i>
                    <textarea id="icon_prefix2" class="materialize-textarea" placeholder="Search" onChange={onChange}></textarea>
                    </div>
                </form>
            </div>}

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Delete</th>
                </tr>
                </thead>

                <tbody>
                { props.children && props.children.map((user)=>
                        <tr>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td><i className="material-icons" 
                            onClick ={() => {props.deleteUser(user.id)}}
                        >delete</i></td>
                     </tr>
                )}
                
                
                </tbody>
            </table>
        </>
    )
}

export default UserList
