import Router from "vue-router";
import Home from "@/views/Home/index";
import about from "@/views/about/index";
import Profile from "@/views/Profile/index";

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: about
    },
    {
      path: "/Profile",
      name: "Profile",
      component: Profile
    }
  ]
});
