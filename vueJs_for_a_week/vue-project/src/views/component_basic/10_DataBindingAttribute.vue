<template>
    <div>
        <img v-bind:src="imgSrc" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgSrc: 'https://ko.vuejs.org/images/logo.png',
        };
    },
};
</script>
