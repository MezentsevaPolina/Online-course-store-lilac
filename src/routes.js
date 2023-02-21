import AdminPanel from "./pages/AdminPanel";
import {
    ADMIN_ROUTE, CERTIFICATE_ROUTE, CONTACT_ROUTE,
    COURSE_ROUTE,
    FAVOURITES_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    USER_ROUTE
} from "./utils/consts";
import Favourites from "./pages/Favourites";
import Shop from "./pages/Shop";
import CoursePage from "./pages/CoursePage";
import Login from "./pages/Login";
import User from "./pages/User";
import ContactPage from "./pages/ContactPage";
import Registration from "./pages/Registration";
import CertificatesPage from "./pages/CertificatesPage";

export const authRoutes = [ //страницы только для авторизированного пользователя
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Favourites
    },
    {
        path: CONTACT_ROUTE,
        Component: ContactPage
    }
]
export const adminRoutes = [ //страницы только для авторизированного пользователя
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: COURSE_ROUTE + '/:id',
        Component: CoursePage
    },
    {
        path: USER_ROUTE,
        Component: User
    }
]

export const publicRoutes = [ //страницы для всех
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: COURSE_ROUTE + '/:id',
        Component: CoursePage
    },
    {
        path: CONTACT_ROUTE,
        Component: ContactPage
    },
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: CERTIFICATE_ROUTE,
        Component: CertificatesPage
    }
]