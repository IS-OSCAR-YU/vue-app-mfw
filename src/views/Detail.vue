<template>
    <div class="detail">
        <div class="title">
            <h1>
                <span class="day">{{data.day}}</span>
                <span class="year-wek">
                    <em>{{data.year}}</em>
                    <em>{{data.week}}</em>
                </span>
            </h1>
            <h2>蜂首纪念</h2>
        </div>

        <img class="banner" :src="data.img" alt="">

        <!-- 文章内容区域 -->
        <div class="content">
            <h1 class="con-title">{{data.title}}</h1>
            <p class="info">
                <span class="time">{{data["create-time"]}}</span>
                <span>浏览</span>
                <span>· {{data.callback}}</span>
                <span>回复</span>
            </p>
            <div class="user">
                <img class="logo" :src="data.user.img"/>
                <div class="user-info">
                    <p class="name">{{data.user.name}}<span>{{data.user.level}}</span></p>
                    <span class="desc">{{data.user.count}}篇游记，</span>
                    <span class="desc">{{data.user.fans}}粉丝</span>
                </div>
                <p class="place">{{data.user.place}}</p>
            </div>
            <div class="my-travel">
                <span>我的出行信息</span>
                <ul>
                    <li class="time">{{data.travel.time}}</li>
                    <li class="person">{{data.travel.person}}</li>
                    <li class="cost">{{data.travel.cost}}</li>
                    <li class="days">{{data.travel.days}}</li>
                </ul>
            </div>
        </div>

        <div class="article">
            <p class="first">
                <span>{{data.content[0]}}</span>
                <span>{{data.content[1]}}</span>
                <span>{{data.content[2]}}</span>
            </p>
            <img src="/img/detail/boat.gif" alt="">
            <p class="watch-big">点击查看大图</p>
            <p class="second">{{data.content[3]}}</p>
            <p class="third">
                <span>{{data.content[4]}}</span>
                <span>{{data.content[5]}}</span>
                <span>{{data.content[6]}}</span>
                <span>{{data.content[7]}}</span>
            </p>
            <p class="fouth">{{data.content[8]}}</p>

            <div class="more">
                <img src="/img/detail/more.png" alt="">
            </div>
            <div class="in-app">
                <span>APP内查看完成游记</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../base.scss';
    .detail {
        $color: #008489;
        .title {
            text-align: center;
            font-weight: lighter;
            color: $color;
            padding: rem(13) 0;
            h1 {
                display: flex;
                justify-content: center;
                line-height: rem(60);
                .day {
                    font-size: rem(65);
                    margin-right: rem(20);
                    &::before {
                        @include line2(5, 47, $color);
                        margin-right: rem(4);
                    }
                    &::after {
                        @include line2(5, 47, $color);
                        margin-left: rem(4);
                    }
                }
                .year-wek {
                    font-size: rem(28);
                    position: relative;
                    &::after {
                        @include line2(5, 47, $color);
                        margin-left: rem(8);
                        position: absolute;
                        right: rem(-12);
                        top: rem(5);
                    }
                    em {
                        font-style: normal;
                        display: block;
                        line-height: rem(30);
                        text-align: center;
                    }
                }
            }
            h2 {
                font-size: rem(40);
                line-height: rem(60);
            }
        }
        .banner {
            width: 100%;
            display: block;
        }
        .content {
            padding: rem(20);
            box-sizing: border-box;
            .con-title {
                font-size: rem(36);
            }
            .info {
                font-size: rem(15);
                padding: rem(15) 0 rem(30);
                .time {
                    margin-right: rem(8);
                }
            }
            .user {
                display: flex;
                justify-content: space-between;
                .logo {
                    width: rem(66);
                    height: rem(66);
                    border-radius: rem(40);
                }
                .user-info {
                    font-size: rem(14);
                    color: #696969;
                    .name {
                        font-size: rem(18);
                        span {
                            border: rem(1) solid #000;
                            background: #ffdb26;
                            padding: rem(2);
                            width: rem(35);
                            text-align: center;
                            border-radius: rem(3);
                            display: inline-block;
                            background-clip: content-box;
                            font-size: rem(12);
                            position: relative;
                            top: rem(-3);
                            left: rem(5);
                        }
                    }
                    .desc {
                        line-height: rem(28);
                    }
                }
                .place {
                    font-size: rem(38);
                    font-weight: lighter;
                    position: relative;
                    height: rem(55);
                    &::before {
                        @include line2(1, 45, #ccc);
                        position: absolute;
                        top: 50%;
                        left: rem(-10);
                        transform: translateY(-50%);
                    }
                }
            }
            .my-travel {
                position: relative;
                margin-top: rem(40);
                color: #767676;
                span {
                    position: absolute;
                    top: rem(-10);
                    left: rem(20);
                    padding: 0 rem(5);
                    background: #fff;
                    font-size: rem(14);
                    font-weight: lighter;
                }
                ul {
                    width: 100%;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    padding: rem(20) rem(20) 0;
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        width: 50%;
                        font-size: rem(14);
                        list-style: none;
                        margin-bottom: rem(20);
                        &::before {
                            content: "";
                            display: inline-block;
                            width: .427rem;
                            height: .427rem;
                            background: red;
                            float: left;
                            margin-right: rem(5);
                            background: url(/img/detail/notes-sprites.png) no-repeat 0 -2.267rem;
                            background-size: 2.667rem auto;
                        }
                        &.person {
                            box-sizing: border-box;
                            padding-left: rem(40);
                            &::before {
                                background-position-x: -0.533rem;
                            }
                        }
                        &.cost {
                            &::before {
                                background-position-x: -1.067rem;
                            }
                        }
                        &.days {
                            box-sizing: border-box;
                            padding-left: rem(40);
                            &::before {
                                background-position-x: -1.6rem;
                            }
                        }
                    }
                }
            }
        }
        .article {
            font-size: rem(18);
            color: #474747;
            box-sizing: border-box;
            .first {
                padding: rem(20);
                line-height: rem(60);
                span {
                    display: block;
                }
            }
            img {
                width: 100%;
                display: block;
            }
            .watch-big {
                text-align: right;
                font-size: rem(14);
                margin-right: rem(40);
                margin-top: rem(10);
                color: #666;
            }
            .second {
                padding: rem(20);
            }
            .third {
                padding: rem(20);
                line-height: rem(30);
            }
            .fouth {
                padding: rem(20);
            }
            .more {
                position: relative;
                top: rem(-40);
                box-sizing: border-box;
                width: 100%;
                height: rem(65);
                padding-top: rem(35);
                background-image: linear-gradient(to top,rgba(255,255,255,0.5),rgba(255,255,255,1));
                text-align: center;
                img {
                    position: relative;
                    width: rem(15);
                    height: rem(15);
                    display: inline-block;
                    animation: swap .8s linear 0s infinite;
                }
                @keyframes swap {
                    from {
                        top: rem(0)
                    }
                    to {
                        top: rem(10);
                    }
                }
            }
            .in-app {
                $c: #ffc60e;
                font-size: rem(16);
                font-weight: bold;
                text-align: center;
                padding-bottom: rem(50);
                color: $c;
                span {
                    padding: rem(5) rem(70);
                    border: 1px solid $c;
                    border-radius: rem(8);
                } 
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            data: {
                'user': '',
                'travel': '',
                'content': []
            }
        }
    },
    watch: {
        $route() {
            this.getData();
        }
    },
    methods: {
        getData() {
            let params = this.$route.params;
            this.$axios.get('/data/detail.json', { params }).then(({ data }) => {
                this.data = data;
            })
        }
    },
    created() {
        this.getData();
    }
}
</script>