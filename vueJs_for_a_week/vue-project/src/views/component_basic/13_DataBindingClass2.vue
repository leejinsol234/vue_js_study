<template>
    <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
    <!--배열로 사용하는 경우 특정 조건에 따른 클래스 바인딩 처리를 true/false로 할 수 없다.-->
</template>

<script>
export default {
    data() {
        return {
            activeClass: 'active',
            errorClass: 'text-red',
        };
    },
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 200px;
}
.active {
    background-color: yellow;
    font-weight: bold;
}
.text-red {
    color: red;
}
</style>
