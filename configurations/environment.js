const variables = {
    local: {
        description: 'this is local',
        api: 'local.api',
        token: 'local.token'
    },
    dev: {
        description: 'this is dev',
        api: 'dev.api',
        token: 'dev.token'
    },
    prod: {
        description: 'this is prod',
        api: 'prod.api',
        token: 'prod.token'
    }
}

/*let Environment = {
    get(env) {
        console.log('env : ' + env)
        return variables[env]
    }
}*/

/*export function get(env) {
    console.log('env : ' + env)
    return variables[env]
}*/

export default class Environment {
    static get(env) {
        console.log('env : ' + env)
        return variables[env]
    }
}
