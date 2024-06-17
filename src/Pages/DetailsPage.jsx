import { Details } from "components/Details/Details"
//TODO:'notifications' is missing in props validation
const DetailsPage = ({ notifications }) => {
    return(
      //TODO: Redundant React fragments should be removed(must be <Details notifications={notifications}/> )
        <>
            <Details notifications={notifications}/>
        </>
    )
}
export default DetailsPage
