const NotFound = ({reason}) => {
    return(
        <div>
            <h1>Error 404</h1>
            <p>{reason==='id'?'Notification is not found':'Page is not found'}</p>
        </div>
    )
}
export default NotFound