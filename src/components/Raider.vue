<template>
    <router-link class="raider" tag="div" :to="'/detail/' + data.data.id">
        <div class="raider-box">
            <p class="title">{{data.data.title}}</p>
            <div class="l">
                <img class="content-img" :src="data.data.image">
            </div>
            <div class="r">
                <div class="content">{{data.data.content}}</div>
                <div class="pv">{{data.data_source.pv}}浏览</div>
                <div class="anwser">问答</div>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss">
    .raider {
        .raider-box {
            width: 100%;
            padding: 0.362rem 0.362rem 0.1rem;
            box-sizing: border-box;
            border-bottom: 0.024rem solid #f3f3f3;
            &::after {
                content: "";
                display: block;
                height: 0;
                clear: both;
            }
            .title {
                font-size: 0.531rem;
                margin-bottom: 0.24rem;
            }
            .l {
                width: 3.466em;
                float: left;
                .content-img {
                    width: 100%;
                    height: 2.4rem;
                }
            }
            .r {
                float: left;
                width: 5.314rem;
                height: 2.4rem;
                padding-left: 0.483rem;
                position: relative;
                .content {
                    display: -webkit-box;
                    font-size: 0.386rem;
                    line-height: 0.483rem;
                    overflow: hidden;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    color: #999;
                }
                .pv {
                    font-size: 0.338rem;
                    position: absolute;
                    left: 0.483rem;
                    bottom: 0;
                    color: #999;
                }
                .anwser {
                    font-size: 0.29rem;
                    float: right;
                    position: absolute;
                    right: 0;
                    bottom: -0.072rem;
                    padding: 0.072rem 0.193rem;
                    border: 0.024rem solid #30d2bf;
                    border-radius: 0.097rem;
                    color: #30d2bf;
                }
            }
        }
    }
    
</style>

<script>
export default {
    props: {
        data: {}
    }
}
</script>