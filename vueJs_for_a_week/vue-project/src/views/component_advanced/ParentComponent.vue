<template>
    <child-component @send-message="sendMesssage" ref="child_component" />
    <!--자식 컴포넌트인 child-component에 ref=""child_component"를 지정하여, $refs로 접근할 수 있도록 함.-->
    <!--html 태그에 ref="id"를 지정하면 Vue 컴포넌트의 함수에서 this.$refs를 통해 접근이 가능하게 됨.
    (ref 속성은 html태그에서 사용되는 id와 비슷한 기능을 한다.)-->
</template>
<!--부모 컴포넌트에서 자식 컴포넌트의 이벤트 직접 발생시키기-->
<script>
import ChildComponent from './ChildComponent';

export default {
    components: { ChildComponent },
    mounted() {
        this.$refs.child_component.$refs.btn.click();
    },
};
</script>
