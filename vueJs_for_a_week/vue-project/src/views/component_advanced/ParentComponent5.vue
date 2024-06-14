<template>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    <child-component ref="child_component" />
</template>

<script>
import ChildComponent from './ChildConponent5';

export default{
    components: {ChildComponent}
    //자식 컴포넌트의 msg값을 감지(computed는 참조되고 있는 데이터의 변경사항을 바로 감지하여 반영할 수 있음.)
    computed:{
        msg(){
            return this.#refs.child_component.msg;
        }
    },
    methods:{
        checkChild(){
            alert(this.msg);
        }
    }
}
</script>
