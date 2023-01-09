import { createBrowserRouter } from "react-router-dom";
import Root from "../page/Root";
import ErroPage from "../page/ErroPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErroPage />,
    },
]);

export { router };
