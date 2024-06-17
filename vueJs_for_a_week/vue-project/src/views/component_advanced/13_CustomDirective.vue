<template>
    <input type="text" v-focus />
</template>
<!--전역에 등록하지 않고 컴포넌트 내에 등록해서 사용하는 방법  -->
<script>
export default {
    directives: {
        focus: {
            mounted(el) {
                el.focus();
            },
        },
    },
};
</script>
