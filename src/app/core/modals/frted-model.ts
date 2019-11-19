/**
 * 主菜单编号
 */
export enum MENU_CODE {
    /**
     * ES20151 = 1
     */
    ES2015 = 1,
    /**
     * JAVASCRIPT = 2
     */
    JAVASCRIPT = 2,
    /**
     * ALI_PAY = 3
     */
    ALI_PAY = 3,
}

/**
 * 阿里支付接口方法配置项
 */
export class MethodConfig {
    /**
     * 可选(128) 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body。
     */
    body: string;
    /**
     * 必选(256) 商品的标题/交易标题/订单标题/订单关键字等
     */
    subject: string;
    /**
     * 必选(64) 商户网站唯一订单号
     */
    out_trade_no: string;
    /**
     * 必选 订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]
     */
    total_amount: number;
    /**
     * 必选 用户付款中途退出返回商户网站的地址
     */
    quit_url: string;
    /**
     * 必选(64) 销售产品码，商家和支付宝签约的产品码
     */
    product_code: string;
}

/**
 * 阿里平台接口通用配置项
 */
export class CommonConfig {
    /**
     * 支付宝分配给开发者的应用ID
     */
    app_id: string;
    /**
     * 接口名称  手机网页支付接口:alipay.trade.wap.pay
     */
    method: string;
    /**
     * 请求使用的编码格式，如utf-8,gbk,gb2312等
     */
    charset: string = "utf-8";
    /**
     * 商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2
     */
    sign_type: string = "RSA2";
    /**
     * 商户请求参数的签名串，详见签名
     */
    sign: string;
    /**
     * 发送请求的时间，格式"yyyy-MM-dd HH:mm:ss"
     */
    timestamp: string;
    /**
     * 调用的接口版本，固定为：1.0
     */
    version: string = "1.0";
    /**
     * 请求参数的集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递，具体参照各产品快速接入文档
     */
    biz_content: string;
}
