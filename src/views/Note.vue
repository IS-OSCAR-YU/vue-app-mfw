<template>
    <div class="note">
        <div class="banner">
            <!-- banner区域 -->
            <div class="box">
                <div class="title">
                    <span class="day">{{cbanner.day}}</span>
                    <span class="y-w">
                        <em class="t">{{cbanner.year}}</em>
                        <em class="b">{{cbanner.week}}</em>
                    </span>
                    <span class="name">蜂首纪念</span>

                    <div class="calendar"></div>
                </div>
                <transition-group tag="ul" class="carousel" name="list">
                    <li v-for="(item, index) in list" :key="index + 1" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="run">
                        <img :src="item.img" alt="">
                        <h3>{{item.title}}</h3>
                        <p>我是<span>{{item.nickname}}</span>，我在<span>{{item.loveplace}}</span></p>
                    </li>
                </transition-group>
            </div>
            
            <!-- 圆点导航 -->
            <ul class="cirs">
                <li v-for="(item, index) in cirs" :key="index" @click="change(index)">
                    <img :src="item" alt="">
                    <div :class="{active:index === currentIndex}"></div>
                </li>
            </ul>
        </div>
        
        <!-- 卡片视图区域 -->
        <ul class="list">
            <Card v-for="(item, index) in cardList" :key="index" :data="item"></Card>
        </ul>
    </div>
</template>

<style lang="scss">
    @import "../base.scss";
    
    .note {
        .banner {
            width: 100%;
            background: url(/img/note/fs-bg.png) no-repeat center top;
            background-size: cover;
            padding: rem(10);
            box-sizing: border-box;
            .box {
                width: 100%;
                $l: rem(4);
                .title {
                    color: #fff;
                    font-size: rem(30);
                    font-weight: normal;
                    padding: rem(10) 0 rem(30);
                    .day {
                        margin-right: $l;
                        &:before {
                            @include line;
                            margin-right: $l;
                        }
                        &:after {
                            @include line;
                            margin-left: $l;
                        }
                    }
                    .y-w {
                        margin-right: $l;
                        display: inline-block;
                        text-align: center;
                        em {
                            font-style: normal;
                            display: block;
                            font-size: rem(12);
                            line-height: rem(16);
                        }
                    }
                    .name {
                        &:before {
                            @include line;
                            margin-right: $l;
                        } 
                        &:after {
                            @include line;
                            margin-left: $l;
                        }
                    }
                    .calendar {
                        width: rem(85);
                        height: rem(38);
                        border-radius: rem(20);
                        background: #000;
                        float: right;
                        position: relative;
                        
                        &::before {
                            position: absolute;
                            // -webkit-text-size-adjust: none;
                            left: rem(18);
                            top: 50%;
                            transform: translateY(-50%);
                            line-height: rem(14);
                            content: "历历在目";
                            font-size: rem(12);
                            width: rem(26);
                            height: rem(28);
                            display: inline-block;
                        }
                        &::after {
                            position: absolute;
                            right: rem(15);
                            top: 50%;
                            transform: translateY(-50%);
                            content: "";
                            width: rem(22);
                            height: rem(25);
                            display: inline-block;
                            background: url(/img/note/icon.png) 0 0 no-repeat;
                            background-size: 1.33333rem auto;
                        }
                    }
                }
                .carousel {
                    width: 100%;
                    height: rem(342);
                    position: relative;
                    background: #fff;
                    overflow: hidden;
                    border-radius: rem(5);
                    box-shadow: 0 0 rem(10) rem(0) rgba(0, 0, 0, .3);
                    li {
                        width: 100%;
                        position: absolute;
                        list-style: none;
                        img {
                            width: 100%;
                            display: block;
                        }
                        h3 {
                            text-align: center;
                            font-size: rem(24);
                            font-weight: normal;
                            padding-top: rem(15);
                            padding-bottom: rem(5);
                        }
                        p {
                            text-align: center;
                            font-size: rem(18);
                            padding-bottom: rem(20);
                            span {
                                color: orange;
                            }
                        }
                    }
                    .list-enter-to {
                        transition: all 1s ease;
                        transform: translateX(0);
                    }

                    .list-leave-active {
                        transition: all 1s ease;
                        transform: translateX(-100%)
                    }

                    .list-enter {
                        transform: translateX(100%)
                    }

                    .list-leave {
                        transform: translateX(0)
                    }
                }
                
            }
            .cirs {
                display: flex;
                justify-content: center;
                padding-top: rem(10);
                li {
                    width: rem(55);
                    list-style: none;
                    margin-right: rem(8);
                    border-radius: rem(5);
                    position: relative;
                    &:last-child {
                        margin-right: 0;
                    }
                    img {
                        width: 100%;
                        border-radius: rem(5);
                        display: block;
                    }
                }
                div {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: rem(-12);
                    width: rem(35);
                    height: rem(4);
                    border-radius: 2px;
                    &.active {
                        background: orange;
                    }
                }
            }
        }
    }
</style>

<script>
import Card from '../components/Card';

export default {
    components: {
        Card
    },
    data() {
        return {
            list: [],
            cirs: [],
            cbanner: '',
            currentIndex: 0,
            timer: '',
            cardList: []
        }
    },
    methods: {
        setTimer() {
            this.timer = setInterval(() => {
                this.currentIndex++;
                this.currentIndex = this.currentIndex % 5;
                this.cbanner = this.list[this.currentIndex];
            }, 2000);
        },
        stop() {
            clearInterval(this.timer);
        },
        run() {
            this.setTimer();
        },
        change(index) {
            this.currentIndex = index;
        }
    },
    created() {
        this.$axios.get('/data/note.json').then(({ data }) => {
            this.list = data.data.list;
            this.cirs = data.data.cirs;
            this.cbanner = this.list[0];
            this.ccir = this.cirs[0];
        });
        this.$axios.get('/data/note-list.json').then(({ data }) => {
            this.cardList = data.list;
        });
        
        this.setTimer();
    }
}
</script>