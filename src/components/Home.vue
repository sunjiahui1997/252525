<template>
    <div>
         <div class="center">
            <div id="new-center">News Center</div>
            <div id="news">新闻中心</div>
        </div>
        <div class="btn">
            <div class="con1">
                <div class="con-item">企业咨询</div>
            </div>
            <div class="con2">
                <div class="con-item">行业动态</div>
            </div>
        </div>
        <div class="new1">
            <div class="new-item1">
                <div class="img1"></div>
                <div class="title1">此处是新闻标题</div>
                <div class="time">2020-11-19</div>
                <div class="line"></div>
                <div class="line2"></div>
                <div class="content">此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容</div>
            </div>
            <div class="new-item2">
                <div class="img1"></div>
                <div class="title1">此处是新闻标题</div>
                <div class="time">2020-11-19</div>
                <div class="line"></div>
                <div class="line2"></div>
                <div class="content">此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容</div>
            </div>
        </div>
        <div class="new1">
            <div class="new-item1">
                <div class="img1"></div>
                <div class="title1">此处是新闻标题</div>
                <div class="time">2020-11-19</div>
                <div class="line"></div>
                <div class="line2"></div>
                <div class="content">此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容</div>
            </div>
            <div class="new-item2">
                <div class="img1"></div>
                <div class="title1">此处是新闻标题</div>
                <div class="time">2020-11-19</div>
                <div class="line"></div>
                <div class="line2"></div>
                <div class="content">此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容</div>
            </div>
        </div>
        <div id="profile">
            <div id="left"></div>
            <div id="right">
                <div id="title2">Company Profile</div>
                <div id="title3">公司简介</div>
                <div id="line3"></div>
                <p id="content2">
                    我公司坐落在美丽的富春江边，离杭州35公里，离杭千高速8公里，富阳至萧山的主要公路春永线贯穿其间，水陆交通便利。我公司从1991年建厂（原江南水玻璃厂）至今已20余年。
                    我公司主要生产硅酸钾、硅酸钠、和硅酸钾钠，俗称水玻璃（泡花碱）。主要用于焊接、制皂、洗衣粉、铸造、陶瓷、白碳黑、浇注、造纸、印染等工业领域。
                </p>
                <div id="more">More</div>
            </div>
        </div>
        <div id="iTem">
            <div class="item1" id="left1">
                <div class="tiTle">碳酸钠</div>
                <div class="readMore">查看详情</div>
            </div>
            <div class="item1" id="center1">
                <div class="tiTle">碳酸钠</div>
                <div class="readMore">查看详情</div>
            </div>
            <div class="item1" id="right1">
                <div class="tiTle">碳酸钠</div>
                <div class="readMore">查看详情</div>
            </div>
        </div>
        <div id="product">
            <div class="product-item">
                <div class="text">35℃～40℃不透明中性泡化碱</div>
            </div>
            <div class="product-item">
                <div class="text">35℃～40℃透明中性泡化碱</div>
            </div>
            <div class="product-item">
                <div class="text">40℃～52℃碱性泡化碱</div>
            </div>
            <div class="product-item">
                <div class="text">40℃碱性泡化碱</div>
            </div>
            <div class="product-item">
                <div class="text">51℃碱性泡化碱</div>
            </div>
        </div>
        <div class="end">
            <div class="title-end1">联系我们</div>
            <div class="title-content">名称： 杭州富阳金顺化工建材有限公司<br>地址：浙江杭州富阳市里山镇罗家坞<br>联系人：夏仁玉<br>手 机：13805768895
                <br>邮箱：3536127966@qq.com
            </div>
            <div class="title-end2">在线留言</div>
            <input class="input-end1" type="text" placeholder="请输入您的姓名" id="input1">
            <input type="text" class="input-end1" placeholder="请输入您的电话号码" id="input2">
            <textarea style="resize: none;" name="" id="" cols="30" rows="10" placeholder="请在此输入留言内容，我们会尽快联系您"></textarea>
        </div>
        <div class="foot">
            <div class="foot1" style="margin-top: 24px;">Copyright© 2020 杭州富阳金顺化工建材有限公司 版权所有</div>
            <div class="foot1" style="margin-top: 7px;" >浙ICP备案号17000000号</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   #new-center {
        text-align: center;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333333;
        margin: 53px 0 13px 0;
        cursor: pointer;

    }

    #news {
        text-align: center;
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333333;
        cursor: pointer;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 44px;
        margin-bottom: 30px;
        cursor: pointer;
    }

    .con1 {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        width: 140px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #4489B0;

    }

    .con2 {
        width: 140px;
        height: 40px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333333;
        text-align: center;
        line-height: 40px;
    }

    .new1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .new-item1 {
        position: relative;
        display: flex;
        width: 540px;
        height: 240px;
    }

    .new-item2 {
        position: relative;
        display: flex;
        width: 540px;
        height: 240px;
    }

    .img1 {
        width: 240px;
        height: 160px;
        background: #4489B0;
        margin: 24px 300px 56px 0px;
        cursor: pointer;
    }

    .title1 {
        margin: 23px 161px 199px 254px;
        position: absolute;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333333;
        white-space: nowrap;
        cursor: pointer;
    }

    .time {
        position: absolute;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        margin: 53px 161px 199px 254px;
    }

    .line {
        width: 50px;
        height: 3px;
        background: #359EAE;
        position: absolute;
        margin: 83px 236px 154px 254px;
    }

    .line2 {
        width: 274px;
        height: 1px;
        background: #000000;
        opacity: 0.1;
        position: absolute;
        margin: 84px 12px 155px 254px;
    }

    .content {
        width: 266px;
        height: 62px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        line-height: 24px;
        position: absolute;
        margin: 103px 20px 75px 254px;
    }

    #profile {
        display: flex;
    }

    #left {
        width: 960px;
        height: 540px;
        background: #4489B0;
    }

    #right {
        width: 960px;
        height: 540px;
        background: #359EAE;
        position: relative;
    }

    #title2 {
        /* margin: 108px 694px 412px 50px; */
        top: 108px;
        right: 694px;
        left: 50px;
        bottom: 412px;
        position: absolute;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
    }

    #title3 {
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
        position: absolute;
        /* margin: 144px 815px 373px 50px; */
        top: 144px;
        right: 815px;
        bottom: 373px;
        left: 50px;
        white-space: nowrap;
    }

    #line3 {
        width: 61px;
        height: 4px;
        background: #FFFFFF;
        position: absolute;
        top: 194px;
        right: 848px;
        bottom: 342px;
        left: 51px;
    }

    #content2 {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
        position: absolute;
        top: 240px;
        right: 470px;
        bottom: 164px;
        left: 50px;
        line-height: 24px;
        white-space: normal;
        display: inline;
        width: 441px;
        height: 136px;
    }

    #more {
        width: 120px;
        height: 36px;
        border: 1px solid #FFFFFF;
        border-radius: 18px;
        position: absolute;
        top: 418px;
        right: 786px;
        bottom: 86px;
        left: 54px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
        line-height: 36px;
        cursor: pointer;
    }

    #iTem {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 56px;
        /* position: absolute; */
    }

    #left1 {
        background: #359EAE;
    }

    #center1 {
        background-color: #298C9B;
    }

    #right1 {
        background: #359EAE;
    }

    .item1 {
        width: 360px;
        height: 260px;
        position: relative;
        margin-bottom: 29px;
    }

    .tiTle {
        text-align: center;
        position: absolute;
        top: 74px;
        right: 128px;
        bottom: 151px;
        left: 126px;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 24px;
        white-space: nowrap;
    }

    .readMore {
        width: 120px;
        height: 36px;
        border: 1px solid #FFFFFF;
        position: absolute;
        top: 165px;
        right: 120px;
        bottom: 59px;
        left: 120px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
    }

    #product {
        position: relative;
        left: 420px;
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
        width: 1140px;
    }

    .product-item {
        margin-right: 60px;
        width: 320px;
        height: 320px;
        background: #CCCCCC;
        margin-top: 60px;
        position: relative;
        cursor: pointer;
    }

    .text {
        width: 320px;
        height: 60px;
        background: #000000;
        background-image: linear-gradient(#CCCCCC, #000000);
        opacity: 0.6;
        position: absolute;
        top: 260px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 60px;
        text-align: center;
    }

    .end {
        margin-top: 140px;
        width: 1920px;
        height: 400px;
        background: #359EAE;
        position: relative;
    }

    .title-end1 {
        position: absolute;
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
        top: 60px;
        right: 1382px;
        bottom: 311px;
        left: 421px;
        white-space: nowrap;
    }

    .title-content {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
        position: absolute;
        top: 133px;
        left: 420px;
        bottom: 140px;
    }

    .title-end2 {
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
        position: absolute;
        white-space: nowrap;
        top: 60px;
        right: 840px;
        bottom: 311px;
        left: 962px;
    }

    .input-end {
        position: absolute;
        top: 107px;
        left: 960px;
    }

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        line-height: 24px;
    }

    .input-end1 {
        width: 188px;
        height: 40px;
        background: #FFFFFF;
        padding-left: 12PX;
    }

    input {
        border: none;
    }
    #input1{
        position: absolute;
        top: 107px;
        right: 760px;
        bottom: 253px;
        left: 960px;
    }
    #input2 {
        position: absolute;
        top: 107px;
        right: 546px;
        bottom: 253px;
        left: 1174px;
    }

    textarea {
        width: 488px;
        height: 147px;
        background: #FFFFFF;
        border: none;
        padding-left: 12px;
        padding-top: 13px;
        position: absolute;
        top: 161px;
        right: 460px;
        bottom: 79px;
        left: 960px;
    }
    .foot{
        width: 1920px;
        height: 80px;
        background: #FFFFFF;

    }
    .foot1{
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333333;
        text-align: center;
    }
</style>