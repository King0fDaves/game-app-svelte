<div class="mainGridContainer">
    <section id="Trending" class="trendingSection"></section>
    <section class="bannerSection"></section> 
    <section id="Popular" class="popularSection"></section>
    <section id="Categories" class="categoriesSection"></section>

</div>

<style lang="scss">
    .mainGridContainer{
        display: grid;
        padding: 0%;
        margin: 0%;
        grid-template-columns: repeat(17, 5vw);
        grid-template-rows: repeat(24, 5vw);
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

    .bannerSection{
        grid-column: 2/16;
        grid-row: 9/11;
        background-color: aqua;
    }

    .popularSection{
        grid-column: 2/16;
        grid-row: 12/18;
        background-color: aqua;
    }
    
    .categoriesSection{
        grid-column: 2/16;
        grid-row: 19/24;
        background-color: aqua;
    }
    
</style>

<script>
    import pageNavStore from "/src/store";

    let pageNavItems =[
        {name:"Popular", route:"Popular"},
        {name:"Categories", route:"Categories"},
        {name:"Trending", route:"Trending"},
        ];

    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })



</script>