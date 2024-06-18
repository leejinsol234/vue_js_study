<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="../assets/kakao_login_medium_narrow.png" width="200" />
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        kakaoLogin() {
            window.Kakao.Auth.login({
                scope: 'profile_nickname',
                success: this.getKakaoAccount,
            });
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: (res) => {
                    const kakao_account = res.kakao_account;
                    const nickname = kakao_account.profile_nickname; //카카오 닉네임
                    console.log('nickname', nickname);

                    //로그인 처리 구현
                    alert('로그인 성공!');
                },
                fail: (error) => {
                    console.log(error);
                },
            });
        },
    },
};
</script>
