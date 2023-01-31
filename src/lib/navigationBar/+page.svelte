<div class="navHeader">
    <div class="logo">&#x2B22;</div>
    <h1 class="title">No Life</h1>
</div>
    
<ul class="navbarItems">
    {#each items as item}
        <li class="navbarItem"><a class="navbarRoute  {item.name === page ? ['selected']:['']} " href="{item.route}"><i class={item.icon}></i> <span class="title">{item.name}</span></a></li>
    {/each} 
</ul>


<script>
        
    import { navbarStore, currentPageStore } from '/src/store';

    export let items;

    let page;

    $: page = $currentPageStore;

    $: items = $navbarStore;
    
</script>
<style lang="scss">
    @media screen and (max-width:750px){

      
           .navHeader{
                display: none;
                padding:0;
                margin:0;
           }

           .title{
            display: none;
            padding:0;
            margin:0;
           }
           .navbarItems{
                padding:0;
                margin:0;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(1, 1fr);
                list-style: none;
            }

           .navbarRoute{
            display: flex;
            flex-wrap: wrap;
            padding: 1.5rem;
            text-decoration: none;
            color: #fff;
            font-size: 1.3rem;
            justify-content:center;
           }


        }
    @media screen and (min-width: 751px){
        .navHeader{
            display: flex;
            .title{
                margin-left: 1vw;
                font-size: 1.5rem;
                align-items: center;
            }
            .logo{
                font-size: 3rem;
                color:$primaryColour;
                animation-name: rotateItem ;
                animation-duration: 4s;
                animation-delay: 2s;
                animation-iteration-count: infinite;
            }
        }
    
        .navbarItems{
            margin-top: 8vh;
            display: flex;
            margin-left: -2vw;
            list-style-type: none;
            flex-direction: column;
            row-gap: 1.5rem;
        }

        .navbarRoute{
            font-size: 1.25rem;
            text-decoration: none;
            color: #fff;
            padding:.5rem;

            &:hover{
                background-color: $primaryColour;
            }
        }
    }    
    
    .selected{
        background:$primaryColour;
    }

    .logoutIcon{
        rotate: 180deg;
    }
</style>