export const environment = {
  production: false,
  BASEURL : 'http://34.196.236.28/',
  WEBSERVICE_URL:'http://34.196.236.28/fep/api/v1',
  WEBSERVICE_REPORTS_URL:'http://34.196.236.28/',
  BASE_URL : "/fep/",
  PAGE_SIZE:10,
  envName: 'local',
  keycloak: {
    
    issuer: 'https://sso.advatix.net/auth/',
    realm: 'XpDel-Staging',
    clientId: 'HomeAlone',
  },

  
  DASHBOARD_ORDERS_URL: 'https://tableau.advatix.net/t/FEP/views/FEPv1/OrderDashboardv2?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',
  DASHBOARD_INVENTROY_URL: 'https://tableau.advatix.net/t/FEP/views/FEPv1/WMSDashboard?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',
  DASHBOARD_ORDER_REPORT_URL: 'https://tableau.advatix.net/t/FEP/views/FEPv1/OrderReport?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',
  DASHBOARD_INVENTORY_REPORT_URL: 'https://tableau.advatix.net/t/FEP/views/FEPv1/InventoryReport2?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',
  
  FULFILLMENTREPORT:'https://tableau.advatix.net/t/FEP/views/FEPv1/FullfilmentReport?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',
  // CANNEDREPORT :'https://tableau.advatix.net/t/FEP/views/FEPv1/CannedReport?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',
  INVENTORYBYSTAGEREPORT:'https://tableau.advatix.net/t/FEP/views/FEPv1/InventoryReport?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',
  INVENTORYAGING:'https://tableau.advatix.net/t/FEP/views/FEPv1/AgingReport?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',
  EXPIREDINVENTORY:'https://tableau.advatix.net/t/FEP/views/FEPv1/Expire?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false',

  
  DASHBOARD_URL : 'https://bi.advatix.net/app/main#/dashboards/5f68a31fbc39a905b818d2fa/?embed=true&h=false&t=false&l=false&r=false',
  INVENTORYREPORT : 'https://bi.advatix.net/app/main#/dashboards/5ede6e0eaec265283404e76a/?embed=true&h=false&t=false&l=false&r=false',
  EXPIRATIONREPORT : 'https://bi.advatix.net/app/main#/dashboards/5edf072faec265283404e7c7/?embed=true&h=false&t=false&l=false&r=false',
  INVENTORYLOGS : 'https://bi.advatix.net/app/main#/dashboards/5edf0cd1aec265283404e7ef/?embed=true&h=false&t=false&l=false&r=false',
  AGINGREPORT : 'https://bi.advatix.net/app/main#/dashboards/5ee0cb15aec265283404ee1f?folder=5ee7893acd76ec2238550527&embed=true&h=false&t=false&l=false&r=false',
  HA_DASHBOARD_URL : 'https://bi.advatix.net/app/main#/dashboards/5e8b5c086721b001b4415d1a/?embed=true&h=false&t=false&l=false&r=false',
  CANNEDREPORT : 'https://bi.advatix.net/app/main#/dashboards/5f59d673cc5cc7200c2cb5b6/?embed=true&h=false&t=false&l=false&r=false',
  CXDASHBOARD : 'https://bi.advatix.net/app/main#/dashboards/5f6611acc541a22c4ca83808/?embed=true&h=false&t=false&l=false&r=false',
  ADDRESSSCHECK : 'https://bi.advatix.net/app/main#/dashboards/5f6723a8c541a22c4ca838de/?embed=true&h=false&t=false&l=false&r=false',
  ARREPORT : 'https://advatix.net/app/main#/dashboards/60362bdb0a290e2ab8e8e03f?embed=true',
  APREPORT : 'https://advatix.net/app/main#/dashboards/603628df0a290e2ab8e8e029?embed=true',
  MPREPORT : 'https://advatix.net/app/main#/dashboards/5ff99cd4482b4f2a202a332b?embed=true',


  TABLEAU:{
    'FULFILMENTREPORT' : 'https://tableau.advatix.net/t/FEP/views/FEPv5/FulfillmentReport?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false&:tabs=no',
    'CANNEDREPORT' : 'https://tableau.advatix.net/t/FEP/views/FEPv5/CannedReport?:embed=true&:toolbar=no&:showAppBanner=false&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false&:tabs=no',
    'INVENTORYREPORT' : 'https://tableau.advatix.net/t/FEP/views/FEPv5/InventoryReport?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false&:tabs=no',
    'EXPIRATIONREPORT' : 'https://tableau.advatix.net/t/FEP/views/FEPv5/ExpiredInventory?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false&:tabs=no',
    'AGINGREPORT' : 'https://tableau.advatix.net/t/FEP/views/FEPv5/InventoryAgingReport?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false&:tabs=no',
  
    'DASHBOARD' : 'https://tableau.advatix.net/t/FEP/views/FEPv5/OrderDashboardv4?:embed=true&:toolbar=top&:alerts=no&:customViews=no&:showAskData=false&:showShareOptions=false&:tabs=no',
  }
  
};
