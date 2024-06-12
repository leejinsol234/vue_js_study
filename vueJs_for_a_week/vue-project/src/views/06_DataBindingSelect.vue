<template>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            city: '064', //select 객체의 초기값이 설정됨. 화면에서 제주가 선택된 상태로 보이게 됨.
        };
    },
};
</script>
