<template>
    <div></div>
</template>

<script>
import ApiMixin from '../../api.js';

export default {
    mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록
    data() {
        return {
            productList: [],
        };
    },
    async mounted() {
        this.productList = await this.$callAPI(
            'https://dbf6f8ec-44f5-40ab-a1d2-8901d8dc0ece.mock.pstmn.io/list',
            'get'
        );
        console.log(this.productList);
    },
};
</script>
