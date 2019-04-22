function connector(){
  graph.addVertex('0', {
    '1': weight(data.features[0].geometry["coordinates"], data.features[2].geometry["coordinates"]),
    '2': weight(data.features[0].geometry["coordinates"], data.features[3].geometry["coordinates"]),
    '3': weight(data.features[0].geometry["coordinates"], data.features[6].geometry["coordinates"])
  });
  graph.addVertex('1', {
    '68': weight(data.features[1].geometry["coordinates"], data.features[68].geometry["coordinates"])
  });
  graph.addVertex('2', {
    '3': weight(data.features[2].geometry["coordinates"], data.features[3].geometry["coordinates"]),
    '4': weight(data.features[2].geometry["coordinates"], data.features[4].geometry["coordinates"])
  });
  graph.addVertex('3', {
    '4': weight(data.features[3].geometry["coordinates"], data.features[4].geometry["coordinates"]),
    '31': weight(data.features[3].geometry["coordinates"], data.features[31].geometry["coordinates"])
  });
  graph.addVertex('4', {
    '5': weight(data.features[4].geometry["coordinates"], data.features[5].geometry["coordinates"])
  });
  graph.addVertex('5', {
    '6': weight(data.features[5].geometry["coordinates"], data.features[6].geometry["coordinates"]),
    '7': weight(data.features[5].geometry["coordinates"], data.features[7].geometry["coordinates"]),
    '11': weight(data.features[5].geometry["coordinates"], data.features[11].geometry["coordinates"])
  });
  graph.addVertex('6', {
    '7': weight(data.features[6].geometry["coordinates"], data.features[7].geometry["coordinates"]),
    '8': weight(data.features[6].geometry["coordinates"], data.features[8].geometry["coordinates"])
  });
  graph.addVertex('7', {
    '8': weight(data.features[7].geometry["coordinates"], data.features[8].geometry["coordinates"]),
    '9': weight(data.features[7].geometry["coordinates"], data.features[9].geometry["coordinates"])
  });
  graph.addVertex('8', {
    '9': weight(data.features[8].geometry["coordinates"], data.features[9].geometry["coordinates"]),
    '28': weight(data.features[8].geometry["coordinates"], data.features[28].geometry["coordinates"])
  });
  graph.addVertex('9', {
    '10': weight(data.features[9].geometry["coordinates"], data.features[10].geometry["coordinates"])
  });
  graph.addVertex('10', {
    '11': weight(data.features[10].geometry["coordinates"], data.features[11].geometry["coordinates"]),
    '17': weight(data.features[10].geometry["coordinates"], data.features[17].geometry["coordinates"])
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
  graph.addVertex('22', {
    '23': weight(data.features[22].geometry["coordinates"], data.features[23].geometry["coordinates"]),
    '24': weight(data.features[22].geometry["coordinates"], data.features[24].geometry["coordinates"])
  });
  graph.addVertex('23', {
    '24': weight(data.features[23].geometry["coordinates"], data.features[24].geometry["coordinates"])
  });
  graph.addVertex('24', {
    '32': weight(data.features[24].geometry["coordinates"], data.features[32].geometry["coordinates"]),
    '33': weight(data.features[24].geometry["coordinates"], data.features[33].geometry["coordinates"])
  });
  graph.addVertex('25', {
    '26': weight(data.features[25].geometry["coordinates"], data.features[25].geometry["coordinates"]),
    '32': weight(data.features[25].geometry["coordinates"], data.features[32].geometry["coordinates"])
  });
  graph.addVertex('26', {
    '31': weight(data.features[26].geometry["coordinates"], data.features[31].geometry["coordinates"]),
    '24': weight(data.features[22].geometry["coordinates"], data.features[24].geometry["coordinates"])
  });
  graph.addVertex('27', {
    '31': weight(data.features[27].geometry["coordinates"], data.features[31].geometry["coordinates"]),
    '30': weight(data.features[27].geometry["coordinates"], data.features[30].geometry["coordinates"]),
    '28': weight(data.features[27].geometry["coordinates"], data.features[28].geometry["coordinates"])
  });
  graph.addVertex('28', {
    '29': weight(data.features[28].geometry["coordinates"], data.features[29].geometry["coordinates"]),
    '30': weight(data.features[28].geometry["coordinates"], data.features[30].geometry["coordinates"]),
    '31': weight(data.features[28].geometry["coordinates"], data.features[31].geometry["coordinates"])
  });
  graph.addVertex('29', {
    '30': weight(data.features[29].geometry["coordinates"], data.features[30].geometry["coordinates"])
  });
  graph.addVertex('30', {
    '31': weight(data.features[30].geometry["coordinates"], data.features[31].geometry["coordinates"])
  });
  graph.addVertex('31', {
    '32': weight(data.features[31].geometry["coordinates"], data.features[32].geometry["coordinates"])
  });
  graph.addVertex('32', {
    '70': weight(data.features[32].geometry["coordinates"], data.features[70].geometry["coordinates"]),
    '62': weight(data.features[32].geometry["coordinates"], data.features[62].geometry["coordinates"])
  });
  graph.addVertex('33', {
    '34': weight(data.features[33].geometry["coordinates"], data.features[34].geometry["coordinates"])
  });
  graph.addVertex('34', {
    '35': weight(data.features[34].geometry["coordinates"], data.features[35].geometry["coordinates"])
  });
  graph.addVertex('35', {
    '36': weight(data.features[35].geometry["coordinates"], data.features[36].geometry["coordinates"]),
    '58': weight(data.features[35].geometry["coordinates"], data.features[58].geometry["coordinates"])
  });
  graph.addVertex('36', {
    '37': weight(data.features[36].geometry["coordinates"], data.features[37].geometry["coordinates"]),
    '58': weight(data.features[36].geometry["coordinates"], data.features[58].geometry["coordinates"])
  });
  graph.addVertex('37', {
    '54': weight(data.features[37].geometry["coordinates"], data.features[54].geometry["coordinates"]),
    '53': weight(data.features[37].geometry["coordinates"], data.features[53].geometry["coordinates"]),
    '38': weight(data.features[37].geometry["coordinates"], data.features[38].geometry["coordinates"])
  });
  graph.addVertex('38', {
    '39': weight(data.features[38].geometry["coordinates"], data.features[39].geometry["coordinates"]),
    '40': weight(data.features[38].geometry["coordinates"], data.features[40].geometry["coordinates"])
  });
  graph.addVertex('39', {
    '40': weight(data.features[39].geometry["coordinates"], data.features[40].geometry["coordinates"]),
    '41': weight(data.features[39].geometry["coordinates"], data.features[41].geometry["coordinates"]),
    '42': weight(data.features[39].geometry["coordinates"], data.features[42].geometry["coordinates"])
  });
  graph.addVertex('40', {
    '41': weight(data.features[40].geometry["coordinates"], data.features[41].geometry["coordinates"])
  });
  graph.addVertex('41', {
    '43': weight(data.features[41].geometry["coordinates"], data.features[42].geometry["coordinates"]),
    '42': weight(data.features[41].geometry["coordinates"], data.features[42].geometry["coordinates"])
  });
  graph.addVertex('42', {
    '51': weight(data.features[42].geometry["coordinates"], data.features[51].geometry["coordinates"])
  });
  graph.addVertex('43', {
    '44': weight(data.features[43].geometry["coordinates"], data.features[44].geometry["coordinates"]),
    '45': weight(data.features[43].geometry["coordinates"], data.features[45].geometry["coordinates"]),
    '48': weight(data.features[43].geometry["coordinates"], data.features[48].geometry["coordinates"]),
    '51': weight(data.features[43].geometry["coordinates"], data.features[51].geometry["coordinates"])
  });
  graph.addVertex('44', {
    '45': weight(data.features[44].geometry["coordinates"], data.features[45].geometry["coordinates"]),
    '47': weight(data.features[44].geometry["coordinates"], data.features[47].geometry["coordinates"])
  });
  graph.addVertex('45', {
    '46': weight(data.features[45].geometry["coordinates"], data.features[46].geometry["coordinates"]),
    '47': weight(data.features[45].geometry["coordinates"], data.features[47].geometry["coordinates"])
  });
  graph.addVertex('46', {
    '47': weight(data.features[46].geometry["coordinates"], data.features[47].geometry["coordinates"]),
    '48': weight(data.features[46].geometry["coordinates"], data.features[48].geometry["coordinates"])
  });
  graph.addVertex('47', {
    '48': weight(data.features[47].geometry["coordinates"], data.features[48].geometry["coordinates"])
  });
  graph.addVertex('48', {
    '49': weight(data.features[48].geometry["coordinates"], data.features[48].geometry["coordinates"])
  });
  graph.addVertex('49', {
    '50': weight(data.features[49].geometry["coordinates"], data.features[50].geometry["coordinates"]),
    '69': weight(data.features[49].geometry["coordinates"], data.features[69].geometry["coordinates"])
  });
  graph.addVertex('50', {});
  graph.addVertex('51', {
    '52': weight(data.features[51].geometry["coordinates"], data.features[52].geometry["coordinates"]),
    '54': weight(data.features[51].geometry["coordinates"], data.features[54].geometry["coordinates"])
  });
  graph.addVertex('52', {
    '54': weight(data.features[52].geometry["coordinates"], data.features[54].geometry["coordinates"]),
    '55': weight(data.features[52].geometry["coordinates"], data.features[55].geometry["coordinates"])
  });
  graph.addVertex('53', {
    '54': weight(data.features[53].geometry["coordinates"], data.features[54].geometry["coordinates"]),
    '58': weight(data.features[53].geometry["coordinates"], data.features[58].geometry["coordinates"])
  });
  graph.addVertex('54', {});
  graph.addVertex('55', {
    '56': weight(data.features[55].geometry["coordinates"], data.features[57].geometry["coordinates"]),
    '57': weight(data.features[55].geometry["coordinates"], data.features[57].geometry["coordinates"]),
    '58': weight(data.features[55].geometry["coordinates"], data.features[58].geometry["coordinates"])
  });
  graph.addVertex('56', {
    '57': weight(data.features[56].geometry["coordinates"], data.features[57].geometry["coordinates"]),
    '58': weight(data.features[56].geometry["coordinates"], data.features[58].geometry["coordinates"])
  });
  graph.addVertex('57', {
    '58': weight(data.features[57].geometry["coordinates"], data.features[58].geometry["coordinates"])
  });
  graph.addVertex('58', {
    '59': weight(data.features[58].geometry["coordinates"], data.features[59].geometry["coordinates"])
  });
  graph.addVertex('59', {
    '30': weight(data.features[28].geometry["coordinates"], data.features[30].geometry["coordinates"])
  });
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
