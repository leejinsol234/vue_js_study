<template>
    <CompositionAPIInject />
</template>
<!--Composition API에서 provide와 inject를 사용하려면 별도로 import해야 한다.
부모 컴포넌트에서는 provide 함수를 통해서 전달할 값에 대한 키, 값을 설정한다.-->
<script>
import { provide } from 'vue'; //provide 추가
import CompositionAPIInject from './CompositionAPIInject';

export default {
    components: {
        CompositionAPIInject,
    },
    setup() {
        provide('title', 'Vue.js 프로젝트');
        //provide 함수를 통해서 전달할 키(key), 값(value) 설정
    },
};
</script>
