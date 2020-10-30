const { VUE_APP_API_ENV } = process.env;

const Config = {
  base: {
    appId: "wx1018d54aa9dbc9d7",
    mainStoreId: "TSRORVZ17ZXD9",
    loginRedirectUrl: "http://agent.xzintl.com/api/salesmanInfo/WeChatCallBack",
    shopOrigin: "http://shop_${storesysId}.m.xzintl.com",
    cashierOrigin: "http://cashier.xzintl.com",
    passportOrigin: "http://passport.xzintl.com"
  },
  dev: {},
  beta: {
    appId: "wx1018d54aa9dbc9d7",
    loginRedirectUrl: "http://agent.xzintl.com/api/salesmanInfo/WeChatCallBack",
    shopOrigin: "http://shop_${storesysId}.m.xzintl.com",
    cashierOrigin: "http://cashier.xzintl.com",
    passportOrigin: "http://passport.xzintl.com"
  },
  pro: {
    appId: "wx1018d54aa9dbc9d7",
    loginRedirectUrl: "http://agent.xzintl.com/api/salesmanInfo/WeChatCallBack"
  }
};

export default Object.assign({}, Config.base, Config[VUE_APP_API_ENV || "pro"]);
