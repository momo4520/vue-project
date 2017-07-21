<template>
  <div>
    <head-top signin-up="home">
      <!--<span slot="logo" class="head_logo">ele.me</span>-->
    </head-top>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <div>详情</div>
    </nav>
  </div>
</template>
<script>
  import headTop from '../../components/header/head'
  export default{
    components: {
      headTop
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/mixin";
  .head_logo{
    left:0.4rem;
    font-weight:400;
    @include sc(0.7rem,#fff);
    @include wh(2.3rem,0.7rem);
    @include ct;
  }
  .city_nav{
    padding-top:2.35rem;
    border-top:1px solid $bc;
    background-color: #fff;
    margin-bottom:0.4rem;
    .city_tip{
      @include fj;
      line-height:1.45rem;
      padding:0 0.45rem;
      span:nth-of-type(1){
        @include sc(0.55rem,#666);
      }
      span:nth-of-type(2){
        font-weight: 900;
        @include sc(0.475rem,#9f9f9f);
      }
    }
  }
</style>
