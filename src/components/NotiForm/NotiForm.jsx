import { useContext, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { MyContext } from "index"


export const NotiForm = () => {
    const { id } = useParams()
    const notifications = useContext(MyContext)
    const [notification] = useState(notifications.find(obj=>obj.id===id))
    const [formState, setFormState] = useState(notification?{
      storeId: notification.storeId,
      zoneId: notification.zoneId
    }:null);

    document.title = 'Notification Form'

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormState(prevState => ({
        ...prevState,
        [name]: value,
      }));}
  
    return(formState?<div>
        <h1>Notification Form</h1>
        <form>
          <p>ID: <span>{notification.id}</span></p>
          <p>Store ID: <input type="text" name="storeId" value={formState.storeId} onChange={handleChange} /></p>
          <p>Zone ID: <input type="text" name="zoneId" value={formState.zoneId} onChange={handleChange} /></p>
          <button type="submit">Save</button>
        </form>
        <Link to="/">Back to List</Link>
      </div>:<Navigate to="/notFound"/>
    );
  };