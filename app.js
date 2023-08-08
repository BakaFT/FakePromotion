import { hookXhr} from './util'

export function init(context) {
    context.rcp.postInit('rcp-fe-lol-l10n', api => {
        hookXhr()
    })
}


