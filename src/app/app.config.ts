/** @ju_zkai 
 *  全局变量设置
 */
export const BASE_URL = '/HttpTask/';
export const APP_SERVE_URL = 'http://localhost:8080' + BASE_URL;

export const APP_API = {
    HttpTask : APP_SERVE_URL + 'juzkai/user/getinfo'
}

export class AppConfig {
    
    //获取设备高度
    public static getWindowHeight() {
        return window.screen.height;
    }
    //获取设备宽度
    public static getWindowWidth() {
        return window.screen.width;
    }

    //获取设备屏幕分辨率
    public static getFenbianlv() {
        let x=window.screen.width * window.devicePixelRatio;
        let y=window.screen.height * window.devicePixelRatio;
        return [x,y];
    }
    //获取本地时间  格式：2017-01-03
    public static getLocalTime() {
        let date = new Date();
        let month:any = date.getMonth() + 1;
        let strDate:any = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let dd:string = date.getFullYear() + "-" + month + "-" + strDate;
        return dd;
    }
     //获取本地时间  格式：20170103
     public static getLocalTime2() {
        let date = new Date();
        let month:any = date.getMonth() + 1;
        let strDate:any = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let dd:string = date.getFullYear() + "" + month + "" + strDate;
        return dd;
    }
}