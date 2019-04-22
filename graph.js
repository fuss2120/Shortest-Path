function connector(){
  graph.addVertex('0', {
    '1': weight(data.features[0].geometry["coordinates"], data.features[1].geometry["coordinates"]),
    '2': weight(data.features[0].geometry["coordinates"], data.features[2].geometry["coordinates"]),
  });
graph.addVertex('1', {
  '49': weight(data.features[1].geometry["coordinates"], data.features[49].geometry["coordinates"]),
  '0': weight(data.features[1].geometry["coordinates"], data.features[1].geometry["coordinates"])
});
graph.addVertex('2', {
  '3': weight(data.features[2].geometry["coordinates"], data.features[3].geometry["coordinates"]),
  '4': weight(data.features[2].geometry["coordinates"], data.features[4].geometry["coordinates"]),
  '31': weight(data.features[2].geometry["coordinates"], data.features[31].geometry["coordinates"])
});
graph.addVertex('3', {
  '4': weight(data.features[3].geometry["coordinates"], data.features[4].geometry["coordinates"]),
  '2': weight(data.features[3].geometry["coordinates"], data.features[2].geometry["coordinates"]),
  '31': weight(data.features[3].geometry["coordinates"], data.features[31].geometry["coordinates"])
});
graph.addVertex('4', {
  '2': weight(data.features[4].geometry["coordinates"], data.features[2].geometry["coordinates"]),
  '3': weight(data.features[4].geometry["coordinates"], data.features[3].geometry["coordinates"]),
  '5': weight(data.features[4].geometry["coordinates"], data.features[5].geometry["coordinates"]),
  '6': weight(data.features[4].geometry["coordinates"], data.features[6].geometry["coordinates"])
});
graph.addVertex('5', {
  '4': weight(data.features[5].geometry["coordinates"], data.features[4].geometry["coordinates"]),
  '6': weight(data.features[5].geometry["coordinates"], data.features[6].geometry["coordinates"]),
  '11': weight(data.features[5].geometry["coordinates"], data.features[11].geometry["coordinates"])
});
graph.addVertex('6', {
  '5': weight(data.features[6].geometry["coordinates"], data.features[5].geometry["coordinates"]),
  '7': weight(data.features[6].geometry["coordinates"], data.features[7].geometry["coordinates"]),
  '9': weight(data.features[6].geometry["coordinates"], data.features[9].geometry["coordinates"]),
  '30': weight(data.features[6].geometry["coordinates"], data.features[30].geometry["coordinates"])
});
graph.addVertex('7', {
  '6': weight(data.features[7].geometry["coordinates"], data.features[6].geometry["coordinates"]),
  '9': weight(data.features[7].geometry["coordinates"], data.features[9].geometry["coordinates"]),
  '10': weight(data.features[7].geometry["coordinates"], data.features[10].geometry["coordinates"])
});
graph.addVertex('8', {
  '9': weight(data.features[8].geometry["coordinates"], data.features[9].geometry["coordinates"]),
  '29': weight(data.features[8].geometry["coordinates"], data.features[29].geometry["coordinates"]),
  '30': weight(data.features[8].geometry["coordinates"], data.features[30].geometry["coordinates"]),
  '32': weight(data.features[8].geometry["coordinates"], data.features[32].geometry["coordinates"])
});
graph.addVertex('9', {
  '6': weight(data.features[9].geometry["coordinates"], data.features[6].geometry["coordinates"]),
  '7': weight(data.features[8].geometry["coordinates"], data.features[7].geometry["coordinates"]),
  '8': weight(data.features[8].geometry["coordinates"], data.features[8].geometry["coordinates"]),
  '10': weight(data.features[8].geometry["coordinates"], data.features[10].geometry["coordinates"]),
  '28': weight(data.features[8].geometry["coordinates"], data.features[28].geometry["coordinates"])
});
graph.addVertex('10', {
  '9': weight(data.features[9].geometry["coordinates"], data.features[9].geometry["coordinates"]),
  '7': weight(data.features[8].geometry["coordinates"], data.features[7].geometry["coordinates"]),
  '12': weight(data.features[8].geometry["coordinates"], data.features[12].geometry["coordinates"]),
  '17': weight(data.features[8].geometry["coordinates"], data.features[17].geometry["coordinates"]),
  '15': weight(data.features[8].geometry["coordinates"], data.features[15].geometry["coordinates"])
});
graph.addVertex('11', {
  '49': weight(data.features[11].geometry["coordinates"], data.features[49].geometry["coordinates"]),
  '15': weight(data.features[11].geometry["coordinates"], data.features[15].geometry["coordinates"]),
  '12': weight(data.features[11].geometry["coordinates"], data.features[12].geometry["coordinates"])
});
graph.addVertex('12', {
  '13': weight(data.features[12].geometry["coordinates"], data.features[13].geometry["coordinates"]),
  '14': weight(data.features[12].geometry["coordinates"], data.features[14].geometry["coordinates"]),
  '50': weight(data.features[11].geometry["coordinates"], data.features[50].geometry["coordinates"])
});
graph.addVertex('13', {
  '14': weight(data.features[13].geometry["coordinates"], data.features[14].geometry["coordinates"])
});
graph.addVertex('14', {
  '15': weight(data.features[14].geometry["coordinates"], data.features[15].geometry["coordinates"])
});
graph.addVertex('15', {
  '16': weight(data.features[15].geometry["coordinates"], data.features[16].geometry["coordinates"])
});
graph.addVertex('16', {
  '17': weight(data.features[16].geometry["coordinates"], data.features[17].geometry["coordinates"])
});
graph.addVertex('17', {
  '50': weight(data.features[17].geometry["coordinates"], data.features[50].geometry["coordinates"])
});
graph.addVertex('18', {
  '19': weight(data.features[18].geometry["coordinates"], data.features[19].geometry["coordinates"]),
  '25': weight(data.features[18].geometry["coordinates"], data.features[25].geometry["coordinates"])
});
graph.addVertex('19', {
  '20': weight(data.features[19].geometry["coordinates"], data.features[20].geometry["coordinates"]),
  '25': weight(data.features[19].geometry["coordinates"], data.features[25].geometry["coordinates"])
});
graph.addVertex('20', {
  '21': weight(data.features[20].geometry["coordinates"], data.features[21].geometry["coordinates"]),
  '24': weight(data.features[20].geometry["coordinates"], data.features[24].geometry["coordinates"])
});
graph.addVertex('21', {
  '22': weight(data.features[21].geometry["coordinates"], data.features[22].geometry["coordinates"]),
  '24': weight(data.features[21].geometry["coordinates"], data.features[24].geometry["coordinates"]),
  '23': weight(data.features[21].geometry["coordinates"], data.features[23].geometry["coordinates"])
});
graph.addVertex('22', {});
graph.addVertex('23', {});
graph.addVertex('24', {});
graph.addVertex('25', {});
graph.addVertex('26', {});
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
graph.addVertex('52', {});
graph.addVertex('53', {});
graph.addVertex('54', {});
graph.addVertex('55', {});
graph.addVertex('56', {});
graph.addVertex('57', {});
graph.addVertex('58', {});
graph.addVertex('59', {});
graph.addVertex('60', {});
graph.addVertex('61', {});
graph.addVertex('62', {});
graph.addVertex('63', {});
graph.addVertex('64', {});
graph.addVertex('65', {});
graph.addVertex('66', {});
graph.addVertex('67', {});
graph.addVertex('68', {});
graph.addVertex('69', {});
graph.addVertex('70', {});
graph.addVertex('71', {});

  }

