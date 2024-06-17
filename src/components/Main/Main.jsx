import { Link } from "react-router-dom"
import s from "./Main.css"
import { useEffect, useState } from "react"
import notifications from "../../testSource.json"

export const Main = () => {
  useEffect(()=>{document.title = 'Notification Settings'},[])
    return(
        <div>
            <h1>Notification Settings</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Store ID</th>
                  <th>Zone ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notification) => (
                  <tr key={notification.id}>
                    <td>{notification.id}</td>
                    <td>{notification.storeId}</td>
                    <td>{notification.zoneId}</td>
                    <td>
                      <Link to={`${notification.id}`}>View</Link>
                      <Link to={`edit/${notification.id}`}>Edit</Link>
                      <form action={`delete/${notification.id}`} method="post">
                        <button type="submit">Delete</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="edit/new">Create New Notification</Link>
        </div>
    )
}