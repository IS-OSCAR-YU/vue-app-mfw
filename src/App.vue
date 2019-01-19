<template>
    <div id="app">
        <!-- 头部header区域 -->
        <div class="header">
            <h1 class="logo">马蜂窝</h1>
            <div class="search">
                <input type="text" name="search" placeholder="搜索目的地/攻略/游记">
                <button class="search-icon"></button>
            </div>
            <div class="login">
                <span>登录</span>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
#app {
    .header {
        width: 100%;
        height: 1.33rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        .logo {
            font-size: 0;
            line-height: 0;
            margin: 0;
            display: block;
            text-indent: -999rem;
            height: 0.56rem;
            width: 2.16rem;
            background: url(/img/logo.png) no-repeat right center;
            background-size: 2.16rem .56rem;;
            padding-left: 0.24rem;
        }
        .search {
            height: 0.78rem;
            input {
                height: .78rem;
                width: 5.2rem;
                border: none;
                box-sizing: border-box;
                border-top-left-radius: 0.36rem;
                border-bottom-left-radius: 0.36rem;
                background: #f3f3f3;
                outline: none;
                padding-left: 0.36rem;
                display: block;
                font-size: 0.34rem;
                float: left;
            }
            .search-icon {
                height: .78rem;
                width: 1rem;
                background: #f3f3f3;
                border-top-right-radius: 0.36rem;
                border-bottom-right-radius: 0.36rem;
                border: none;
                outline: none;
                float: left;
                position: relative;
                &::after {
                    content: "";
                    display: block;
                    width: 0.434rem;
                    height: 0.434rem;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    background: #f3f3f3 url(/img/btn_search2.png) no-repeat center center;
                    background-size: 100% 100%;

                }
            }
        }
        .login {
            height: 0.78rem;
            padding-right: 0.14rem;
            font-size: 0.34rem;
            line-height: 0.78rem;
            color: #ffa800;
        }
    }
}
</style>

<script>

export default {

}
</script>

