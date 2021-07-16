import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText";
import DataBindingInputNumber from "@/views/DataBindingInputNumber";
import DataBindingTextarea from "@/views/DataBindingTextarea";
import DataBindingSelect from "@/views/DataBindingSelect";
import DataBindingCheckbox from "@/views/DataBindingCheckbox";
import DataBindingCheckbox2 from "@/views/DataBindingCheckbox2";
import DataBindingRadio from "@/views/DataBindingRadio";
import DataBindingAttribute from "@/views/DataBindingAttribute";
import DataBindingButton from "@/views/DataBindingButton";
import DataBindingClass from "@/views/DataBindingClass";
import DataBindingClass2 from "@/views/DataBindingClass2";
import DataBindingStyle from "@/views/DataBindingStyle";
import DataBindingList from "@/views/DataBindingList";
import RenderingVIf from "@/views/RenderingVIf";
import EventClick from "@/views/EventClick";
import EventChange from "@/views/EventChange";
import Computed from "@/views/Computed";
import Watch from "@/views/Watch";
import DataBindingList2 from "@/views/DataBindingList2";
import NestedComponent from "../components/NestedComponent";
import Login from "@/views/Login";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding,
  },
  {
    path: "/databindinghtml",
    name: "databindinghtml",
    component: DataBindingHtml,
  },
  {
    path: "/databindinginputtext",
    name: "databindinginputtext",
    component: DataBindingInputText,
  },
  {
    path: "/databindinginputnumber",
    name: "databindinginputnumber",
    component: DataBindingInputNumber,
  },
  {
    path: "/databindingtextarea",
    name: "databindingtextarea",
    component: DataBindingTextarea,
  },
  {
    path: "/databindingselect",
    name: "databindingselect",
    component: DataBindingSelect,
  },
  {
    path: "/databindingcheckbox",
    name: "databindingcheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/databindingcheckbox2",
    name: "databindingcheckbox2",
    component: DataBindingCheckbox2,
  },
  {
    path: "/databindingradio",
    name: "databindingradio",
    component: DataBindingRadio,
  },
  {
    path: "/databindingattribute",
    name: "databindingattribute",
    component: DataBindingAttribute,
  },
  {
    path: "/databindingbutton",
    name: "databindingbutton",
    component: DataBindingButton,
  },
  {
    path: "/databindingclass",
    name: "databindingclass",
    component: DataBindingClass,
  },
  {
    path: "/databindingclass2",
    name: "databindingclass2",
    component: DataBindingClass2,
  },
  {
    path: "/databindingstyle",
    name: "databindingstyle",
    component: DataBindingStyle,
  },
  {
    path: "/databindinglist",
    name: "databindinglist",
    component: DataBindingList,
  },
  {
    path: "/renderingvif",
    name: "renderingvif",
    component: RenderingVIf,
  },
  {
    path: "/eventclick",
    name: "eventclick",
    component: EventClick,
  },
  {
    path: "/eventchange",
    name: "eventchange",
    component: EventChange,
  },
  {
    path: "/computed",
    name: "computed",
    component: Computed,
  },
  {
    path: "/watch",
    name: "watch",
    component: Watch,
  },
  {
    path: "/databindinglist2",
    name: "databindinglist2",
    component: DataBindingList2,
  },
  {
    path: "/nestedcomponent",
    name: "nestedcomponent",
    component: NestedComponent,
  },
  {
    path: '/kakaologin',
    name: 'kakaologin',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
