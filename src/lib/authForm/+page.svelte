<div class="container">
    <h2 class="formTitle">Sign In</h2>
    <form class="authForm" id="authForm">
        <div class="formField">
            <h3 class="formField__title">Enter Username</h3>
            <InputField type='text' />
        </div>
        <div class="formField">
            <h3 class="formField__title">Enter Password</h3>
            <InputField type='password' />
        </div>
        <input type="submit" value="Sign In" class="authForm__btn">
    </form>
</div>

<script>
    import InputField from '$lib/inputField/+page.svelte';
</script>
<style lang="scss">


    .formTitle{
        padding-top: 4vh;
        text-align: center;
        font-size: 2.5em;
    }
    .container{
        display: block;
        font-size: .75em;
        margin: auto;
        margin-top: 10vh;
    
        background-color: $darkGrey;
        width:30vw;
        @media screen and (max-width:1275px) {
        
            background: none;
        }
    }

    .authForm{
        margin: auto;
        display:flex;
        align-items: center;
        flex-direction: column;    

        .formField{
          margin-top: -1vh; 
          margin-bottom: 3vh; 

            .formField__title{
                color:$primaryColour;
            }
        }

        .authForm__btn{
            @include buttonSize(4vw, 1.5vh);
            margin-top: 2vh;
            background-color: $primaryColour;
            margin-bottom: 4vh;
            box-shadow: 1vw 2vh #000;
            border:none;

            @media screen and (max-width: 520px){
                box-shadow: none;
                &:hover{
                    background-color: $grey;
                    color: #fff;
                }
            }

            @media screen and (min-width:520px){
                &:hover{
                animation-name: buttonShadowTransitionOn;
                animation-duration: .5s;
                box-shadow: none;
                background-color: $grey;
                color: #fff;   
                }

                &:not(:hover){
                    animation-name: buttonShadowTransitionOff;
                    animation-duration: .5s;
                    box-shadow: 1vw 2vh #000;
                    background-color: $primaryColour;
                    
                }
    
            }
            
        }
        
    }

    
</style>