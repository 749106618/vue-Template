import request from '../utils/request'

export function getFloordata() {
    return request({
        url: '/home/floordata',
        method: 'get'
    })
}