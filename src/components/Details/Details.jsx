import { useContext, useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { MyContext } from "index"

export const Details = () => {
    const { id } = useParams()
    const notifications = useContext(MyContext)
    const [notification] = useState(notifications.find(obj=>obj.id===id))
    useEffect(()=>{document.title = 'Notification Detail'},[])
  return(
        notification?<div>
            <h1>Notification Detail</h1>
            <p>ID: <span>{notification.id}</span></p>
            <p>Store ID: <span>{notification.storeId}</span></p>
            <p>Zone ID: <span>{notification.zoneId}</span></p>
            <Link to={`/edit/${notification.id}`}>Edit</Link>
            <Link to="/">Back to List</Link>
        </div>:<Navigate to='/notFound'/>
    )
}
