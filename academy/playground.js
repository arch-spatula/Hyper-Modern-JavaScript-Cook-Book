var obj = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc = () => {
      console.log(this); // { outer: [Function: outer] }
    };
    innerFunc();
  },
};
obj.outer();
