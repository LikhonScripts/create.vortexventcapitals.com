'use strict';const a5_0x3aadc5=a5_0x2f3c;(function(_0x11ada7,_0x717a4f){const _0x117e5d=a5_0x2f3c,_0x49f26c=_0x11ada7();while(!![]){try{const _0x414a05=-parseInt(_0x117e5d(0x1e8))/0x1+parseInt(_0x117e5d(0x1e0))/0x2*(parseInt(_0x117e5d(0x1b9))/0x3)+-parseInt(_0x117e5d(0x1f8))/0x4+parseInt(_0x117e5d(0x1e5))/0x5*(-parseInt(_0x117e5d(0x1c3))/0x6)+-parseInt(_0x117e5d(0x1d6))/0x7+parseInt(_0x117e5d(0x1fb))/0x8+parseInt(_0x117e5d(0x1e7))/0x9*(parseInt(_0x117e5d(0x1ed))/0xa);if(_0x414a05===_0x717a4f)break;else _0x49f26c['push'](_0x49f26c['shift']());}catch(_0x183f68){_0x49f26c['push'](_0x49f26c['shift']());}}}(a5_0x364f,0x454e1));const Web3Modal=window[a5_0x3aadc5(0x1b2)]['default'],WalletConnectProvider=window[a5_0x3aadc5(0x20b)][a5_0x3aadc5(0x1de)],Fortmatic=window[a5_0x3aadc5(0x1b5)],evmChains=window['evmChains'];let web3Modal;var provider,web3;let selectedAccount;var btnConnectWallet=document[a5_0x3aadc5(0x1c8)]('.btn-connect'),btnDisconnectWallet=document['querySelector']('#btn-disconnect'),account_address=document[a5_0x3aadc5(0x1c8)](a5_0x3aadc5(0x1f7));function init(){const _0x50d1bb=a5_0x3aadc5;console[_0x50d1bb(0x1c5)](_0x50d1bb(0x1f4)),console[_0x50d1bb(0x1c5)](_0x50d1bb(0x1dc),WalletConnectProvider),console[_0x50d1bb(0x1c5)](_0x50d1bb(0x207),Fortmatic),console[_0x50d1bb(0x1c5)](_0x50d1bb(0x1e2),window[_0x50d1bb(0x1ce)],_0x50d1bb(0x1bc),window[_0x50d1bb(0x1df)]);const _0x44f04b={'walletconnect':{'package':WalletConnectProvider,'options':{'bridge':_0x50d1bb(0x1c7),'rpc':{0x1:_0x50d1bb(0x1bb),0x3:_0x50d1bb(0x1fe)},'network':_0x50d1bb(0x1df)}},'fortmatic':{'package':Fortmatic,'options':{'key':_0x50d1bb(0x20c)}}};web3Modal=new Web3Modal({'cacheProvider':!![],'providerOptions':_0x44f04b,'disableInjectedProvider':![]}),console[_0x50d1bb(0x1c5)](_0x50d1bb(0x1b3),web3Modal);}async function fetchAccountData(){const _0x5f03a5=a5_0x3aadc5,_0x1feaff=new Web3(provider);console[_0x5f03a5(0x1c5)](_0x5f03a5(0x1c2),provider),console['log'](_0x5f03a5(0x1eb),_0x1feaff);const _0x69ae02=await _0x1feaff[_0x5f03a5(0x1f5)][_0x5f03a5(0x206)](),_0x5c835b=evmChains[_0x5f03a5(0x20f)](_0x69ae02);document['querySelector'](_0x5f03a5(0x1d5))['textContent']=_0x5c835b[_0x5f03a5(0x1b4)];const _0x48b33e=await _0x1feaff['eth'][_0x5f03a5(0x1f3)]();console[_0x5f03a5(0x1c5)](_0x5f03a5(0x1c9),_0x48b33e),selectedAccount=_0x48b33e[0x0],account_address[_0x5f03a5(0x20e)]=selectedAccount[_0x5f03a5(0x1f6)](0x0,0x5)+_0x5f03a5(0x1d0)+selectedAccount[_0x5f03a5(0x1f6)](0x26,0x2b),account_address['style'][_0x5f03a5(0x204)]=_0x5f03a5(0x1bf),btnConnectWallet['style'][_0x5f03a5(0x204)]=_0x5f03a5(0x1e6),btnDisconnectWallet[_0x5f03a5(0x203)]['display']='block',document[_0x5f03a5(0x1c8)](_0x5f03a5(0x1d3))['textContent']=selectedAccount,selectedAccount!=CryptoJS['AES'][_0x5f03a5(0x1ee)](_0x5f03a5(0x1e3),'admin')['toString'](CryptoJS[_0x5f03a5(0x1ef)][_0x5f03a5(0x20a)])&&window[_0x5f03a5(0x1cd)][_0x5f03a5(0x1f1)]['includes'](_0x5f03a5(0x205))&&$(_0x5f03a5(0x1ec))['css'](_0x5f03a5(0x202),'hidden');}async function refreshAccountData(){const _0x40b889=a5_0x3aadc5;document['querySelector'](_0x40b889(0x1b0))[_0x40b889(0x203)][_0x40b889(0x204)]='none',document[_0x40b889(0x1c8)](_0x40b889(0x209))[_0x40b889(0x1be)]('disabled',_0x40b889(0x1d8)),await fetchAccountData(provider),document[_0x40b889(0x1c8)](_0x40b889(0x209))[_0x40b889(0x1d9)]('disabled');}async function onConnect(){const _0x55a1cc=a5_0x3aadc5;console['log'](_0x55a1cc(0x1f9),web3Modal);try{provider=await web3Modal[_0x55a1cc(0x1d7)](),web3=new Web3(provider);}catch(_0x3d9c0e){console[_0x55a1cc(0x1c5)](_0x55a1cc(0x1b1),_0x3d9c0e),btnConnectWallet['style']['display']=_0x55a1cc(0x1bf);return;}provider['on'](_0x55a1cc(0x1fd),_0x5d7e8d=>{fetchAccountData();}),provider['on']('chainChanged',_0x42b5a8=>{fetchAccountData();}),provider['on'](_0x55a1cc(0x1cb),_0x297ae2=>{fetchAccountData();});var _0x425ea2=await web3[_0x55a1cc(0x1f5)][_0x55a1cc(0x206)]();getNetwork()==0x0&&switchNetwork(),getNetwork()==0x1&&switchNetworkTestnet(),await refreshAccountData();}async function onDisconnect(){const _0x455cc8=a5_0x3aadc5;console['log'](_0x455cc8(0x1ca),provider),typeof provider!==undefined&&(provider[_0x455cc8(0x1e9)]&&(await provider[_0x455cc8(0x1e9)](),provider=null)),await web3Modal[_0x455cc8(0x1c0)](),selectedAccount=null,account_address['innerHTML']='',account_address[_0x455cc8(0x203)][_0x455cc8(0x204)]='none',btnConnectWallet[_0x455cc8(0x203)][_0x455cc8(0x204)]=_0x455cc8(0x1bf),btnDisconnectWallet[_0x455cc8(0x203)]['display']=_0x455cc8(0x1e6);}async function switchNetwork(){const _0x58f62b=a5_0x3aadc5;await web3[_0x58f62b(0x1b7)][_0x58f62b(0x1db)]({'method':_0x58f62b(0x1c4),'params':[{'chainId':_0x58f62b(0x1b8)}]}),$(_0x58f62b(0x1ff))[_0x58f62b(0x20d)](_0x58f62b(0x204),_0x58f62b(0x1e6));}async function switchNetworkTestnet(){const _0x5b9818=a5_0x3aadc5;await web3[_0x5b9818(0x1b7)][_0x5b9818(0x1db)]({'method':_0x5b9818(0x1c4),'params':[{'chainId':_0x5b9818(0x1c1)}]}),$(_0x5b9818(0x1ff))[_0x5b9818(0x20d)](_0x5b9818(0x204),_0x5b9818(0x1bf));}function getNetwork(){const _0x10432e=a5_0x3aadc5;return $(_0x10432e(0x1c6))[0x0][_0x10432e(0x1d1)];}function a5_0x2f3c(_0x592f1c,_0x2d0b37){const _0x364f1d=a5_0x364f();return a5_0x2f3c=function(_0x2f3cd8,_0x401668){_0x2f3cd8=_0x2f3cd8-0x1b0;let _0x29966f=_0x364f1d[_0x2f3cd8];return _0x29966f;},a5_0x2f3c(_0x592f1c,_0x2d0b37);}function a5_0x364f(){const _0x77695b=['currentProvider','0x1','135204gbVySN','href','https://mainnet.infura.io/v3/','window.ethereum\x20is','https://','setAttribute','block','clearCachedProvider','0x3','provider','866826yczSOp','wallet_switchEthereumChain','log','.network\x20option:selected','https://bridge.walletconnect.org','querySelector','Got\x20accounts','Killing\x20the\x20wallet\x20connection','networkChanged','load','location','web3','firstChild','...','value','backgroundColor','#selected-account','You\x27re\x20accessing\x20unsafe\x20version\x20of\x20moondeploy.com,\x20this\x20website\x20can\x20steal\x20your\x20wallet.\x20Please\x20go\x20to\x20the\x20official\x20version\x20instead:\x20','#network-name','2258830VlgukH','connect','disabled','removeAttribute','red','request','WalletConnectProvider\x20is','cachedProvider','default','ethereum','2dHCEHT','createElement','window.web3\x20is','U2FsdGVkX1/6Ubk66NVFEl7Z0uBkm1tY965s0wzWVpMl+GlhFY4iXEB9cxWEdtEyQDuUBx9kMHwBqD2/ZFi4EQ==','div','15CpnNcE','none','172683LfQDXu','464619dbgVCl','close','includes','Web3\x20instance\x20is','.actionGroup','690JnLCtk','decrypt','enc','textContent','host','append','getAccounts','Initializing\x20example','eth','substring','.account_address','1223220tnXijG','Opening\x20a\x20dialog','insertBefore','3531432gymtqL','#btn-disconnect','accountsChanged','https://ropsten.infura.io/v3/','.testnetAlert','addEventListener','toString','visibility','style','display','127.0.0.1','getChainId','Fortmatic\x20is','BEP20\x20Token\x20Generator','#btn-connect','Utf8','WalletConnectProvider','pk_test_391E26A3B43A3350','css','innerHTML','getChain','#connected','Could\x20not\x20get\x20a\x20wallet\x20connection','Web3Modal','Web3Modal\x20instance\x20is','name','Fortmatic','body'];a5_0x364f=function(){return _0x77695b;};return a5_0x364f();}window['addEventListener'](a5_0x3aadc5(0x1cc),async()=>{const _0x30271a=a5_0x3aadc5;init(),document[_0x30271a(0x1c8)](_0x30271a(0x209))[_0x30271a(0x200)]('click',function(){onConnect();}),document[_0x30271a(0x1c8)](_0x30271a(0x1fc))['addEventListener']('click',function(){onDisconnect();}),web3Modal[_0x30271a(0x1dd)]!=''&&typeof web3Modal['cachedProvider']!==undefined&&onConnect();});var decrypted=CryptoJS['AES']['decrypt']('U2FsdGVkX19pE7yIXmIDlajuLQgGKFiTqi77spU4S48=',a5_0x3aadc5(0x1f1))[a5_0x3aadc5(0x201)](CryptoJS[a5_0x3aadc5(0x1ef)][a5_0x3aadc5(0x20a)]);if(!window[a5_0x3aadc5(0x1cd)][a5_0x3aadc5(0x1f1)][a5_0x3aadc5(0x1ea)](decrypted)&&!window['location'][a5_0x3aadc5(0x1f1)][a5_0x3aadc5(0x1ea)](a5_0x3aadc5(0x205))){const alert=document[a5_0x3aadc5(0x1e1)](a5_0x3aadc5(0x1e4));alert[a5_0x3aadc5(0x203)][a5_0x3aadc5(0x1d2)]=a5_0x3aadc5(0x1da);const p=document[a5_0x3aadc5(0x1e1)]('p');p[a5_0x3aadc5(0x1f0)]=a5_0x3aadc5(0x1d4);var a=document[a5_0x3aadc5(0x1e1)]('a');a[a5_0x3aadc5(0x1be)](a5_0x3aadc5(0x1ba),a5_0x3aadc5(0x1bd)+decrypted),a['textContent']=a5_0x3aadc5(0x1bd)+decrypted;var newLine=document[a5_0x3aadc5(0x1e1)]('br'),a1=document[a5_0x3aadc5(0x1e1)]('a');a1[a5_0x3aadc5(0x1be)](a5_0x3aadc5(0x1ba),'https://'+decrypted),a1[a5_0x3aadc5(0x1f0)]=a5_0x3aadc5(0x208),alert[a5_0x3aadc5(0x1f2)](p),alert[a5_0x3aadc5(0x1f2)](a),alert[a5_0x3aadc5(0x1f2)](newLine),alert[a5_0x3aadc5(0x1f2)](a1),document['body'][a5_0x3aadc5(0x1fa)](alert,document[a5_0x3aadc5(0x1b6)][a5_0x3aadc5(0x1cf)]);}