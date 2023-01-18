<input class="inputField" type={type} placeholder={placeholder} />

<script>
    export let type;
    export let placeholder;
</script>

<style lang="scss">
    input{
        @include inputField(2vw, 1.5vh);
        @include borderCorners(.75em);
        color:#fff;

    }
</style>