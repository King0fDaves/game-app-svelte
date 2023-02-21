import { writable } from "svelte/store";

export const pageNavStore = writable([{}]);
export const navbarStore = writable([
    {id:1, name:'Store', route:'/store', enabled:false, icon:'fa-solid fa-tag'},
    {id:2, name:'Library', route:'/library', enabled:false, icon:'fa-solid fa-folder-open'},
    {id:3, name:'Social', route:'/social', enabled:false, icon:'fa-solid fa-users'},
    {id:4, name:'Log Out', route:'/', icon:'logoutIcon fa-sharp fa-solid fa-right-from-bracket'},

]);

export const currentSectionStore = writable('Trending')

export const currentPageStore = writable('store');

//export default pageNavStore;