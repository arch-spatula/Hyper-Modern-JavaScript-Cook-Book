// 프라미스 처리 결과가 담긴 배열을 기다립니다.
let results = await Promise.all([fetch(url1), fetch(url2)]);
