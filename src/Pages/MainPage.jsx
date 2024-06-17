import { Main } from "components/Main/Main"
//TODO: 'notifications' is missing in props validation
const MainPage = ({ notifications }) => {
    return(
      //TODO: A fragment with only one child is redundant. (must be <Main />)
        <>
            <Main/>
        </>
    )
}
export default MainPage
