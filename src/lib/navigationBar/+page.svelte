<div class="navHeader">
    <div class="logo">&#x2B22;</div>
    <h1 class="title">No Life</h1>
</div>

<ul class="navbarItems">
    <li class="navbarItem"><a class="navbarRoute" href="/store"><i class="fa-solid fa-tag"></i> Store</a></li>
    <li class="navbarItem"><a class="navbarRoute" href="/library"><i class="fa-solid fa-folder-open"></i> Library</a></li>
    <li class="navbarItem"><a class="navbarRoute" href="/social"><i class="fa-solid fa-users"></i> Social</a></li>
    <li class="navbarItem"><a class="navbarRoute" href="/settings"><i class="fa-solid fa-gear"></i> Settings</a></li>
</ul>
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
            animation-name: rotateItem ;
            animation-duration: 2s;
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
    }
</style>