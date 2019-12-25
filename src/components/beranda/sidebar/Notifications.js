import React from 'react'
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="card border-0 pt-3 pb-3 sticky-top">
      <div className="card-body">
        <h4>Notifications</h4>
        <ul className="list-group">
          { notifications && notifications.map(item => {
            return (
              <li className="list-group-item border-top-0 border-left-0 border-right-0 p-2" key={item.id}>
                <span className="text-warning font-weight-bolder">{item.user} </span> 
                <span className="text-dark">{item.content}</span>
                <div>
                  <small className="text-muted font-italic">{moment(item.time.toDate().toString()).fromNow()}</small>
                </div>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default Notifications