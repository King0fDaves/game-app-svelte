import { writable } from "svelte/store";

const pageNavStore = writable([{name:"Hello", route:"Fudge"}]);


export default pageNavStore;