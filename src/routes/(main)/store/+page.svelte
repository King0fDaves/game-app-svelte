<div class="main">
    <div class="mainGridContainer">
        <section id="Trending" class="trendingSection"></section>
        <section class="bannerSection1"></section> 
        <section id="Popular" class="popularSection"></section>
        <section class="bannerSection2"></section> 
        <section id="Categories" class="categoriesSection"></section>
        <section class="bannerSection3"></section> 
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
        grid-template-columns: repeat(17, 5vw);
        grid-template-rows: repeat(30, 5vw);
        height:88vh;
        width:84vw;
  
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .trendingSection{
        grid-column: 2/16;
        grid-row: 2/8;
        background-color: aqua;
    }

    .popularSection{
        grid-column: 2/16;
        grid-row: 12/18;
        background-color: red;
    }
    
    .categoriesSection{
        grid-column: 2/16;
        grid-row: 22/27;
        background-color: green;
    }

    .bannerSection1{
        grid-column: 2/16;
        grid-row: 9/11;
        background-color: aqua;
    }

    .bannerSection2{
        grid-column: 2/16;
        grid-row: 19/21;
        background-color: red;
    }
    
    .bannerSection3{
        grid-column: 2/16;
        grid-row: 28/30;
        background-color: green;
    }
</style>

<script>
    import {pageNavStore, currentPageStore} from "/src/store";

    let page = 'Store';
    
    let pageNavItems =[
        {name:"Popular", route:"Popular"},
        {name:"Categories", route:"Categories"},
        {name:"Trending", route:"Trending"},
        ];

    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })

    currentPageStore.update((currentData) =>{
            return currentData = page;
    })
</script>