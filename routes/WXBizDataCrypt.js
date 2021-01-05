/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-05 10:50:10
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-05 10:50:10
 */
// var crypto = require('crypto')

// function WXBizDataCrypt(appId, sessionKey) {
//   this.appId = appId
//   this.sessionKey = 'fwefewfewfewfwefwe'
// }

// WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
//   // base64 decode
//   var sessionKey = Buffer.from(this.sessionKey, 'base64')
//   encryptedData = Buffer.from(encryptedData, 'base64')
//   iv = Buffer.from(iv, 'base64')
//   try {
//      // 解密
//     var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
//     // 设置自动 padding 为 true，删除填充补位
//     decipher.setAutoPadding(true)
//     var decoded = decipher.update(encryptedData, 'binary', 'utf8')
//     decoded += decipher.final('utf8')
//     decoded = JSON.parse(decoded)
//   } catch (err) {
//     throw new Error('Illegal Buffer')
//   }

//   if (decoded.watermark.appid !== this.appId) {
//     throw new Error('Illegal Buffer0-----')
//   }

//   return decoded
// }

// module.exports = WXBizDataCrypt

'use strict'
/**
 * WxCrypt 微信消息加解密的方法
 * @return new WxCrypt(wxConfig)
 * 返回一个单例即可，不需要重复引用
 */
const crypto = require('crypto');
const wxConfig = {
  // 传入配置信息
  token: 'fwefewfewfewfwefwe',
  appid: 'wx48f59615d2b7c7fd',
  msg_signature: 'a5cfea00a6872c712857ffe8ac477fa6fae5608a',
  encodingAESKey: 'gfwlgg7BZyTe08ifTZBa8h6FZB9axKNX2F5dpMcAFv5'
}
class WxCrypt {
  constructor(opts) {
    //初始化需要用到的属性
    this.token = opts.token;
    this.appid = opts.appid;
    this.msg_signature = opts.msg_signature; //query 传进来签名
    this.aesKey = Buffer.from(opts.encodingAESKey + '=', 'base64')
    this.IV = this.aesKey.slice(0, 16)
  }
  encrypt(xmlMsg) {
    /*
     *@params String xmlMsg 格式化后的 xml 字符串
     *@return String 加密后的字符串 填入到 Encrypt 节点中
     * 参照官方文档 需要返回一个buf: 随机16字节 + xmlMsg.length(4字节）+xmlMsg+appid。
     * buf的字节长度需要填充到 32的整数，填充长度为 32-buf.length%32, 每一个字节为 32-buf.length%32
     */
    let random16 = crypto.pseudoRandomBytes(16);
    let msg = new Buffer(xmlMsg);
    let msgLength = new Buffer(4);
    msgLength.writeUInt32BE(msg.length, 0);

    let corpId = new Buffer(this.appid);

    let raw_msg = Buffer.concat([random16, msgLength, msg, corpId]);
    let cipher = crypto.createCipheriv('aes-256-cbc', this.aesKey, this.IV);
    cipher.setAutoPadding(false);//重要，autopadding填充的内容无法正常解密
    raw_msg = this.PKCS7Encode(raw_msg);

    let cipheredMsg = Buffer.concat([cipher.update(/*encoded*/raw_msg), cipher.final()]);

    return cipheredMsg.toString('base64');
  }

  decrypt(text) {
    /*
     *@params String text 需要解密的字段（Encrypt节点中的内容）
     * @return String msg_content 返回消息内容（xml字符串）
     */

    let plain_text;
    let decipher = crypto.Decipheriv('aes-256-cbc', this.aesKey, this.IV)
    // crypto.Decipheriv == crypto.createDecipheriv 两个方法是一样的
    decipher.setAutoPadding(false);//重要

    let decipheredBuff = Buffer.concat([decipher.update(text, 'base64'), decipher.final()])
    decipheredBuff = decipheredBuff
    decipheredBuff = this.PKCS7Decode(decipheredBuff)
    let len_netOrder_corpid = decipheredBuff.slice(16)
    //切割掉16个随机字符，剩余为 (4字节的 msg_len) + msg_content(长度为 msg_len ) + msg_appId 
    let msg_len = len_netOrder_corpid.slice(0, 4).readUInt32BE(0)
    let msg_content = len_netOrder_corpid.slice(4, msg_len + 4).toString('utf-8')
    let msg_appId = len_netOrder_corpid.slice(msg_len + 4).toString('utf-8')
    return msg_content
  }
  PKCS7Decode(buff) {
    /*
     *去除尾部自动填充的内容
     */
    let padContent = buff.length - 1
    if (padContent < 1 || padContent > 32) {
      padContent = 0
    }
    let padLen = padContent;//根据填充规则，填充长度 = 填充内容，这一步赋值可以省略
    return buff.slice(0, buff.length - padLen)
  }
  PKCS7Encode(buff) {
    let blockSize = 32;
    let needPadLen = 32 - buff.length % 32
    if (needPadLen == 0) {
      needPadLen = blockSize
    }
    let pad = new Buffer(needPadLen)
    pad.fill(needPadLen)
    let newBuff = Buffer.concat([buff, pad])
    return newBuff
  }
}
var wxCrypt = new WxCrypt(wxConfig);
module.exports = wxCrypt;