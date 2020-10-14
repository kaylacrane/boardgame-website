<template>
    <li class="game-card">
        <span>{{name}}</span>
        <img :src="image" alt="" class="game-image">
    </li>
</template>

<script>
    export default {
        name:"BoardgameCard",
        props: ["name", "image"], 
        
    }
</script>

<style lang="scss" scoped>
.game-card{
    border: 1px dashed grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-color: lightgrey;
}
.game-image{
    width: 200px;
}
</style>