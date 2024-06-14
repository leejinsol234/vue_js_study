<template>
    <div></div>
</template>
<!--자식 컴포넌트에서 부모 컴포넌트로 이벤트를 전달하기 위해서는 $emit을 사용한다.-->
<script>
export default {
    data() {
        return {
            msg: '자식 컴포넌트로부터 보내는 메세지',
        };
    },
    mounted() {
        this.$emit('send-message', this.msg);
    },
};
</script>
