import {injectGlobal} from 'styled-components';
injectGlobal `
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1538697662234'); /* IE9*/
    src: url('./iconfont.eot?t=1538697662234#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXIAAsAAAAACDAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8hEhuY21hcAAAAYAAAABeAAABnLN+GuNnbHlmAAAB4AAAAeIAAAH0/sG+ZWhlYWQAAAPEAAAALwAAADYTe9lyaGhlYQAAA/QAAAAeAAAAJAiBBNtobXR4AAAEFAAAABAAAAAQEVYAAGxvY2EAAAQkAAAACgAAAAoBRACUbWF4cAAABDAAAAAfAAAAIAEWAE1uYW1lAAAEUAAAAUUAAAJtPlT+fXBvc3QAAAWYAAAALQAAAD6eXD1yeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkCWOcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByesT9TY27438AQw9zA0A4UZgTJAQD8qwxteJztkLENgDAMBM9JgAjRZIlUlIiBqJg8awTHpmAI3jrLflkuHpiAqOxKArkRhi51xfzIan7i1D1rBWhLK632/p1MYhdZp+AfZObXZv14tzhScyzL4phfHeQB5gwSIgAAeJwd0L9vEnEYx/HnueO+3wot0N5xVyjlgC93BwYLcscdpciPao3R6GJjHIylJnUAk8boUBOjHRx0cDHhL1ATt7I4W02cWzt18G+QUUnk6hef9fMeXnlgBuDsWeC9uA/nQAYF4pACHRjkANDy3IqOqkINzXOdEprZCGIVNbRiNlpoadTyAvOjl4otD2TZ/zHsStKAREh30hA+jCb3vh0Ie8PJG3qcPtLRH+0vLAx4unuwxZsBId2/b38JH3n3czjtXseP0sc68Atw05l4KAJQiHBJCSDDrAxlaMuiaTFCRcm1K8vIqoywrFl1WuiwLNXCGFNUu+JeQuHw4TX/dGMHIw+u9CUiSLSHp+XmkxpmOite7367XtrKL6cTRvnkRAS/gK2oyWT/q5R8+r3klgt3wrM3jLtSMh5LVowUNwnc9EX8LLYhD20Aw7aa6LmmtYKWybKEhpESVUuhpmqqzSf+Nw6pOjgdppHrNbGFnP0/IuIn/JMrCOLFUqG/pi7WHxWdy6GQmlJWWeemqrk7xd/SXFRJ+GP98UbnxfaSTo1MvxOJRtfrzi1FI3PjC73a1VeVYm1GNHL53U5jzzEa6vlgANOpcSCYUOZxu7U5G2K319bftVavBwVhaXHTrT//BzSLbJAAAHicY2BkYGAAYjYmx6p4fpuvDNwsDCBw/c6pfQj6fyXLYuYGIJeDgQkkCgAorguWAHicY2BkYGBu+N/AEMMaxgAELIsZGBlQAQsAW6MDZwAABAAAAAVWAAAEAAAABAAAAAAAAAAASgCUAPoAAHicY2BkYGBgYXBk4GAAASYg5gJCBob/YD4DAA/HAWQAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAhZGJkZmRhZGVgSkpk8kxkSstMS89JTErMy+dgQEAOsUFpwAAAA==') format('woff'),
    url('./iconfont.ttf?t=1538697662234') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1538697662234#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  `;