
/**
 *
 * 自定义的一些配置信息，在main.js 通过prototype挂载到vue对象
 *
 * */

export let appConfig = {
    development: 'http://123.207.32.32:8000',
    production: '',
    cookieTime: {
        refreshToken: 60 * 60 * 24 * 7,  // refreshToken  存在7天
        accessToken: 60 * 60             // accessToken  存在1小时
    }
};
