import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, Layout } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
        ],
    },
]);

export default function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
