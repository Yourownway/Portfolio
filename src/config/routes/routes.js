import { Accueil, Profil, Projects, Contact } from "../../components/index";

const routes = [
  {
    path: "/accueil",
    component: Accueil,
  },
  {
    path: "/profil",
    component: Profil,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

export default routes;
