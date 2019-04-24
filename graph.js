function connector(){
graph.addVertex('0', {
  '2': weight(data.features[0].geometry["coordinates"], data.features[2].geometry["coordinates"]),
  '1': weight(data.features[0].geometry["coordinates"], data.features[1].geometry["coordinates"])
});
graph.addVertex('1', {
  '47': weight(data.features[1].geometry["coordinates"], data.features[47].geometry["coordinates"]),
  '2': weight(data.features[1].geometry["coordinates"], data.features[2].geometry["coordinates"]),
  '0': weight(data.features[1].geometry["coordinates"], data.features[0].geometry["coordinates"])
});
graph.addVertex('2', {
  '1': weight(data.features[2].geometry["coordinates"], data.features[1].geometry["coordinates"]),
  '46': weight(data.features[2].geometry["coordinates"], data.features[46].geometry["coordinates"]),
  '23': weight(data.features[2].geometry["coordinates"], data.features[23].geometry["coordinates"]),
  '3': weight(data.features[2].geometry["coordinates"], data.features[3].geometry["coordinates"])
});
graph.addVertex('3', {
  '2': weight(data.features[3].geometry["coordinates"], data.features[2].geometry["coordinates"]),
  '22': weight(data.features[3].geometry["coordinates"], data.features[22].geometry["coordinates"]),
  '5': weight(data.features[3].geometry["coordinates"], data.features[5].geometry["coordinates"]),
  '4': weight(data.features[3].geometry["coordinates"], data.features[4].geometry["coordinates"])
});
graph.addVertex('4', {
  '3': weight(data.features[4].geometry["coordinates"], data.features[3].geometry["coordinates"]),
  '8': weight(data.features[4].geometry["coordinates"], data.features[8].geometry["coordinates"]),
  '5': weight(data.features[4].geometry["coordinates"], data.features[5].geometry["coordinates"])
});
graph.addVertex('5', {
  '3': weight(data.features[5].geometry["coordinates"], data.features[3].geometry["coordinates"]),
  '4': weight(data.features[5].geometry["coordinates"], data.features[4].geometry["coordinates"]),
  '6': weight(data.features[5].geometry["coordinates"], data.features[6].geometry["coordinates"])
});
graph.addVertex('6', {
  '5': weight(data.features[6].geometry["coordinates"], data.features[5].geometry["coordinates"]),
  '7': weight(data.features[6].geometry["coordinates"], data.features[7].geometry["coordinates"]),
  '21': weight(data.features[6].geometry["coordinates"], data.features[21].geometry["coordinates"])
});
graph.addVertex('7', {
  '6': weight(data.features[7].geometry["coordinates"], data.features[6].geometry["coordinates"]),
  '12': weight(data.features[7].geometry["coordinates"], data.features[12].geometry["coordinates"]),
  '11': weight(data.features[7].geometry["coordinates"], data.features[11].geometry["coordinates"]),
  '10': weight(data.features[7].geometry["coordinates"], data.features[10].geometry["coordinates"])
});
graph.addVertex('8', {
  '37': weight(data.features[8].geometry["coordinates"], data.features[37].geometry["coordinates"]),
  '4': weight(data.features[8].geometry["coordinates"], data.features[4].geometry["coordinates"]),
  '9': weight(data.features[8].geometry["coordinates"], data.features[9].geometry["coordinates"])
});
graph.addVertex('9', {
  '8': weight(data.features[9].geometry["coordinates"], data.features[8].geometry["coordinates"]),
  '10': weight(data.features[9].geometry["coordinates"], data.features[10].geometry["coordinates"])
});
graph.addVertex('10', {
  '7': weight(data.features[10].geometry["coordinates"], data.features[7].geometry["coordinates"]),
  '9': weight(data.features[10].geometry["coordinates"], data.features[9].geometry["coordinates"]),
  '11': weight(data.features[10].geometry["coordinates"], data.features[11].geometry["coordinates"])
});
graph.addVertex('11', {
  '10': weight(data.features[11].geometry["coordinates"], data.features[10].geometry["coordinates"]),
  '7': weight(data.features[11].geometry["coordinates"], data.features[7].geometry["coordinates"]),
  '12': weight(data.features[11].geometry["coordinates"], data.features[12].geometry["coordinates"])
});
graph.addVertex('12', {
  '7': weight(data.features[12].geometry["coordinates"], data.features[7].geometry["coordinates"]),
  '11': weight(data.features[12].geometry["coordinates"], data.features[11].geometry["coordinates"]),
  '13': weight(data.features[12].geometry["coordinates"], data.features[12].geometry["coordinates"])
});
graph.addVertex('13', {
  '18': weight(data.features[13].geometry["coordinates"], data.features[18].geometry["coordinates"]),
  '12': weight(data.features[13].geometry["coordinates"], data.features[12].geometry["coordinates"]),
  '14': weight(data.features[13].geometry["coordinates"], data.features[14].geometry["coordinates"])
});
graph.addVertex('14', {
  '13': weight(data.features[14].geometry["coordinates"], data.features[13].geometry["coordinates"]),
  '15': weight(data.features[14].geometry["coordinates"], data.features[15].geometry["coordinates"])
});
graph.addVertex('15', {
  '17': weight(data.features[15].geometry["coordinates"], data.features[17].geometry["coordinates"]),
  '16': weight(data.features[15].geometry["coordinates"], data.features[16].geometry["coordinates"]),
  '14': weight(data.features[15].geometry["coordinates"], data.features[14].geometry["coordinates"]),
  '18': weight(data.features[15].geometry["coordinates"], data.features[18].geometry["coordinates"])
});
graph.addVertex('16', {
  '15': weight(data.features[16].geometry["coordinates"], data.features[15].geometry["coordinates"]),
  '17': weight(data.features[16].geometry["coordinates"], data.features[17].geometry["coordinates"])
});
graph.addVertex('17', {
  '16': weight(data.features[17].geometry["coordinates"], data.features[16].geometry["coordinates"]),
  '15': weight(data.features[17].geometry["coordinates"], data.features[15].geometry["coordinates"])
});
graph.addVertex('18', {
  '13': weight(data.features[18].geometry["coordinates"], data.features[13].geometry["coordinates"]),
  '15': weight(data.features[18].geometry["coordinates"], data.features[15].geometry["coordinates"]),
  '25': weight(data.features[18].geometry["coordinates"], data.features[25].geometry["coordinates"]),
  '19': weight(data.features[18].geometry["coordinates"], data.features[19].geometry["coordinates"])
});
graph.addVertex('19', {
  '18': weight(data.features[19].geometry["coordinates"], data.features[18].geometry["coordinates"]),
  '24': weight(data.features[19].geometry["coordinates"], data.features[24].geometry["coordinates"]),
  '21': weight(data.features[19].geometry["coordinates"], data.features[21].geometry["coordinates"]),
  '22': weight(data.features[19].geometry["coordinates"], data.features[22].geometry["coordinates"]),
  '20': weight(data.features[19].geometry["coordinates"], data.features[20].geometry["coordinates"])
});
graph.addVertex('20', {
  '19': weight(data.features[20].geometry["coordinates"], data.features[19].geometry["coordinates"]),
  '24': weight(data.features[20].geometry["coordinates"], data.features[24].geometry["coordinates"]),
  '23': weight(data.features[20].geometry["coordinates"], data.features[23].geometry["coordinates"]),
  '22': weight(data.features[20].geometry["coordinates"], data.features[22].geometry["coordinates"])
});
graph.addVertex('21', {
  '6': weight(data.features[21].geometry["coordinates"], data.features[6].geometry["coordinates"]),
  '22': weight(data.features[21].geometry["coordinates"], data.features[22].geometry["coordinates"]),
  '19': weight(data.features[21].geometry["coordinates"], data.features[19].geometry["coordinates"])
});
graph.addVertex('22', {
  '3': weight(data.features[22].geometry["coordinates"], data.features[3].geometry["coordinates"]),
  '23': weight(data.features[22].geometry["coordinates"], data.features[23].geometry["coordinates"]),
  '20': weight(data.features[22].geometry["coordinates"], data.features[20].geometry["coordinates"]),
  '19': weight(data.features[22].geometry["coordinates"], data.features[19].geometry["coordinates"]),
  '21': weight(data.features[22].geometry["coordinates"], data.features[21].geometry["coordinates"])
});
graph.addVertex('23', {
  '2': weight(data.features[23].geometry["coordinates"], data.features[2].geometry["coordinates"]),
  '46': weight(data.features[23].geometry["coordinates"], data.features[46].geometry["coordinates"]),
  '43': weight(data.features[23].geometry["coordinates"], data.features[43].geometry["coordinates"]),
  '24': weight(data.features[23].geometry["coordinates"], data.features[24].geometry["coordinates"]),
  '20': weight(data.features[23].geometry["coordinates"], data.features[20].geometry["coordinates"]),
  '22': weight(data.features[23].geometry["coordinates"], data.features[22].geometry["coordinates"])
});
graph.addVertex('24', {
  '23': weight(data.features[24].geometry["coordinates"], data.features[23].geometry["coordinates"]),
  '20': weight(data.features[24].geometry["coordinates"], data.features[20].geometry["coordinates"]),
  '19': weight(data.features[24].geometry["coordinates"], data.features[19].geometry["coordinates"]),
  '25': weight(data.features[24].geometry["coordinates"], data.features[25].geometry["coordinates"]),
  '50': weight(data.features[24].geometry["coordinates"], data.features[50].geometry["coordinates"])
});
graph.addVertex('25', {
  '24': weight(data.features[25].geometry["coordinates"], data.features[24].geometry["coordinates"]),
  '18': weight(data.features[25].geometry["coordinates"], data.features[18].geometry["coordinates"]),
  '26': weight(data.features[25].geometry["coordinates"], data.features[26].geometry["coordinates"])
});
graph.addVertex('26', {
  '25': weight(data.features[26].geometry["coordinates"], data.features[25].geometry["coordinates"]),
  '50': weight(data.features[26].geometry["coordinates"], data.features[50].geometry["coordinates"]),
  '27': weight(data.features[26].geometry["coordinates"], data.features[27].geometry["coordinates"])
});
graph.addVertex('27', {});
graph.addVertex('28', {});
graph.addVertex('29', {});
graph.addVertex('30', {});
graph.addVertex('31', {});
graph.addVertex('32', {});
graph.addVertex('33', {});
graph.addVertex('34', {});
graph.addVertex('35', {});
graph.addVertex('36', {});
graph.addVertex('37', {});
graph.addVertex('38', {});
graph.addVertex('39', {});
graph.addVertex('40', {});
graph.addVertex('41', {});
graph.addVertex('42', {});
graph.addVertex('43', {});
graph.addVertex('44', {});
graph.addVertex('45', {});
graph.addVertex('46', {});
graph.addVertex('47', {});
graph.addVertex('48', {});
graph.addVertex('49', {});
graph.addVertex('50', {});
graph.addVertex('51', {});
  }
