<template>
    <div
        class="container"
        v-bind:class="{
            active: isActive,
            'text-red': hasError,
        }"
    >
        Class Binding
    </div>
    <!--클래스 바인딩은 오브젝트 형태로 사용하며, 바인딩할 클래스를 key로 잡고 바인딩 여부를 true/false로 지정한다.-->
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            hasError: true,
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
