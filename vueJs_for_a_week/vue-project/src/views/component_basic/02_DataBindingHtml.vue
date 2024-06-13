<template>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
</template>
// html 태그를 바인딩할 때는 문자열을 바인딩할 때 사용한 이중 중괄호를 이용하면 html 태그가 아니라 문자열로 인식하게 됨.
// 따라서 html 태그 바인딩 시에는 v-html 디렉티브를 사용해야 함.
<script>
export default {
    data() {
        return {
            htmlString: '<p style="color:red;">This is a red string.</p>',
        };
    },
};
</script>
