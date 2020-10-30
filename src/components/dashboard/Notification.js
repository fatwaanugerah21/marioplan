import moment from 'moment';
import React from 'react';

const Notification = (props) => {
   const notifications = props.notifications

   return (
      <div className="section">
         <div className="card z-depth-0">
            <div className="card-content">
               <span className="center notif-title">Notifications</span>
               <ul className="notification">
                  {notifications && notifications.map(notification => {
                     return (
                        <li key={notification.id} className="notification-list">
                           <span className="pink-text"> {notification.content} </span>
                           <span >{notification.user}</span>
                           <div className="grey-text z-depth-0">{moment(notification.time.toDate()).calendar()}</div>
                        </li>
                     )
                  })}
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Notification