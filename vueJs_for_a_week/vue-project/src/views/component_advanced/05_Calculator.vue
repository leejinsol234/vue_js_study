<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1" @keyup="plusNumbers" />
            <span> + </span>
            <input type="text" v-model="num2" @keyup="plusNumbers" />
            <span> = </span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>
<!--사용자로부터 숫자가 입력되는 이벤트(keyup)가 발생할 때마다
plusNumbers 함수를 호출해서 사용자가 입력한 값을 더하기 해서
 result로 반환하도록 작성된 코드-->
<script>
export default {
    neme: 'calculator',
    data() {
        return {
            num1: 0,
            num2: 0,
            result: 0,
        };
    },
    methods: {
        plusNumbers() {
            this.result = parseInt(this.num1) + parseInt(this.num2);
        },
    },
};
</script>
