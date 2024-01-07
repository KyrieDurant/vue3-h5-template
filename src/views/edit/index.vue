<template>
    <div class="container">
        <div class="title">亚洲网络科技有限公司</div>
        <div class="bottleBox">
            <div v-for="(item, index) in bottleList" :key="index" @click="selectRiver(index, item)"
                :class="selBottle == index ? 'abottle' : 'abottle1'">
                <img :src="item.img" class="bottleImg">
                <div class="bottleName">
                    <span class="nameTxt">{{ item.name }}</span>
                    <div class="selTxt">
                        <span>请选择详情</span>
                        <van-icon name="arrow" />
                    </div>
                </div>
            </div>
        </div>
        <div class="minBottle">
            <div v-for="(item, index) in minBottleList" :key="index" @click="selectMin(index, item)"
                :class="selMin == index ? 'aminBottle' : 'aminBottle1'">
                <img :src="item.img" class="minBottleImg">
                <div style="font-size: 10px; color: rgb(143, 143, 143);">{{ item.name }}</div>
            </div>
        </div>
        <div class="modelBox">
            <div class="model"></div>
            <div class="modelBtn">
                <div class="aBtn" v-for="(item, index) in btnList" :key="index" @click="getMondel(item)">
                    <img :src="item.img" class="rightImg" />
                    <span style="font-size: 11px;">{{ item.name }}</span>
                </div>
            </div>
            <div class="saveBtn">
                <div class="aBtn">
                    <img src="https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/007.png"
                        class="rightImg" />
                    <span style="font-size: 11px;">保存</span>
                </div>
            </div>
        </div>
        <div class="bottomBox">
            <div style="padding-left: 3%;">
                <van-icon name="other-pay" />
                <span style="padding-left: 7px;">泵头合集</span>
            </div>
            <div style="padding-right: 3%;">
                <span style="padding-right: 7px; color: rgb(167, 167, 167); font-size: 13px;">请选择更多样式</span>
                <van-icon name="arrow" color="rgb(167, 167, 167)" size="13" />
            </div>
        </div>
    </div>
</template>
<script setup name="Edit">
import { ref, reactive } from 'vue'


const bottleList = ref([
    {
        name: '圆尖瓶',
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/004.png'
    },
    {
        name: '四方瓶',
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/004.png'
    },
    {
        name: '圆尖瓶',
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/004.png'
    },
    {
        name: '四方瓶',
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/004.png'
    },
])

const selBottle = ref(0)
function selectRiver(e, item) {
    console.log('点击瓶子选择', e, item);
    selBottle.value = e
}

const minBottleList = ref([
    {
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/005.png',
        name: '250ML'
    },
    {
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/005.png',
        name: '150ML'
    },
    {
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/005.png',
        name: '100ML'
    },
    {
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/005.png',
        name: '250ML'
    },
    {
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/005.png',
        name: '350ML'
    },
    {
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/005.png',
        name: '200ML'
    },
])

const selMin = ref(0)
function selectMin(e, item) {
    console.log('小瓶子选择', e, item);
    selMin.value = e
}

const btnList = ref([
    {
        name: '效果',
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/004.png'
    },
    {
        name: '工艺',
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/005.png'
    },
    {
        name: '丝印',
        img: 'https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/006.png'
    },
])

function getMondel(item) {
    console.log('点击按钮', item);

}

</script>
<style lang="less" scoped>
.container {
    width: 100%;
    background: url(https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/001.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.title {
    width: 100%;
    height: 50px;
    // background: rgba(49, 127, 204, 0.5);
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    color: rgb(61, 61, 61);
}

.oneLayer {
    height: 100px;
    display: flex;
    align-items: center;
    overflow-x: scroll;


}

.bottleBox {
    // margin-top: 7px;
    position: relative;
    // background-color: rgba(52, 214, 193, 0.4);
    display: flex;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    overflow-x: auto;
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;

    .abottle {
        width: 135px;
        height: 75px;
        // background-color: rgba(49, 127, 204, 0.5);
        margin-left: 10px;
        background: #f8fbff;
        border:1PX solid #0079ff;
        border-radius: 10px;
        // background: url(https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/002.png) no-repeat center;
        // background-size: 100% 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .abottle1 {
        width: 135px;
        height: 75px;
        background-color: rgba(49, 127, 204, 0.5);
        margin-left: 10px;
        background: #f8fbff;
        border-radius: 10px;
        // background: url(https://oss-model-3d.oss-cn-guangzhou.aliyuncs.com/3D-model/assets/img/003.png) no-repeat center;
        // background-size: 100% 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}

.bottleImg {
    width: 45px;
    height: 45px;
    object-fit: contain;
}
.bottleName{
    display: flex;
    flex-direction: column;
    align-items: center;
    .selTxt{
        font-size: 10px;
        color: #afafaf;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.minBottle {
    margin-top: 7px;
    position: relative;
    // background-color: rgba(52, 214, 193, 0.4);
    display: flex;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
    overflow-x: auto;
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;

    .aminBottle {
        width: 100px;
        height: 50px;
        background-color: rgba(49, 127, 204, 0.5);
        margin-left: 10px;
        background: #fefeff;
        border-radius: 10px;
        border: 1px solid #006dff;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .aminBottle1 {
        width: 100px;
        height: 50px;
        background-color: rgba(49, 127, 204, 0.5);
        margin-left: 10px;
        background: #fefeff;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}

.minBottleImg {
    width: 25px;
    height: 25px;
    object-fit: contain;
}

.modelBox {
    width: 100%;
    display: flex;

    .model {
        width: 100%;
        height: 500px;
        // background-color: #3bdfd1da;
    }

    .modelBtn {
        position: absolute;
        bottom: 30%;
        right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .saveBtn {
        position: absolute;
        bottom: 20%;
        right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}


.aBtn {
    width: 30px;
    height: 30px;
    background-color: #3c7fd6;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .rightImg {
        width: 100%;
        // height: 100%;
        object-fit: contain;
    }
}

.bottomBox {
    width: 100%;
    height: 50px;
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Alibaba PuHuiTi;
    font-weight: 400;
}
</style>