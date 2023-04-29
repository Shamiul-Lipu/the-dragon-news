import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
import NewsLayout from "../layout/NewsLayout";
import NewsDetails from "../pages/News/NewsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <NewsDetails />
            }
        ]
    }
]);

export default router;