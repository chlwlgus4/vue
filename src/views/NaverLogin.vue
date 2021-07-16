<template>
<div>
  <div id="naverIdLogin"></div>
  <button type="button" @click="logout">로그아웃</button>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "naverIdLogin",
  data() {
    return {
      naverLogin: null,
    };
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'A4AGQfJNoFGmijVRcj6V',
      callbackUrl: 'http://localhost:3000/naverLogin',
      isPopup: false,
      loginButton: {color: 'green', type: 3, height: 60}
    });

    //설정 정보를 초기화하고 연동을 준비
    this.naverLogin.init();

    this.naverLogin.getLoginStatus((status) => {
      if(status) {
        console.log(status);
        console.log(this.naverLogin.user);

        //필수적으로 받아야 하는 프로필 정보가 있다면 callback 처리 시점에 체크
        var email = this.naverLogin.user.getEmail();
        if(!email) {
          alert('이메일은 필수 정보입니다. 정보 제공을 동의해주세요.')
          this.naverLogin.reprompt();
          return;
        } else {
          console.log('처리에 실패 하였습니다.');
        }
      }
    });
  },
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url = `/oauth2.0/token?grant_type=delete&client_id=A4AGQfJNoFGmijVRcj6V&client_secret=ROI8NPbMfM&access_token${accessToken}&service_provider=NAVER`
      axios.get(url).then((res) => {
        console.log(res)
      });
    }
  }
}
</script>

<style scoped>

</style>