<template>
    <div class="modal-container">
        <header>
            <!--slot에 name을 지정해서 사용하는 slot을 Named Slot이라고 힌디.
            컴포넌트 내에 여러 영역에서 slot을 적용할 때는 name을 이용해서 적용한다.-->
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
.modal-container {
    border: 1px solid #ddd;
}
</style>
