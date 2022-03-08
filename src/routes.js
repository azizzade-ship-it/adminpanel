import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

export const routes = [
  {
    type: "title",
    name: "داشبورد",
  },
  {
    type: "route",
    name: "خانه",
    route: "/home",
    icon: <LineStyle className="sidebarIcon" />,
    component: <Home/>
  },
  {
    type: "title",
    name: "مدیریت کار بران",
  },
  {
    type: "route",
    name: " کاربران عادی",
    route: "/normal-users/",
    icon: <PermIdentity className="sidebarIcon" />,
    component:<User/>
  },
  {
    type: "route",
    name: "فروشندگان",
    route: "/sellers/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "تامین کنندگان خدمات ساختمانی",
    route: "/sakht-saz/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "تامین کنندگان فنی مهندسی",
    route: "/fanni-mohandesi/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "مشاورین املاک",
    route: "/realestates/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "امتیازات کاربران",
    route: "/userScore/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "درخواست طرح جایزه",
    route: "/userScoreRequest/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "title",
    name: "محصولات",
  },
  {
    type: "route",
    name: "محصولات",
    route: "/product-list/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "title",
    name: "مدیریت املاک",
  },
  {
    type: "route",
    name: "مدیریت املاک",
    route: "/estates/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "title",
    name: "تبلیغات",
  },

  {
    type: "route",
    name: "انواع تبلیغات",
    route: "/adv-type/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "لیست تبلیغات",
    route: "/advs/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },

  {
    type: "title",
    name: "امور مالی",
  },
  {
    type: "route",
    name: "تراکنش های مالی",
    route: "/transactions/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "تسویه حساب کاربر",
    route: "/tasvie/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "title",
    name: "مدیریت",
  },
  {
    type: "route",
    name: "استان و شهر",
    route: "/city-province/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "اطلاعات پایه ملک",
    route: "/estate/group",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "دسته بندی خدمات",
    route: "/category/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "گزارش مشکل اگهی",
    route: "/ad-problem-reports/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "کاربران پنل",
    route: "/adminUsers/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "title",
    name: "تنظیمات",
  },
  {
    type: "route",
    name: "استان و شهر",
    route: "/city-province/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "اطلاعات پایه ملک",
    route: "/estate/group",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "دسته بندی خدمات",
    route: "/category/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "گزارش مشکل اگهی",
    route: "/ad-problem-reports/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
  {
    type: "route",
    name: "کاربران پنل",
    route: "/adminUsers/",
    icon: <Storefront className="sidebarIcon" />,
    component:<ProductList/>
  },
];
