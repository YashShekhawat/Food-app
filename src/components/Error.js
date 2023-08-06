import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const { status, statusText } = err;

    return (
        <div>
            <h1>Opps!! Something Went wrong</h1>
            <h2>{status + " : " + statusText}</h2>
        </div>
    )
}

export default Error;