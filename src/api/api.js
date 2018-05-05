import {
  ISDEV
} from '../utils/constant';
import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const sujiefs = 'https://sujiefs.com'
const localhost = 'http://localhost:3000'
//const apiMall = 'https://api.tangxinmao.com'

/**
 * 发送数据到服务器
 * @param {Object} params 请求参数 {method: 'POST', data: json}
 */
const grabAdverts = (params) => wxRequest(params, localhost + '/api/adverts');
const grabDiscovers = (params) => wxRequest(params, localhost + '/api/discovers');
const grabRecommends = (params) => wxRequest(params, localhost + '/api/recommends');
const grabGoodsDetail = (params) => wxRequest(params, localhost + '/api/detail');

const apiMall = ISDEV ? localhost : sujiefs
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");  // 微信的jscode换取sessionKey
const getAdverts = (params) => wxRequest(params, apiMall + '/api/adverts/list');
const getDiscovers = (params) => wxRequest(params, apiMall + '/api/mall/discoverList');  // 发现好商品
const getRecommends = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');  // 商品推荐
const goodsDetail = (params) => wxRequest(params, apiMall + '/api/mall/goods');  // 商品详情

const registerUser = (params) => wxRequest(params, apiMall + '/api/users/register');  // 绑定手机
const getUserInfo = (params) => wxRequest(params, apiMall + '/api/users/info');  // 用户是否绑定手机号
const favoriteInfo = (params) => wxRequest(params, apiMall + '/api/users/favorites');  // 所有收藏
const goodsIsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/goodsIsFavorite');  // 是否收藏
const goodsFavorite = (params) => wxRequest(params, apiMall + '/api/users/favorited');  // 添加收藏
const goodsUnFavorite = (params) => wxRequest(params, apiMall + '/api/users/unfavorite'); // 取消收藏
const browseInfo = (params) => wxRequest(params, apiMall + '/api/users/browses');  // 所有足迹
const addBrowser = (params) => wxRequest(params, apiMall + '/api/users/browsed');  // 添加足迹
const delUserBrowser = (params) => wxRequest(params, apiMall + '/api/users/unbrowse');  // 删除足迹

// 获取发现好商品接口 (已废弃)
// const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//商品接口---begin
//首页发现商品接口
// const getRecommends = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');
// const hostGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');
// const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/mall/discoverList');

//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiMall + '/api/mall/searchGoodsList');

//查询商品详情信息
// const goodsDetail = (params) => wxRequest(params, apiMall + '/api/mall/goods');
//商品加入购物车
const addCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/add');
//用户的购物车商品列表
const cartList = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/list');
//购物车的商品选中状态
const cartCheck = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/check');
//购物车的商品选中状态(全选)
const cartCheckAll = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/checkAll');
//购物车的商品删除
const cartDel = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/delete');
//购物车的商品数量更新
const cartUpdateNum = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/updateNum');
//直接购买商品
const preOrder = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/commitData');

//支付前生成订单
const saveByCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/saveByCart');

//支付统一下单
const toPay = (params) => wxRequest(params, apiMall + '/wepay/toPay');


//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + '/api/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiMall + '/api/userSign/doSign');
//获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiMall + '/api/userSign/getSignDate');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiMall + '/api/userPoint/pointInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiMall + '/api/systemMessage/messageInfo');


//发送短信
const sendRandCode = (params) => wxRequest(params, apiMall + '/api/sms/send');



//用户收货地址
const getUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/list');

//保存用户收货地址
const saveAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/saveOrUpdate');

//用户收货地址根据id查询
const receiverInfoById = (params) => wxRequest(params, apiMall + '/api/receiverInfo/receiverInfoById');

//根据Id删除收货地址
const delUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/operation');

//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + '/api/searchkeyword/list');
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/clear');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderList');

//查询我的订单数量
const getMyOrderSize = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderSize');

//根据订单号查询详情
const getOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getOrderDetail');

//根据订单号查询详情
const getPayOrderDetail = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getPayOrderDetail');

//根据订单号查询详情
const editOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/opt');

//根据订单号查询物流
const orderExpressInfo = (params) => wxRequest(params, apiMall + '/api/orderExpress/orderExpressInfo');

//查询用户的已订购产品
const goodsUserOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/goodsUserOrderList');

//退货操作
const refundApply = (params) => wxRequest(params, apiMall + '/api/mall/refund/saveRefundApply');

//用户相关信息--end

//商品分类--begin
//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList');
//商品分类--end

//查询广告列表
// const getAdverts = (params) => wxRequest(params, apiMall + '/api/adverts/list');

module.exports = {
  getRecommends,
  getDiscovers,
  getGoodsList,
  goodsDetail,
  wxJsCode2Session,
  userSginInfo,
  doSign,
  addCart, cartList, cartCheck, cartCheckAll, cartDel, cartUpdateNum,
  preOrder,refundApply,
  pointInfo,
  browseInfo,addBrowser,delUserBrowser,
  favoriteInfo,
  messageInfo,
  registerUser,sendRandCode,
  getUserInfo,
  getUserAddress,
  saveAddress,
  receiverInfoById,
  getUserAddress,
  addSearchKeyword, searchKeywordList, clearSearchKeyword,
  getMyOrderList, saveByCart,toPay,
  rootCtegoryList, childGoodsCatetoryList,
  getOrderInfo,
  editOrderInfo, goodsUserOrderList,
  orderExpressInfo,
  delUserAddress,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  getMyOrderSize,getPayOrderDetail,
  getAdverts,
  getSignDate,
  grabAdverts,
  grabDiscovers,
  grabRecommends,
  grabGoodsDetail
}
