import { proxy } from 'ajax-hook'
export const hookXhr = () => {
    proxy({
        onRequest: (config, handler) => {
            XHR_HOOKS.filter(h => typeof h.matcher === "string" && h.matcher === config.url).forEach(h => {h.preSend(config)})
            handler.next(config);
        },
        onResponse: (response, handler) => {
            
            XHR_HOOKS.filter(h => typeof h.matcher === "string" && h.matcher === response.config.url).forEach(h => {h.postSend(response)})
            handler.next(response)
        }
    })
}

