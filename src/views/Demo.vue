<template>
    <div>
        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>

        <mt-spinner type="fading-circle"></mt-spinner>
    </div>
</template>

<style lang="scss">
    
</style>

<script>
export default {
    methods: {
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
        }
    },
    data() {
        return {
            list: [1, 2, 3]
        }
    }
}
</script>

