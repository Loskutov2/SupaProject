import { Link } from "react-router-dom"
import s from "./Main.css"

export const Main = ({ notifications }) => {
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
                      <Link to={`notifications/${notification.id}`}>View</Link>
                      <Link to={`notifications/edit/${notification.id}`}>Edit</Link>
                      <form action={`/notifications/delete/${notification.id}`} method="post">
                        <button type="submit">Delete</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="notifications/new">Create New Notification</Link>
        </div>
    )
}