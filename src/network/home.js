// eslint-disable-next-line standard/object-curly-even-spacing
import { request } from './request'

export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}
