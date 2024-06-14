<template>
    <child-component @send-message="sendMesssage" ref="child_component" />
    <button type="button" @click="changeChildData">Change Child Data</button>
</template>
<!--부모 컴포넌트에서 자식 컴포넌트의 데이터 옵션 값 직접 변경하기-->
<script>
export default {
    component: { ChildComponent },
    methods: {
        changeChildDate() {
            this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터';
        },
    },
};
</script>
