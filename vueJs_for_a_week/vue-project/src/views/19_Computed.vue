<template>
    <div>Full Name : {{ fullName }}</div>
</template>
<script>
export default {
    data() {
        return {
            firstName: 'Seungwon',
            lastName: 'Go',
        };
    },
    computed: {
        fullName() {
            //fullName()은 함수인 동시에 Vue 인스턴스의 데이터 키 값이다.
            return this.firstName + ' ' + this.lastName;
        },
    },
};
</script>
