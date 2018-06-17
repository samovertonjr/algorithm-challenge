function shapeArea(n) {
  var area = 1;

  for(var i = 1; i < n; i++) {
    area = area + 4 * i;
  }

  console.log(area);
  return area;
}

shapeArea(5);

