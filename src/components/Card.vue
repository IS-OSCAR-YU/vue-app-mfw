<template>
    <div class="card">
        <div class="left">
            <h3>{{data.title}}</h3>
            <p>{{data.user.name}}在<span>{{data.user.addr}}</span></p>
            <span class="views">{{data.comments.views}}</span>
            <span class="msg">{{data.comments.msg}}</span>
        </div>
        <div class="right">
            <img :src="data.img" alt="">
        </div>
        
    </div>
</template>

<style lang="scss">
    @import "../base.scss";
    .card {
        margin: rem(20) 0;
        box-sizing: border-box;
        padding-left: rem(10);
        display: flex;
        justify-content: space-around;
        .left {
            width: 50%;
            font-size: rem(16);
            h3 {
                font-size: rem(18);
                padding: rem(10) 0;
                height: rem(63);
            }
            p {
                display: flex;
                align-items: center;
                &::before {
                    content: "";
                    display: inline-block;
                    width: rem(25);
                    height: rem(25);
                    margin-right: rem(5);
                    border-radius: rem(20);
                    background: url(/img/note/user.jpeg) no-repeat center center;
                    background-size: rem(25);
                }
                span {
                    color: orange;
                }
            }
            .views {
                font-size: rem(14);
                padding-left: rem(25);
                background: url(/img/note/icon.png) -.66667rem rem(5) no-repeat;
                background-size: rem(68) auto;
            }
            .msg {
                font-size: rem(14);
                padding-left: rem(25);
                margin-left: rem(5);
                background: url(/img/note/icon.png) -.66667rem rem(-13) no-repeat;
                background-size: rem(68) auto;
            }
        }
        .right {
            width: 50%;
            img {
                width: 100%;
                display: block;
            }
        }
    }
</style>

<script>
export default {
    props: ['data']
}
</script>