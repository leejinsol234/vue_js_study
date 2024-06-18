<template>
    <div>
        <div id="naverIdLogin"></div>
        <button type="button" @click="logout">로그아웃</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            naverLogin: null,
        };
    },
    mounted() {
        this.naverLogin = new window.naver.LoginWithNaverId({
            clientId: 'tB76XKRFX4nHYw58rm6l', //개발자 센터에 등록한 ClientId
            callbackUrl: 'http://localhost:8080/naverlogin', //개발자 센터에 등록한 callback Url
            isPopup: false, //팝업을 통한 연동처리 여부
            loginButton: {
                color: 'green',
                type: 3,
                height: 60,
            }, //로그인 버튼의 타입을 지정
        });

        //설정 정보를 초기화하고 연동을 준비
        this.naverLogin.init();

        this.naverLogin.getLoginStatus((status) => {
            if (status) {
                console.log(status);
                console.log(this.naverLogin.user);

                //필수적으로 받아야 하는 프로필 정보가 있다면 callback 처리 시점에 체크
                var email = this.naverLogin.user.getEmail();
                if (email == undefined || email == null) {
                    alert('이메일은 필수 정보입니다. 정보 제공을 동의해주세요.');
                    //사용자 정보 재동의를 위하여 다시 동의 페이지로 이동함
                    this.naverLogin.reprompt();
                    return;
                }
            } else {
                console.log('callback 처리에 실패하였습니다.');
            }
        });
    },
    methods: {
        logout() {
            //토큰을 삭제하는 logout 메서드
            const accessToken = this.naverLogin.accessToken.accessToken; //eslint-disable-line no-unused-vars
            const url =
                '/oauth2.0/token?grant_type=delete&client_id=tB76XKRFX4nHYw58rm6l&client_secret=w4KCbhgSMp&access_token=${accessToken}&service_provider=NAVER';

            //토큰 삭제 API를 axios를 이용해서 호출하면 CORS 위배로 에러가 발생하므로 vue.config.js에 proxy를 등록해서 사용해야 한다.
            axios.get(url).then((res) => {
                console.log(res.data);
            });
        },
    },
};
</script>
