import { NotiForm } from "components/NotiForm/NotiForm"
//TODO: 'notifications' is missing in props validation
const NotiFormPage = ({ notifications }) => {
    return(
      //TODO: A fragment with only one child is redundant.(must be <NotiForm notifications={notifications}/>)
        <>
            <NotiForm notifications={notifications}/>
        </>
    )
}
export default NotiFormPage
