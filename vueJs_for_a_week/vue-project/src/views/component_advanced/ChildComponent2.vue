<template>
    <div></div>
</template>

<script>
export default {
    //자식 컴포넌트에 함수 정의
    methods: {
        callFromParent() {
            console.log('부모 컴포넌트에서 직접 호출한 함수');
        },
    },
};
</script>
