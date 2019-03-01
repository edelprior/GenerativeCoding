import {MDCList} from "@material/list";
import {MDCDrawer} from "@material/drawer";

const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
