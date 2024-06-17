<template>
    <ProvideInjectChild />
</template>

<script>
import ProvideInjectChild from './04_ProvideInjectChild';
export default {
    components: { ProvideInjectChild },
    data() {
        return {
            items: ['A', 'B'],
        };
    },
    provide() {
        return {
            itemLength: this.items.length,
        };
    },
};
</script>
