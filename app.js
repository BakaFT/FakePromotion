import { hookXhr,hookEmber,wrap_method} from './util'

export function init(context) {
    context.rcp.postInit('rcp-fe-lol-l10n', api => {
        hookXhr()
    })
    context.rcp.postInit('rcp-fe-ember-libs', async api => {
        wrap_method(api, 'getEmber', function (original, args) {
            const res = original(...args)
            return res.then(Ember => {
                hookEmber(Ember)
                return Ember
            })
        })
    })

}


