<div class="main">
    <div class="navHeader">
        <div class="logo">&#x2B22;</div>
        <h1 class="title">No Life</h1>
        
    </div>

    <ul class="pageNavBar">
        {#each items as item}
            <li class="pageNavBar__item"><a on:click={scrollIntoView} class="pageNavBar__link" href='#{item.route}'>{item.name}</a></li>
        {/each}
        <i class="fa-solid fa-bars"></i>
    </ul>

    
</div>

<script>

    export let items = [];    

    function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
        element.scrollIntoView()
    };

</script>

<style lang="scss">
    @media screen and (max-width: 750px){
        .main{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .pageNavBar{

            display: flex;
            grid-column: 2/3;
            justify-content: flex-end;
        }

        i{
            margin-right: 6vw;
            font-size: 1.65rem;
            margin-top: -.4vh;
                
        }
        .pageNavBar__link{
            display: none;
            grid-column: 1/2;
        }

        .navHeader{
            grid-column: 1/2;
            display: flex;
            font-size: 1rem;
            padding: 0;
            margin:0;
            flex-direction: row;

            .logo{
                font-size: 2.5rem;
                margin-right: 3vw;
                margin-left: 3vw;
            }
            .title{
                font-size: 1.5rem;
            }
        }
    }

    @media screen and (min-width: 751px){
        i{
            display: none;
        }

        .navHeader{
            display: none;
        }
    }

    .pageNavBar{
        display: flex;
        list-style-type: none;
        margin-top:3vh;

        .pageNavBar__link{
            text-decoration: none;
            color:#fff;
            padding-right: 2vw;
            padding-left: 2vw;
            font-size: 1.2rem;
        }

  
    }

    .pageNavBarBtn{
        display: none
    }


</style>