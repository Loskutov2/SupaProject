import { NotiForm } from "components/NotiForm/NotiForm"

const NotiFormPage = ({ notifications }) => {
    return(
        <>
            <NotiForm notifications={notifications}/>
        </>
    )
}
export default NotiFormPage