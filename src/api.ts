//
interface DynamicAPIResponse {
    code: number
    message: string
    data: {
        items: {
            modules: {
                module_author: {
                    face: string // 头像
                    mid: BigInt // UID
                    name: string // 昵称
                    pub_ts: BigInt // 发布时间
                }
            }
            type: string
        }
    }
}

class DynamicAPI {

}