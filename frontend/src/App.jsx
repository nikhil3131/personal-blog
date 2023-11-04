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
        // everything will be settled in middle once screen size becomes greater than 1920px
        <div className="mx-auto max-w-[1920px] bg-[#F9FCFF]">
            <RouterProvider router={router} />
        </div>
    );
}
