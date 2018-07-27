<template>
    <div>
        <ul>
            <li v-for="item in dataList">
                <span>
                    {{item.name}}
                </span>
                <p>
                    {{item.description}}
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataList : []
        }
    },
    methods: {
        getReposity() {
            let params = {
                sort: 'updated'
            };
            let api = '/user/repos';
            this.axios.get(api,params).then(response => {
                this.dataList = response.data;
            }).catch(err => console.log(err));
        }
    },
    mounted() {
        this.getReposity();
    }
}
</script>
<style scoped>

</style>


