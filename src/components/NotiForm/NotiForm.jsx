import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const NotiForm = () => {
    // Тут в общем как и в деталях должен с помощью useParams() доставатся id и с помощью него должен проводиться поиск notification с таким id
    // И еще где-то здесь должна быть проверка если id = 'new' и от этого что-то зависит
    // Я это как то так представляю
    const [notification, changeNoti] = useState({id: 123, storeId: 123, zoneId: 123})
    const [formState, setFormState] = useState({
      storeId: notification.storeId || '',
      zoneId: notification.zoneId || ''
    });

    useEffect(()=>{document.title = 'Notification Form'},[])

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
  
    return (
      <div>
        <h1>Notification Form</h1>
        <form>
          <p>ID: <span>{notification.id}</span></p>
          <p>Store ID: <input type="text" name="storeId" value={formState.storeId} onChange={handleChange} /></p>
          <p>Zone ID: <input type="text" name="zoneId" value={formState.zoneId} onChange={handleChange} /></p>
          <button type="submit">Save</button>
        </form>
        <Link to="/">Back to List</Link>
      </div>
    );
  };