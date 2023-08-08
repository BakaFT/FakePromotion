const REWARD = [
    {
        matcher: "/lol-honor-v2/v1/level-change",
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            // Honor level 3 checkpoint 2
            // with 4396 times RECENT_HEART
            // and a reward HONOR_LEVEL_5_CAPSULE,honor lv3 reward
            response.response = "{\"actionType\":\"CHECKPOINT_REACHED\",\"currentState\":{\"checkpoint\":2,\"level\":3,\"rewardsLocked\":false},\"dynamicHonorMessage\":{\"messageId\":\"RECENT_HEART\",\"value\":4396},\"previousState\":{\"checkpoint\":1,\"level\":3,\"rewardsLocked\":false},\"reward\":{\"quantity\":1,\"rewardType\":\"HONOR_LEVEL_5_CAPSULE\"}}"
        }
    }
]

const PROMOTION = [
    {
        matcher:'/lol-ranked/v1/notifications',
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            // PROMOTE TO `NO RANKED LEVEL` lmao, please show me how it looks like in en lang
            // response.response = '[{"displayType":"VIGNETTE","msgId":"11223344","notifyReason":"LEAGUE_PROMOTED","queueType":"RANKED_SOLO_5x5"}]'

            // PROMOTE TO CHANLLENGER
            response.response = '[{"tier":"CHALLENGER","displayType":"VIGNETTE","msgId":"12322224","notifyReason":"LEAGUE_PROMOTED","queueType":"RANKED_SOLO_5x5"}]'
        }
    }
]

// YOU MUST EXPORT WHAT U WANT TO USE HERE using `...VAR_NAME`
export const XHR_HOOKS = [
    ...PROMOTION
]

