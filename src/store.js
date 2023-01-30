import { writable } from "svelte/store";

export const pageNavStore = writable([{}]);
export const navbarStore = writable([
    {id:1, name:'Store', route:'/store', enabled:false, icon:'fa-solid fa-tag', class:'navbar__store'},
    {id:2, name:'Library', route:'/library', enabled:false, icon:'fa-solid fa-folder-open', class:'navbar__library'},
    {id:3, name:'Social', route:'/social', enabled:false, icon:'fa-solid fa-users', class:'navbar__social'},
    {id:4, name:'Log Out', route:'/', icon:'logoutIcon fa-sharp fa-solid fa-right-from-bracket', class:'navbar__logout'},

]);

export const currentPageStore = writable('store');

//export default pageNavStore;