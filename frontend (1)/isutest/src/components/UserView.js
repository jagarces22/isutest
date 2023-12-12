import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService'


const UserList= () => {


    const [userList, setUserList] = useState([]);

    

    useEffect(() => {
        UserService.getUsers()
            .then((response) => {
                
                setUserList(response.data);

            })
            .catch((e) => {
                console.log(e)
            })

    },[]);


    const GetUsers = (_userList) => {
        console.log(_userList._userList);
        if (_userList._userList ) {
            console.log('hit');
            return (
                _userList._userList.map((item) => <tr id={ item.id}> <td>{item.id}</td> <td>{ item.name}</td> </tr>)
            );
        }
        
        return (
            
            <>1</>       
        );

    }

    

    return (
        <>

            <h1>User Dashboard</h1>
            <div id="user-list">
                <table>
                    <thead>
                        <tr><th>Id</th><th>Name</th></tr>
                    </thead>
                    <tbody>
                        <GetUsers _userList={userList}></GetUsers>
                    </tbody>
                </table>
               
            </div>
            <div>
                <input ></input>
            </div>

        </>
    
    );

}

export default UserList;

