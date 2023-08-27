<script lang="ts" setup></script>

<template>
  <div class="dealthEncyclopedia">
    <div>网页优点</div>
    <header>
      组合式函数封装，组件封装。
      <div class="item">
        1：医生的关注逻辑，查看处方逻辑，取消问诊逻辑等，实现了逻辑的复用，使代码复用，高效简洁。
      </div>
      <div class="item">
        2：顶部导航组件，单选框组件，图标组件等，实现了组件的封装。
      </div>
    </header>
    <main>
      技术栈
      <div class="item">
        Vue3 、TS、Vant、 Pinia 、VueRouter 、vueUse、async,await
      </div>
    </main>
    <footer>
      使用时，提供的测试支付宝账号
      <div class="item">
        <p>买家账号：scobys4865@sandbox.com</p>
        <p>登录密码：111111</p>
        <p>支付密码：111111</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.dealthEncyclopedia {
  padding: 20px;

  header {
    margin: 40px 0 40px 0;
  }
  main {
    margin: 40px 0 40px 0;
  }
  footer {
    margin: 40px 0 40px 0;
  }
  .item {
    margin-top: 10px;
  }
}
</style>
