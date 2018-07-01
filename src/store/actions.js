/*
间接跟新state的多个对象
 */
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-type'
import {reqAddress,reqFoodCategorys,reqShops} from '../api'

export default {
  //异步获取地址
  async getAddress ({commit, state}) {
    //发送异步ajax请求
    const geohash = state.latitude +','+state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if(result.code === 0){
      const address = result.data
      console.log(address)
      commit(RECEIVE_ADDRESS,{address})
    }
  },

  //异步获取食品列表
  async getCategorys ({commit, state}) {
    //发送异步ajax请求
    const result = await reqFoodCategorys()
    //提交一个mutation
    if(result.code === 0){
      const categorys = result.data
      console.log(categorys)
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },

  //异步获取商家列表
  async getShops ({commit, state}) {
    //发送异步ajax请求
    const {latitude,longitude} = state
    const result = await reqShops(longitude,latitude)
    //提交一个mutation
    if(result.code === 0){
      const shops = result.data
      console.log(shops)
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
