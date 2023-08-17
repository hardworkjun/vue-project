import {  createPinia} from "pinia";
import { persiste } from "./plugins/persiste";

const pinia=createPinia()
pinia.use(persiste)
export default pinia