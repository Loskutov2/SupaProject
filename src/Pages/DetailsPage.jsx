import { Details } from "components/Details/Details"

const DetailsPage = ({ notifications }) => {
    return(
        <>
            <Details notifications={notifications}/>
        </>
    )
}
export default DetailsPage