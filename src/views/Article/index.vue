<script lang="ts" setup></script>

<template>
  <div class="dealthEncyclopedia">
    <div>流程以及功能模块</div>
    <header>
      流程介绍
      <div class="item">
        1：用户登录后，在首页中能查看到健康咨询，能在关注tab栏关注医生
      </div>
      <div class="item">
        2：点击首页-极速问诊进行就医，顶部中能跳转到问诊记录页。选择问诊类型=》选择科室=》填写问诊信息=》选择就诊人=》进行支付=》支付成功后跳转到问诊室，支付失败跳转到问诊记录页=》问诊室能与测试端医生进行沟通，医生开具处方后结束问诊=》用户能进行评价=》评价后跳转到问诊记录页
      </div>
    </header>
    <main>
      功能模块介绍
      <div class="item">
        1:首页极速问诊模块。经过信息保存，组件通信，逻辑代码复用，向后端传递数据完成问诊功能。
      </div>
      <div class="item">
        2：家庭档案模块。对患者增删改查，有对应的效验，能对身份证进行效验。封装了顶部组件，能实现组件复用。
      </div>
      <div class="item">
        3:我的问诊模块。封装了更过模块，查看处方模块，删除订单模块的组合式函数，实现逻辑的复用。封装了单个医生组件，能根据问诊的不同状态对应不同的操作。在问诊详情中可以复制订单号。
      </div>
      <div class="item">3：首页关注模块：封装了组合式函数使代码简洁复用。</div>
      <div class="item">
        4:支付模块。实现支付逻辑，成功后跳转到问诊室，失败后跳转到问诊记录。
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.dealthEncyclopedia {
  padding: 20px;
  header {
    margin: 40px 0 40px 0;
  }
  .item {
    margin-top: 10px;
  }
}
</style>
