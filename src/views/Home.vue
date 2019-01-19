<template>
    <div class="home">
        <!-- banner区域 -->
        <mt-swipe class="carousel" :auto="4000">
            <mt-swipe-item class="item-1">
                <img src="/img/banner1.jpeg">
            </mt-swipe-item>
            <mt-swipe-item class="item-2">
                <img src="/img/banner2.jpeg">
            </mt-swipe-item>
            <mt-swipe-item class="item-3">
                <img src="/img/banner3.jpeg">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 页面导航区域 -->
        <ul class="list-wrapper">
            <router-link tag="li" v-for="(item, index) in listImgInfo" :key="index" to="/">
                <span>{{item.title}}</span>
            </router-link>
        </ul>

        <!-- 推荐攻略 -->
        <div class="recom-title">
            <span>推荐攻略</span>
        </div>
        
        <!-- 推荐攻略列表 -->
        <ul v-infinite-scroll="loadMore" 
            infinite-scroll-disabled="loading" 
            infinite-scroll-distance="10" class="raider-list">
            <Raider v-for="(item, index) in RaiderListData" :key="index" :data="item"></Raider>
        </ul>
        
    </div>
</template>

<style lang="scss">
.home {
    .carousel {
        width: 100%;
        height: 5.6rem;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .list-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0.14rem 0.14rem .6rem;
        li {
            list-style: none;
            width: (100% / 4);
            height: 2.46rem;
            text-align: center;
            line-height: 4.35rem;
            position: relative;
            span {
                font-size: .435rem;
            }
            &::after {
                content: "";
                display: block;
                width: 1.21rem;
                height: 1.23rem;
                position: absolute;
                top: 43%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                background: url(/img/list.png) no-repeat;
                background-size: 5.02rem auto;
            }
            &:nth-child(1)::after {
                background-position: 0rem 0rem;
            }
            &:nth-child(2)::after {
                background-position: 0rem -1.23rem;
            }
            &:nth-child(3)::after {
                background-position: -2.49rem -1.23rem;
            }
            &:nth-child(4)::after {
                background-position: -1.24rem -1.23rem;
            }
            &:nth-child(5)::after {
                background-position: -1.23rem 0rem;
            }
            &:nth-child(6)::after {
                background-position: -2.49rem 0rem;
            }
            &:nth-child(7)::after {
                background-position: -3.732rem 0rem;
            }
            &:nth-child(8)::after {
                background-position: -3.732rem -1.23rem;
            }
            
            $cList: #ff9d00 #feca2b #42d6ba #f94a87 #32a2f1 #fd4e4e #acce0e #b160df;
            @for $i from 1 through 8 {
                &:nth-child(#{$i}) {
                    color: nth($cList, $i);
                }
            }
        }
    }
    .recom-title {
        width: 100%;
        height: 0.918rem;
        background: #f3f3f3;
        text-align: center;
        line-height: 0.918rem;
        font-size: 0.411rem;
        color: #999;
        font-weight: normal;
        span {
            padding: 0rem 0.676rem;
            position: relative;
            &::before {
                content: "";
                display: block;
                width: 0.242rem;
                height: 0.242rem;
                background: url(/img/arrow.png) no-repeat;
                background-size: 0.242rem auto;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            &::after {
                content: "";
                display: block;
                width: 0.242rem;
                height: 0.242rem;
                background: url(/img/arrow.png) no-repeat;
                background-size: 0.242rem auto;
                background-position: 0px -0.314rem;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    .raider-list {
        padding-bottom: 0.725rem;
    }
}
</style>

<script>
import Raider from '../components/Raider.vue'

export default {
    components: { Raider },
    mounted() {
        
    },
    methods: {
        loadMore() {
            this.loading = true;

            this.$axios.get('/data/1.json').then(({ data }) => {
                setTimeout(() => {
                    this.RaiderListData = this.RaiderListData.concat(data.data.list);
                    this.loading = false;
                }, 1000);
            })
        },
    },
    data() {
        return {
            msg: 'hello world',
            listImgInfo: [
                { title: '找攻略', pos: [] }, 
                { title: '看游记', pos: [] },
                { title: '问达人', pos: [] },
                { title: '结伴', pos: [] },
                { title: '酒店', pos: [] },
                { title: '旅行商城', pos: [] },
                { title: '机票', pos: [] },
                { title: '当地玩乐', pos: [] }
            ],
            RaiderListData: []
        }
    }
}
</script>
