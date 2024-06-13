<template>
    <div>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue == ''">Click</button>
        <!--button 객체의 disabled 속성 제어하기 : input란에 text가 입력되는 순간 버튼이 활성화 됨-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            textValue: '',
        };
    },
};
</script>
