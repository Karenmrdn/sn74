import React from "react";
import styles from "./Users2.module.css";

let Users2 = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    name: 'Karen M.',
                    isFollowed: true,
                    avaUrl: 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png',
                    status: 'I am here to learn React',
                    location: {country: 'Ukraine', city: 'Nikolaev'}
                },
                {
                    id: 2,
                    name: 'Ihor A.',
                    isFollowed: false,
                    avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQh07UHC_MqB8O6BR0yGQONjaMCNkz-m9xA&usqp=CAU',
                    status: 'I understood that I want to be a front-end dev',
                    location: {country: 'Ukraine', city: 'Ternopil'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={styles.item}>
                    <div>
                        <b>{u.name}</b>
                    </div>
                    <div className={styles.avaArea}>
                        <img src={u.avaUrl}/>
                    </div>
                    <div>
                        {u.isFollowed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {u.location.city}, {u.location.country}
                    </div>
                    <br/>
                </div>)
            }
        </div>
    )
}


export default Users2;