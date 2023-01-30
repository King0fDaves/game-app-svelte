<div class="main">
    <div class="mainGridContainer">
        <section id="Friends" class="friendsSection"></section> 
        <section id="Groups" class="groupsSection"></section>
        <section id="Communities" class="communitiesSection"></section>
    </div>
</div>

<style lang="scss">
    @media screen and (max-width: 751px){
        .main{
            display:none
        }
    }
    .mainGridContainer{
        display: grid;
        padding: 0%;
        margin: 0%;
        grid-template-columns: repeat(40, 1fr);
        grid-template-rows: repeat(65, 1.875vw);
        height:80vh;
        width:100vw;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .friendsSection{
        grid-column: 2/34;
        grid-row: 2/22;
        background-color: aqua;
    }

    .groupsSection{
        grid-column: 2/34;
        grid-row: 24/44;
        background-color: red;
    }

    .communitiesSection{
        grid-column: 2/34;
        grid-row: 46/66;
        background-color: green;
    }
</style>

<script>
    import { pageNavStore, currentPageStore } from "/src/store";

    let page = 'Social';

    let pageNavItems = [
                        {name:"Friends", route:"Friends"},
                        {name:'Groups', route:'Groups'},
                        {name:"Communities", route:"Communities"}
                    ]
    ;
    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })

    currentPageStore.update((currentData) =>{
            return currentData = page;
    })

</script>