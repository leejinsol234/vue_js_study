<template>
    <div>
        <button type="button" @click="one(), two()">Click</button>
    </div>
</template>
<!--클릭 이벤트 발생 시 여러 개의 함수를 호출하는 경우-->
<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        one() {
            alert('One');
        },
        two() {
            alert('Two');
        },
    },
};
</script>
