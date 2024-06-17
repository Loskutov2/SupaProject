import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import notifications from "../../testSource.json"
import { nanoid } from "nanoid";


export const NotiForm = () => {
    const { id } = useParams()
    const [notification, changeNoti] = useState(id==='new'?{id: nanoid(), storeId: '', zoneId: ''}:notifications.find(obj=>obj.id===id))
    const [formState, setFormState] = useState(notification?{
      storeId: notification.storeId,
      zoneId: notification.zoneId
    }:null);

    useEffect(()=>{document.title = 'Notification Form'},[])

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
  
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