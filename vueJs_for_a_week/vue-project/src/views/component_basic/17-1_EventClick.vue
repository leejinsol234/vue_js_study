<template>
    <div>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p>The count is : {{ counter }}</p>
    </div>
</template>
<!--클릭 이벤트를 통해 지정된 함수로 파라미터를 전달하는 경우-->
<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        setCount(counter) {
            this.counter = counter;
        },
    },
};
</script>
