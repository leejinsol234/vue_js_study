<template>
    <button type="button" @click="childFunc" ref="btn">자식 컴포넌트 데이터 변경</button>
</template>
<!--부모 컴포넌트에서 자식 컴포넌트의 데이터 옵션 값 동기화 하기-->
<script>
export default {
    data() {
        return {
            msg: '메세지',
        };
    },
    methods: {
        childFunc() {
            this.msg = '변경된 메세지';
        },
    },
};
</script>
