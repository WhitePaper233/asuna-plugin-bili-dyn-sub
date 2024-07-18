import { Context } from "koishi";

// 依赖注入
export const inject = {
    required: ['database']
}

// 扩展 koishi 的 Tables 接口
declare module 'koishi' {
    interface Tables {
        'bili-dyn-sub-watch-list': BiliDynWatchList
    }
}

// 数据库中的监视列表
export interface BiliDynWatchList {
    id: number
    uid: BigInt
    operator: BigInt
}

// B站动态监视器
class DynamicWatcher {
    // 监视 UID 列表
    watchList: BigInt[]
    // 上次更新时间记录
    lastUpdateTimeMap: Map<BigInt, Number>

    constructor(ctx: Context) {
        // 从数据库中读取监视列表
        ctx.database.get('bili-dyn-sub-watch-list', []).then((watchList) => {
            this.watchList = watchList.map((item: BiliDynWatchList) => item.uid)
        })

        // 获取最新动态时间
        this.lastUpdateTimeMap = new Map()

    }
}