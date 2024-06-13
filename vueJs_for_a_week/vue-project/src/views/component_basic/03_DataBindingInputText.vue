<template>
    <div>
        <input type="text" v-model="valueModel" />
    </div>
    <!-- v-model 디렉티브를 사용하여 양방향 데이터 바인딩 생성 -->
</template>

<script>
export default {
    data() {
        return {
            valueModel: 'South Korea',
        };
    },
};
</script>
