<template>
    <div>
        <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no" />{{ checked }}</label>
        <!--체크/해제 되었을 때의 기본 값을 변경(체크되지 않았을 때는 ㅁno로 보이고 체크 시에는 ㅁyes로 보임.)-->
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked: true,
        };
    },
};
</script>
