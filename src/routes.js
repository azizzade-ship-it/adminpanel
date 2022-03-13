import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { FcHome } from "@react-icons/all-files/fc/FcHome";
import { FcShop } from "@react-icons/all-files/fc/FcShop";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding";
import { FcEngineering } from "@react-icons/all-files/fc/FcEngineering";
import { TiPointOfInterest } from "@react-icons/all-files/ti/TiPointOfInterest";
import { FaAward } from "@react-icons/all-files/fa/FaAward";
import { FaToolbox } from "@react-icons/all-files/fa/FaToolbox";
import { RiBuilding2Fill } from "@react-icons/all-files/ri/RiBuilding2Fill";

import { FcAdvertising } from "@react-icons/all-files/fc/FcAdvertising";
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";
import { GiReceiveMoney } from "@react-icons/all-files/gi/GiReceiveMoney";
import { GiModernCity } from "@react-icons/all-files/gi/GiModernCity";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import{FaServicestack}from "@react-icons/all-files/fa/FaServicestack";
import{BiCommentError}from "@react-icons/all-files/bi/BiCommentError";
import{FiUsers}from "@react-icons/all-files/fi/FiUsers";
export const routes = [
  {
    type: "title",
    name: "داشبورد",
  },
  {
    type: "route",
    name: "خانه",
    route: "/home",
    icon: <FcHome className="sidebarIcon" />,
    component: <Home />,
  },
  {
    type: "title",
    name: "مدیریت کار بران",
  },
  {
    type: "route",
    name: " کاربران عادی",
    route: "/normal-users/",
    icon: <FaUserAlt className="sidebarIcon" />,
    component: <User />,
  },
  {
    type: "route",
    name: "فروشندگان",
    route: "/sellers/",
    icon: <FcShop className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "تامین کنندگان خدمات ساختمانی",
    route: "/sakht-saz/",
    icon: <BsBuilding className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "تامین کنندگان فنی مهندسی",
    route: "/fanni-mohandesi/",
    icon: <FcEngineering className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "مشاورین املاک",
    route: "/realestates/",
    icon: <FaUserTie className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "امتیازات کاربران",
    route: "/userScore/",
    icon: <TiPointOfInterest className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "درخواست طرح جایزه",
    route: "/userScoreRequest/",
    icon: <FaAward className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "title",
    name: "محصولات",
  },
  {
    type: "route",
    name: "محصولات",
    route: "/product-list/",
    icon: <FaToolbox className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "title",
    name: "مدیریت املاک",
  },
  {
    type: "route",
    name: "مدیریت املاک",
    route: "/estates/",
    icon: <RiBuilding2Fill className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "title",
    name: "تبلیغات",
  },

  {
    type: "route",
    name: "انواع تبلیغات",
    route: "/adv-type/",
    icon: <FcAdvertising className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "لیست تبلیغات",
    route: "/advs/",
    icon: <FcAdvertising className="sidebarIcon" />,
    component: <ProductList />,
  },

  {
    type: "title",
    name: "امور مالی",
  },
  {
    type: "route",
    name: "تراکنش های مالی",
    route: "/transactions/",
    icon: <FcMoneyTransfer className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "تسویه حساب کاربر",
    route: "/tasvie/",
    icon: <GiReceiveMoney className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "title",
    name: "مدیریت",
  },
  {
    type: "route",
    name: "استان و شهر",
    route: "/city-province/",
    icon: <GiModernCity className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "اطلاعات پایه ملک",
    route: "/estate/group",
    icon: <FaCity className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "دسته بندی خدمات",
    route: "/category/",
    icon: <FaServicestack className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "گزارش مشکل اگهی",
    route: "/ad-problem-reports/",
    icon: <BiCommentError className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "کاربران پنل",
    route: "/adminUsers/",
    icon: <FiUsers className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "title",
    name: "تنظیمات",
  },
  {
    type: "route",
    name: "استان و شهر",
    route: "/city-province/",
    icon: <FcHome className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "اطلاعات پایه ملک",
    route: "/estate/group",
    icon: <FaCity className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "دسته بندی خدمات",
    route: "/category/",
    icon: <FcHome className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "گزارش مشکل اگهی",
    route: "/ad-problem-reports/",
    icon: <FcHome className="sidebarIcon" />,
    component: <ProductList />,
  },
  {
    type: "route",
    name: "کاربران پنل",
    route: "/adminUsers/",
    icon: <FcHome className="sidebarIcon" />,
    component: <ProductList />,
  },
];
