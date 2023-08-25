<script setup lang="ts">
import { ref } from "vue";
import { mobileRule, passwordRules, codeRules } from "@/utils/rules";
import { Toast, showSuccessToast, showToast, type FormInstance } from "vant";
import { apiLogin, apiGetCode, apiCodeLogin } from "@/services/user";
import { useUserStore } from "@/stores";
import { useRoute, useRouter } from "vue-router";
import { onUnmounted } from "vue";
import CpIcon from "@/components/CpIcon.vue";
import { onMounted } from "vue";

const mobile = ref("");
const password = ref("");
const checked = ref(false);
const store = useUserStore();
const router = useRouter();
const route = useRoute();
const isPassword = ref(true);
const phoneCode = ref("");
const countdownTime = ref(0);
const secondCode = ref(0); //倒计时时间
const sendVerificationcode = ref(true);
const refSendCode = ref<FormInstance>();
let interIime: number;
const showPassword = ref(false);
// 登录按钮
const onSubmit = async () => {
  if (checked.value == true) {
    const loginRes = isPassword.value
      ? await apiLogin(mobile.value, password.value)
      : await apiCodeLogin(mobile.value, phoneCode.value);
    store.setUser(loginRes.data);
    showSuccessToast("登录成功");
    router.replace((route.query.returnUrl as string) || "/user");
  } else {
    showToast("请勾选用户协议");
  }
};
const changeLogin = () => {
  isPassword.value = !isPassword.value;
};
// 点击发送短信
const sendCode = async () => {
  if (secondCode.value > 0) return;
  await refSendCode.value?.validate("phoneNum");
  const res = await apiGetCode(mobile.value, "login");
  showToast({
    type: "success",
    message: `验证码是:${res.data.code}`,
    duration: 5000,
    className: "noticeWidth",
  });
  sendVerificationcode.value = false;
  secondCode.value = 60;
  if (interIime) clearInterval(interIime);
  interIime = setInterval(() => {
    secondCode.value--;
    if (secondCode.value < 0) {
      clearInterval(interIime);
      sendVerificationcode.value = true;
    }
  }, 1000);
};
onUnmounted(() => {
  clearInterval(interIime);
});
const changeShowPassword = () => {
  showPassword.value = !showPassword.value;
};
onMounted(() => {
  mobile.value = "13230000021";
  password.value = "abc12345";
});
</script>

<template>
  <div class="login-page">
    <ReNavBar
      right-text="注册"
      @click-right="$router.push('/register')"
    ></ReNavBar>
    <!-- 头部 -->
    <div class="login-head">
      <h3>{{ isPassword ? "密码登录" : "短信验证码登录" }}</h3>
      <a href="javascript:;">
        <span @click="changeLogin">{{
          isPassword ? "短信验证码登录" : "密码登录"
        }}</span>
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- 表单 -->
    <van-form autocomplete="off" @submit="onSubmit" ref="refSendCode">
      <van-field
        v-model="mobile"
        placeholder="请输入手机号"
        name="phoneNum"
        type="tel"
        :rules="mobileRule"
      ></van-field>
      <van-field
        v-if="isPassword"
        placeholder="请输入密码"
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        :rules="passwordRules"
      >
        <template #button>
          <CpIcon
            :name="showPassword ? 'login-eye-on' : 'login-eye-off'"
            @click="changeShowPassword"
          ></CpIcon>
        </template>
      </van-field>
      <van-field
        v-else
        placeholder="请输入验证码"
        type="password"
        v-model="phoneCode"
        :rules="codeRules"
      >
        <!-- 插槽 -->
        <template #button>
          <div class="secondCodeClass">
            <span @click="sendCode" :class="{ active: secondCode > 0 }">{{
              sendVerificationcode ? "发送验证码" : `${secondCode}秒后再次发送`
            }}</span>
          </div>
        </template>
      </van-field>
      <div class="cp-cell">
        <van-checkbox v-model="checked">
          <span>我已同意</span>
          <a href="javascript:;">用户协议</a>
          <span>及</span>
          <a href="javascript:;">隐私条款</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button block round type="primary" native-type="submit"
          >登 录</van-button
        >
      </div>
      <div class="cp-cell">
        <a href="javascript:;">忘记密码？</a>
      </div>
    </van-form>
    <!-- 底部 -->
    <div class="login-other">
      <van-divider>第三方登录</van-divider>
      <div class="icon">
        <img src="@/assets/qq.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  &-page {
    padding-top: 46px;
  }
  &-head {
    display: flex;
    padding: 30px 30px 50px;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 1;
    h3 {
      font-weight: normal;
      font-size: 24px;
    }
    a {
      font-size: 15px;
    }
  }
  &-other {
    margin-top: 60px;
    padding: 0 30px;
    .icon {
      display: flex;
      justify-content: center;
      img {
        width: 36px;
        height: 36px;
        padding: 4px;
      }
    }
  }
}
.van-form {
  padding: 0 14px;
  .cp-cell {
    line-height: 24px;
    padding: 14px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .van-checkbox {
      a {
        color: var(--cp-primary);
        padding: 0 5px;
      }
    }
  }
  .btn-send {
    color: var(--cp-primary);
    &.active {
      color: rgba(22, 194, 163, 0.5);
    }
  }
  .secondCodeClass {
    color: #16c2a3;
  }
  .active {
    color: #c8c9cf;
  }
}
:deep() {
  .van-cell {
    margin: 10px;
  }
  .van-button {
    font-size: 16px;
  }
}
</style>
<style>
.noticeWidth {
  width: 120px;
}
</style>
