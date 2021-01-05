/*
 * @Author: your name
 * @Date: 2021-01-01 14:27:04
 * @LastEditTime: 2021-01-04 15:15:45
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \yunkexinglianc:\Users\zhamgzifang\Desktop\新建文件夹 (2)\support.js
 */

// 直接访问的
// http://www.yxrcw.cn/smsreg7.php?YSJ=15738023819

var dsf = [
    {
        url: "http://hz.7qi.me/?&rand=59e273695fbcd1e53b62510ea0a7305b",
        sleep: 200,
        input: ".form-control",
        but: ".btn.btn-primary",
        end: "#goodTypeContents .btn.btn-info"
    },
    {
        url: "http://lemon555.xyz/",
        input: ".form-control",
        but: ".btn.btn-primary",
        sleep: 200,
        end: "#goodTypeContents .btn.btn-info"
    },
    // {
    //     url: "http://www.duanxinhongzhaji.com/free/index.php",
    //     input: ".form-control",
    //     but: ".btn.btn-danger",
    //     end: ".btn.btn-success"
    // },
]
var fz = [
    {
        url: "https://wptao.com/login-mobile?login_type=reg",
        step: [
            {
                content: [
                    {
                        input: "#mobile_username",
                        value: "277010552@qq.com"
                    },
                    {
                        input: "#mobile_password",
                        value: "123456789aA."
                    },
                    {
                        input: "#mobile_nickname",
                        value: "277010552@qq.com"
                    },
                    {
                        input: "#mobile_number",
                    },
                ]
            }, {
                but: "#mobile-getcode"
            }
        ]
    },
    {
        url: "https://www.yuntongxun.com/user/reg/init",
        step: [
            {
                content: [
                    {
                        input: "[name='email']",
                        value: "277010552@qq.com"
                    },
                    {
                        input: "#userPwd",
                        value: "123456789aA."
                    },
                    {
                        input: "#rePwd",
                        value: "123456789aA."
                    },
                    {
                        input: "#mobile"
                    },
                ]
            }, {
                but: "#sendStep1"
            }
        ]
    },
    {
        url: "https://passport.58.com/login/?path=https%3A%2F%2Fbj.58.com%2Fsearchjob.shtml%3Fspm%3D184028181106.zhaopin_baidu%26utm_source%3D12345&source=58-homepage-pc&PGTID=0d202409-0000-1631-cafb-6dba9489c896&ClickID=5",
        step: [
            {
                but: ".phonenum_item"
            },
            {
                content: [
                    {
                        input: "#mask_body_item_phonenum",
                    }
                ]
            },
            {
                but: "#mask_body_item_getcode"
            },
        ],
    },
    {
        url: "https://www.xxsy.net/reg",
        step: [
            {
                content: [
                    {
                        input: "[name='mobileNumber']"
                    },
                    {
                        input: "[name='userPwd']",
                        value: "123456aA."
                    },
                    {
                        input: "[name='confirmUserPwd']",
                        value: "123456aA."
                    },
                ]
            },
            {
                but: "[name='getMobileCode']"
            }
        ]
    },
    {
        url: "http://www.njxlmbj.cn/huiyuanzc.jsp",
        step: [
            {
                content: [

                    {
                        input: "#tel"
                    },
                    {
                        input: "#pwd",
                        value: "123456aA"
                    },
                    {
                        input: "#repwd",
                        value: "123456aA"
                    },
                ]
            },
            {
                but: "#codes"
            }
        ]
    },
    {
        url: "http://www.cofeed.com/register.html",
        step: [
            {
                content: [
                    {
                        input: '#username',
                        value: "aA123456789a"
                    },
                    {
                        input: "#userpwd",
                        value: "aA123456789"
                    },
                    {
                        input: "#mobile"
                    },
                ]
            },
            {
                but: "#regbtn"
            }
        ]
    },
    {
        url: "https://account.ppdai.com/pc/login",
        step: [
            {
                but: "#login_toRegister"
            },
            {
                content: [
                    {
                        input: '#Mobile'
                    },
                    {
                        input: '#Password',
                        value: "123456789aA."
                    }
                ]
            },
            {
                but: "#getvefydata"
            }
        ]
    },
    {
        url: "https://reg.suning.com/person.do",
        step: [
            {
                but: ".agree-btn"
            },
            {
                content: [
                    {
                        input: '#mobileAlias'
                    }
                ]
            },
            {
                but: "#sendSmsCode"
            }
        ]
    },
    {
        url: "https://www.findlaw.cn/register/",
        step: [
            {
                content: [
                    {
                        input: "#mobileu",
                    },
                ]
            },
            {
                but: ".submitBtn"
            },
            {
                but: ".sendBtn.fl"
            },
        ]
    },
    {
        url: "https://www.kugou.com/reg/web/",
        step: [
            {
                content: [
                    {
                        input: "#t02Mobile",
                    },
                ]
            },
            {
                but: "#t02GetCode"
            },
            {
                but: "#t02GetCode"
            },
        ]
    },
    {
        url: "https://passport.xinpianchang.com/signup?redirect_uri=https%3A%2F%2Fwww.vmovier.com%2F404",
        step: [
            {
                content: [
                    {
                        input: "#signup_nickname",
                        value: "15738023811"
                    },
                    {
                        input: "#signup_phone",
                    }
                ]
            },
            {
                but: ".ant-input-wrapper.ant-input-group .ant-input-group-addon a"
            }
        ]
    },
    {
        url: "http://www.b2star.com/register",
        step: [
            {
                content: [
                    {
                        input: "#username",
                        value: "username"
                    },
                    {
                        input: "#password",
                        value: "123456789"
                    },
                    {
                        input: '[name="cpassword"]',
                        value: "123456789"
                    },
                ]
            },
            {
                but: "#getSmsCodeBtn"
            }
        ]
    },
    {
        url: "http://www.blissun.com/blissun/1503/web/register.jsp",
        step: [
            {
                but: ".one2"
            },
            {
                content: [
                    {
                        input: "#text_phone",
                    }
                ]
            },
            {
                but: "#getyzm"
            },
        ]
    },

    {
        url: "https://passport.mysteel.com/join.jsp?site=www.mysteel.com",
        step: [
            {
                content: [
                    {
                        input: '[name="my_username"]',
                        value: "r423fawrtr4"
                    },
                    {
                        input: '[name="my_password"]',
                        value: "a123456789"
                    },
                    {
                        input: '[name="mobile"]'
                    }
                ]
            }, {
                but: ".getCode"
            }
        ]
    },
    {
        url: "http://web.4399.com/user/reg.php",
        step: [{
            but: '[ref="myform_phone"]',
            content: [
                {
                    input: "[name='phone']",
                },
            ]
        }, {
            but: ".sendCode"
        }]
    },
]

// https://my.buildhr.com/register

// 電話
var dh = [
    {
        url: "https://reg.wangyuan.com/userRegister?service=pt",
        input: "[placeholder='请输入11位手机号码']",
        but: ".voice-code span"
    },
    {
        url: "https://mail.10086.cn/",
        step: [
            {
                but: "#Sms",
                content: [
                    {
                        input: '#txtUser',
                    },
                ]
            },
            {
                sleep: 300,
                but: '[rev="voiceStyleLoginMail139"]'
            }
        ]
    }
]


// 其他步骤完成的
var list = [
    {
        url: "https://www.gucci.cn/zh/member/login",
        input: "#loginMobile",
        but: "#geeSendLoginSmsMessage"
    },
    {
        url: "https://www.nike.com/register",
        sleep: 3000,
        input: ".phoneNumber",
        but: ".sendCodeButton"
    },
    {

        url: "https://passport.migu.cn/login?layout=3&sourceid=204001&andPass=0&qq=1&relayState=2%7Chttps%253A%252F%252Fwap.cmread.com%252Fr%252Fp%252FcenterV1_1.jsp%253Bjsessionid%253D7C37583EDF7605D894E1C4E69EBB7960.8ngFwnvWo.2.0%253Flayout%253D3%2526ln%253D9762_482049_98716618_11_1_L3%2526vt%253D3&weibo=1&apptype=2&display=wap&logintype=2&fr=1&ln=9762_482049_98716618_11_1_L3&purl=%2Fr%2Fp%2FcenterV1_1.jsp%3Bjsessionid%3D7C37583EDF7605D894E1C4E69EBB7960.8ngFwnvWo.2.0%3Flayout%3D3",
        input: "#J_PhoneOne",
        but: "#J_GetMsgCodeOne"
    },
    {
        url: "http://www.shuhai.com/register",
        input: "#mobile",
        but: "#getcode"
    },
    {
        url: "https://user.ifeng.com/register",
        input: "[placeholder='请输入手机号']",
        but: ".getMsgPinBtn-1xPiGSLt "
    },
    {
        url: "https://avg.163.com/login?redirect=%2Fhome&type=register",
        input: "[name='mobile']",
        but: ".avg-button.avg-button-primary.avg-button-default.send-code-button"
    },
    {
        url: "https://accounts.douban.com/passport/login_popup?login_source=anony",
        input: ".account-form-input",
        but: ".account-form-field-code"
    },
    {
        url: "https://login.51job.com/register.php?lang=c&url=http%3A%2F%2Fjobs.51job.com%2F",
        input: "#phone",
        but: "#btn7"
    },
    {
        url: "https://mkt.51job.com/tg/sem/LP_2020_1.html?from=baiduad",
        input: "#userPhone_m",
        but: "#get_yzm_m"
    },
    {
        url: "https://wow.liepin.com/t1003109/a659ada3.html?mscid=s_00_t00&utm_source=baidu&utm_medium=cpc&utm_campaign=2019%2D%E9%80%9A%E7%94%A8%2D%E6%A0%B8%E5%BF%83&utm_content=%E9%80%9A%E7%94%A8%2D%E6%8B%9B%E8%81%98%2D%E6%A0%B8%E5%BF%83&utm_term=%E6%8B%9B%E8%81%98%20%E7%BD%91&bd_vid=9657781892565575433",
        input: ".violet-input.violet-input-large",
        sleep: 1000,
        but: ".btn-phone-code"
    },
    {
        url: "https://passport.58.com/reg/?path=https%3A%2F%2Fbj.58.com%2Fsearchjob.shtml%3Fspm%3D184028181106.zhaopin_baidu%26utm_source%3D12345&source=58-homepage-pc&PGTID=0d202409-0000-18cd-f963-24a0c617d2ad&ClickID=4",
        input: "#mask_body_item_phonenum",
        but: "#mask_body_item_getcode"
    },
    {
        url: "https://www.lagou.com/landing-page/pc/trade-A.html?utm_source=m_cf_cpc_baidu_pc&m_kw=baidu_cpc_hz_85a00b_aaa123_%E6%8B%9B%E8%81%98%E5%B7%A5%E4%BD%9C%E7%BD%91&bd_vid=11099341348824016293",
        input: "#lp_phone",
        but: ".getcode"
    },
    {
        url: "http://www.niwo.net.cn/pages/register.html#/?invite=&from=",
        input: ".el-input__inner",
        but: ".el-button.el-button--primary"
    },
    {
        url: "https://work.weixin.qq.com/wework_admin/register_wx?from=sem_baidu&keyword=mail&derivative=1013040131&bd_vid=11026495619602245559",
        input: "#register_tel",
        but: "#get_vcode"
    },
    {
        url: "https://passport.baidu.com/v2/?reg&tpl=service_feedback&u=",
        input: "#TANGRAM__PSP_4__phone",
        but: "#TANGRAM__PSP_4__verifyCodeSend"
    },
    // ...dsf, //先走第三方
    {
        url: "https://kingcard.dgunicom.com/newMsg/onLineGo/html/fill_new.html?sceneFlag=03&goodsId=981711282733&productName=%E9%98%BF%E9%87%8C%E5%B0%8F%E5%AE%9D%E5%8D%A1&p=51&c=580&u=1l%2FoEhEgZJXMtwUyWyfiSQ%3D%3D&s=03&sceneFlag=03&id=7443&dgqd=&xid=null",
        but: "#captcha",
        input: "#mobilePhone"
    },
    {
        url: "https://www.dingtalk.com/oasite/register_new.htm?source=50054&lwfrom=20171202020920642962601901#/",
        input: "#mobileReal",
        but: ".ant-btn.ant-btn-primary.ant-btn-lg.ant-btn-block"
    },
    {
        url: "https://account.youzan.com/register?clues_source=24&business_id=133&intention_product=wsc_dd&agent_type=pc&from_source=baidu_sem3_wsc_16777",
        input: ".zent-input",
        but: ".account-captcha__btn.js-get-identify-code.account-captcha__btn--disable"
    },
    {
        url: "http://www.lazada100.com/reg.html",
        input: "#LAY-user-login-cellphone",
        but: "#LAY-user-getsmscode"
    },
    {
        url: "http://id.seewo.com/m/register",
        input: ".username",
        but: ".needsclick"
    },
    {
        url: "http://www.qlmzp.com/user/user_reg.php",
        input: "#mobile",
        but: "#sms_send"
    },
    {
        url: "http://www.xdyjd.com/register/",
        input: "#mobile",
        but: ".btn.btn-default.mobicode"
    },
    {
        url: "http://www.chaiqian88.com/afdglxt/member/register/index.php?tobind=0&groupid=1",
        input: "#phone",
        but: "#smsbtn"
    },
    {
        url: "https://my.51aimei.com/index.php?m=member&c=index&a=register",
        input: "#telephones",
        but: "#sendbutton"
    },
    {
        url: "https://easternmiles.ceair.com/members/register.html",
        input: "#isMobile",
        but: ".innerBtn.widthFixed"
    },
    {
        url: "http://www.17mol.com/user/reg/",
        input: "#Mobile",
        but: "#MobileCodeBtn"
    }, {
        url: "http://www.yaoduo.net/index.php?c=register",
        input: "#mobile",
        but: "#mobile_send_status"
    },
    {
        url: "https://h5.51credit.com/www/login/regist.html?service=https%3A%2F%2Fwww.51credit.com%2Floan%2F",
        input: "#phone",
        but: "#sendCodeBtn"
    },
    {
        url: "http://www.his123.com/register.caco3",
        input: "#username",
        but: '#sendSMS'
    },
    {
        url: "http://www.wlrcw.com/members/register/utype/2.htm",
        input: "[name='mobile']",
        but: "#J_getverificode"
    },
    {
        url: "http://www.7x24lib.com/e/member/register/?groupid=1",
        input: "#phone",
        but: "#sendag"
    },
    {
        url: "http://member.csgf.org.cn/MemberCenter/RegStep1.aspx",
        input: "#ctl00_PageBody_txtMob",
        but: "#btnMob"
    },
    {
        url: "http://www.minshenglife.com/regist",
        input: "[placeholder='输入手机号']",
        but: "#obtainCode"
    },
    {
        url: "http://www.yxrcw.cn/register.html",
        input: "[name='YSJ']",
        but: "#btsms"
    },
    {
        url: "https://www.wydbw.com/login_phone.asp",
        input: ".u-input.iptMobile",
        but: ".getMbCode"
    },
    {
        url: "http://ksbm.aspia.cn/Home/Public/register.html",
        input: "#register_phone",
        but: "#smsCode"
    },
    {
        url: "https://www.shanchuangjiaoyu.com/index/login/login_c.html",
        input: "#loginCode_tel",
        but: "#loginGetCode"
    },
    {
        url: "http://hlwjjd.hunan.gov.cn/portal/portalIndex/toRegister",
        input: "#phone",
        but: "#sendMessage"
    },
    {
        url: "http://www.hndyjyfw.gov.cn/register.html",
        input: "#phone",
        but: ".getYzm2"
    },
    {
        url: "https://www.sporax.com.cn/Login/register.html",
        input: "#Mobile",
        but: ".verification"
    },
    {
        url: "https://www.yunhao.net/register",
        input: "#phone",
        but: "#smsCodeBtn"
    },
    {
        url: "https://user.cli.im/join",
        input: '[name="username"]',
        but: "#confirm_send_again"
    },
    {
        url: "http://login.saq.org.cn/register?r=",
        input: "#sjhm",
        but: ".yzm"
    },
    {
        url: "http://ucenter.51taoshi.com/register.do",
        input: "#field07",
        but: "#showSecond"
    }, {
        url: "https://reg.wangyuan.com/userRegister?service=pt",
        input: "[placeholder='请输入11位手机号码']",
        but: ".get-code"
    },
    {
        url: "http://www.xfsyhx.com/page/user/registered.html",
        input: "#txtUserName",
        but: ".getIphoneMsg"
    },
    {
        url: "http://www.hnjtaq.com/system/user/reg?sy=0",
        input: "#phone",
        but: ".layui-btn.hqyzm"
    },
    {
        url: "https://www.intuan.com/reg",
        input: "#mobile",
        but: ".reg_tel_yz"
    },
    {
        url: "https://www.renrendai.com/pc/passport/index/login",
        input: "#reg_username",
        but: "#reg_verif"
    },
    {
        url: "http://www.8864.com/virtualcurrency/html/reg.html",
        input: '[name="passportName"]',
        but: ".sendYzm"
    },
    {
        url: "http://dc.m10027.com/register.html",
        input: ".phoneNumber",
        but: "#getPhoneYZM"
    },
    {
        url: "https://www.zzghw.com/user/smslogin",
        input: "#phone",
        but: ".btn.btn-danger"
    },
    {
        url: "https://www.haoship.cn/login",
        input: "#mobile",
        but: "#smscode"
    },
    {
        url: "http://www.hrsy.net.cn/Register",
        input: ".inp",
        but: "#captcha"
    },
    {
        url: "http://www.yuntaigo.com/client/yzmlogin_pc.jsp",
        input: "#tel",
        but: "#codeId"
    },
    {
        url: "http://m.dixintong.com/userlogin/login_sms.aspx",
        input: "#txtphone",
        but: "#btnverify"
    },
    {
        url: "https://2car.haval.com.cn/quicklogin",
        input: '#phone',
        but: ".u-getcode.j-getcode"
    },
    {
        url: "https://m.fkw.com/reg/reg.html?bizType=0&weChatType=0",
        input: '#mobile',
        but: "#verifyCodeBtn"
    },
    {
        url: "http://www.1-tree.com.cn/index/register/register",
        input: '[name="username"]',
        but: '#Obtaincode'
    },
    {
        url: "https://id1.cloud.huawei.com/CAS/portal/userRegister/regbyphone.html",
        input: "#username",
        but: "#getValiCode"
    },
    {
        url: "https://shop.haojue.com/user.php?act=register",
        input: '[name="mobile"]',
        but: '#btn'
    },
    {
        url: "https://www.zhihu.com/signin?next=%2F",
        input: "[name='username']",
        but: ".CountingDownButton"
    },
    {
        url: "http://www.ljjhome.com/index.php?ac=member&at=reg",
        input: "#username",
        but: "#send"
    },
    {
        url: "https://www.sdbao.com/main/list",
        input: "[placeholder='输入手机号']",
        but: ".login-wrap-code",
        sleep: 200
    },
    {
        url: "https://login.hnzwfw.gov.cn/tacs-uc/naturalMan/register",
        input: ".phone",
        but: "#btnSendCode"
    },
    {
        url: "http://xsm20201022.zhuanshangjin.cn/signup.html",
        input: "#mobile",
        but: "#btnSms"
    },
    {
        url: "https://register.sdo.com/register/index?appId=201&areaId=200&serviceUrl=http%3a%2f%2fwww.sdo.com",
        input: "#mobile",
        but: "#js_get_phone"
    },
    {
        url: "https://member.leiting.com/register.html",
        input: "#phoneNum",
        but: "#register_getcodebtn"
    },
    {
        url: "http://my.365jia.cn/signup/step1",
        input: "[name='mobile']",
        but: "#delay_get"
    },
    {
        url: "https://id.oneplus.com/index.html?&callback=https%3A%2F%2Faccount.oneplus.com%2Fcn%2F&language=zh-CN",
        input: "[placeholder='请输入手机号码']",
        but: ".input_code"
    },
    {
        url: "https://user.mihoyo.com/#/login/captcha?cb_route=%2Faccount%2Fhome",
        input: ".input-container > input",
        but: ".input-inner-btn"
    },
    {
        url: "http://www.lyrce.net/register.html",
        input: ".lir2 > input",
        but: "#btsms"
    },
    ...dh,
    {
        url: "https://reg.ztgame.com/",
        input: "[placeholder='请输入11位手机号']",
        but: "[name='get_mpcode']"
    },
    {
        url: "https://www.360jie.com.cn/",
        input: "[name='mobile']",
        but: "#btnSendCode1"
    },
    {
        url: "https://my.baihe.com/register/?spm=2.13.24.69.99",
        input: "[name='goldUser_email']",
        but: "#mobileValiCode_btn"
    },
    {
        url: "https://www.airkunming.com/#/user/register",
        input: "#mobile",
        but: ".sms-code"
    },
    {
        url: "https://diy.youzanyun.com/login/retrieve",
        input: ".zent-input",
        but: ".sms-btn"
    },
    {
        url: "https://www.ahxiangqin.cn/index.php?c=passport&a=reg",
        input: "[name='mobile']",
        but: ".action-send-mobile-code"
    },
    {
        url: "http://e.viptrip365.com/mobileRegistration/toregister.hlt",
        input: "#login-tel-input",
        but: "#btn"
    },
    ...fz
]
var { click, type } = JSON.parse(process.argv[2])
let chrome = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');
async function example() {
    // let driver = await new Builder().forBrowser('chrome').build();
    if (type === 'end') {
        list = dsf
    }
    try {
        var Options = new chrome.Options().headless().addArguments("--headless").addArguments("--disable-gpu").addArguments("window-size=1024,768").addArguments("--no-sandbox").addArguments("--ignore-certificate-errors").addArguments("--ignore-ssl-errors")
        let driver = await new Builder().forBrowser('chrome').setChromeOptions(Options).build();
        try {
            for (var i in list) {
                await driver.sleep(100)
                console.log('前往URL:' + list[i].url)
                await driver.get(list[i].url).then((v, r) => {
                    console.log(v, r)
                })
                console.log('已加载完成页面',)
                try {
                    if (list[i].step) {
                        for (var j in list[i].step) {
                            var _j = list[i].step[j]
                            if (_j.sleep) {
                                console.log('暂停:' + _j.sleep)
                                await driver.sleep(_j.sleep)
                            }
                            if (_j.but) {
                                console.log('执行click',)
                                await driver.findElement(By.css(type === 'end' ? _j.end : _j.but)).click()
                            }
                            if (_j.content) {
                                console.log('输入框输入内容')
                                for (var _om in _j.content) {
                                    await driver.findElement(By.css(_j.content[_om].input)).sendKeys(_j.content[_om].value || click);
                                }
                            }
                        }
                    } else {
                        if (list[i].sleep) {
                            console.log('暂停:' + list[i].sleep)
                            await driver.sleep(list[i].sleep)
                        }
                        console.log('输入框输入内容')
                        await driver.findElement(By.css(list[i].input)).sendKeys(click);
                        console.log('执行click',)
                        await driver.findElement(By.css(type === 'end' ? list[i].end : list[i].but)).click()
                    }
                } catch (error) {
                    console.log('报错索引：' + i)
                    console.log(error)
                }
            }
        } finally {
            console.log('结束')
            await driver.quit();
        }
    } catch (error) {
        console.log(error)
    }

}
example()