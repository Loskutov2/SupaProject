import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Details = () => {
  //TODO: Remove this useless assignment to variable "changeNoti".
  //TODO: The return value of "useState" should be destructured and named symmetrically
    const [notification, changeNoti] = useState({id: 123, storeId: 123, zoneId: 123})
    useEffect(()=>{document.title = 'Notification Detail'},[])
  return(
        <div>
            <h1>Notification Detail</h1>
            <p>ID: <span>{notification.id}</span></p>
            <p>Store ID: <span>{notification.storeId}</span></p>
            <p>Zone ID: <span>{notification.zoneId}</span></p>
            <Link to={`/edit/${notification.id}`}>Edit</Link>
            <Link to="/">Back to List</Link>
        </div>
    )
}
