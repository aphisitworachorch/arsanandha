<template>
    <div>
        <div class="uk-container">
            <img width="65%" style="text-align: center" :src="s7Image"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Suranivet7",
        methods: {
            listFriends: () => {
                console.table(friendList)
            }
        },
        data: () => {
            return{
                s7Image : require('../../../../img/s7/suranivet7sharp8.jpg'),
                friendList: {
                    "nameOfFriends":[
                        "Por Chainarin" ,
                        "Kanomjeen Sawapa" ,
                        "Tom Wuttichai" ,
                        "Bori Boripat" ,
                        "Off Kachanon" ,
                        "C-Tose Narongsak" ,
                        "Group Jirattiti" ,
                        "Ta Ronnarit" ,
                        "Som Methathorn" ,
                        "Champ Worawich" ,
                        "Tin Tin" ,
                        "Kao Nidhisin" ,
                        "Ping Aekkasit" ,
                        "Pu Natthasit" ,
                        "Boy Apichet" ,
                        "Pleum Nawapat" ,
                        "P' Supphakorn" ,
                        "Frame Thanapat" ,
                        "Jab Namchai" ,
                        "Men Nakkarin" ,
                        "Nutcha Surasak" ,
                        "Benz Thammanun" ,
                        "Bomb Natthawut" ,
                        "Brand Paramet" ,
                        "Tan Rames" ,
                        "Ton Jirawat" ,
                        "Oat Chatuphon" ,
                        "Art Pratchaya"
                    ]
                }
            }
        },
        computed: {
            listFriends(){
                return this.friendList.nameOfFriends;
            }
        },
        mounted() {
            console.table(this.listFriends);
        }
    }
</script>

<style scoped>

</style>
