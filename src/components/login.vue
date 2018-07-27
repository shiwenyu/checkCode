<template>
    <div>
        <input placeholder="输入口令" v-model="token">
        <button @click = 'log'>登陆</button>
    </div>
</template>
<script>
import * as types from '../store/type'
export default {
    data() {
        return {
            token: '',

        }
    },
    methods: {
        log() {
            if(this.token) {
                this.$store.commit(types.LOGIN, this.token);  // 改变state中token的值
                let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                console.log(this.$route.query);
                this.$router.push({
                    path: '/reposity'
                })
            } else {
                console.log('token cant be null')
            }
        }

    },
};
</script>
<style scoped>

</style>
