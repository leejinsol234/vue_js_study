<template>
    <child-component @send-message="sendMesssage" ref="child_component" />
</template>
<!--부모 컴포넌트에서 자식 컴포넌트의 함수 직접 호출하기-->
<script>
export default {
    components: { ChildComponent },
    methods() {
        this.$refs.child_component.callFromParent();
    },
};
</script>
