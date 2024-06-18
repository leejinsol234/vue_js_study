<template>
    <p>Count: {{ count }}</p>
    <button type="button" @click="increment">Increment</button>
</template>

<script>
export default {
    computed: {
        count(){
            return this.$store.state.count;
        },
        //store(저장소)의 getters에 정의된 값에 접근할 수 있다.
        cartCount(){
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        increment(){
            this.$store.commit('increment');
        }
    }
}
</script>
