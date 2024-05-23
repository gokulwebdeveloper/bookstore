import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const errorHandling = useRouteError();
    return (
        <div>
            <h2>Page Not Found</h2>
            {errorHandling.status} : {errorHandling.statusText}
        </div>
    );
}
export default Error;