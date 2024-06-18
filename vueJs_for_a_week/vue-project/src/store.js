import { createsStore } from 'vuex';
//Vuex 애플리케이션의 중심에는 store가 있다. store(저장소)는 애플리케이션 상태를 저장하고 있는 컨테이너이다.
const store = createsStore({
    state() {
        return {
            count: 0,
            cart: [
                {
                    product_id: 1,
                    product_name: '아이폰 거치대',
                    catrgory: 'A',
                },
            ],
        };
    },
    getters: {
        cartCount: (state) => {
            return state.cart.length;
        },
    },
    //mutations은 state를 변경시키는 역할을 한다. 동기 처리를 통해 state에 정의된 변수의 변경 사항을 추적할 수 있게 해준다.
    //actions는 mutations와 매우 유사한 역할을 하지만 actions에 정의된 함수 안에서는 여러 개의 mutations을 실행시킬 수 있을 뿐만 아니라,
    //mutations와 달리 비동기 작업이 가능하다. 즉, actions에 등록된 함수는 비동기처리 후 mutations을 커밋할 수 있어서
    //저장소에서 비동기 처리 로직을 관리할 수 있게 해준다.
    mutations: {
        increment(store) {
            state.count++;
        },
    },
});

export default store;
