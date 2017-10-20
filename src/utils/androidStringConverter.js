/**
 *   Convert from 'Android String XML' to 'plain JS object'
 */
export const convertToJsonFromAndroid = function(theObj) {
  /*   Input
  Sample   https://codebeautify.org/xmltojson  에서 변형하면 아래와 같은 포맷이 됨.
  {
  	"resources": {
  		"string": [
  			{
  				"_name": "app_name",
  				"__text": "MOIN"
  			},
  			{
  				"_name": "update",
  				"__text": "업데이트"
  			},
  			{
  				"_name": "update_is_necessary",
  				"__text": "현 업데이트는 필수입니다. 업데이트 후 사용해주세요."
  			},
  			{
  				"_name": "later",
  				"__text": "다음에 하기"
  			}
      ],
      "_xmlns:tools": "http://schemas.android.com/tools"
    }
  }
  */
  // const raw = require('./zh_string.json');

  const theList = theObj.resources.string;
  let rslt = {};
  const newList = theList.map(o => {
     rslt[`${o._name}`] = o.__text;
  });

  console.log(JSON.stringify(rslt, null, 2)); // 포맷에 맞게 출력.
  /*  Output
  {
    "app_name": "MOIN",
    "openexchangerate_key": "90d99a20c91f4845937c317710f603b2",
    "navigation_drawer_open": "Open navigation drawer",
    "navigation_drawer_close": "Close navigation drawer"
  }

  */
}
