<div class="navHeader">
    <div class="logo">&#x2B22;</div>
    <h1 class="title">No Life</h1>
</div>

<ul class="navbarItems">
    <li class="navbarItem"><a onclick={toggler()} class="navbarRoute " href="/store"><i class="fa-solid fa-tag"></i> Store</a></li>
    <li class="navbarItem"><a onclick={toggler()} class="navbarRoute" href="/library"><i class="fa-solid fa-folder-open"></i> Library</a></li>
    <li class="navbarItem"><a onclick={toggler()} class="navbarRoute" href="/social"><i class="fa-solid fa-users"></i> Social</a></li>
    <li class="navbarItem"><a onclick={toggler()} class="navbarRoute" href="/"><i class="logoutIcon fa-sharp fa-solid fa-right-from-bracket"></i>  Log Out</a>
</ul>
<script>

    function toggler(){
        //links.map(element => id === element.id ?
        //[element.isActive = true]:[element.isActive = false])
        console.log('hELLO')
    }
    let links = [
        {id:1, isActive:false},
        {id:2, isActive:false},
        {id:3, isActive:false},
        {id:4, isActive:false}
    ]
    

    
</script>
<style lang="scss">
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

    .selected{
        background:$primaryColour;
    }

    .logoutIcon{
        rotate: 180deg;
    }
</style>