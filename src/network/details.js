import { request } from './request'

export function getDetails (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

/**
 * 因为详情界面 从后端请求的数据太过复杂， 我们需要 分装它，以便更好地使用这些数据，
 *
 *  所以我们的思想就是 ------面向对象封装-----
 *  在请求数据network中 创建一个包裹需要数据的 类 对象， 并构造一个接受数据的对象
 */

export class Goods {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.srealPrice = itemInfo.lowNowPrice
  }
}
