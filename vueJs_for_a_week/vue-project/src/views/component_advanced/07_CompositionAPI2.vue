<!--현재 컴포넌트 내에서만 사용 가능한 코드-->
<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="state.num1" />
            <span> + </span>
            <input type="text" v-model="state.num2" />
            <span> = </span>
            <spam>{{ state.resule }}</spam>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'; //computed 추가

export default {
    name: 'calculator',
    //setup은 Composition API를 구현하는 곳이다.
    setup() {
        let state = reactive({
            num1: 0,
            num2: 0,
            result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
            //computed를 이용해서 num1, num2가 변경 시 즉시 result로 더한 값을 반환.
        });
        return {
            state,
        };
    },
};
</script>
