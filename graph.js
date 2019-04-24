function connector(){
    graph.addVertex('0', {
      '2': weight(data.features[0].geometry["coordinates"], data.features[2].geometry["coordinates"]),
      '1': weight(data.features[0].geometry["coordinates"], data.features[1].geometry["coordinates"])
    });
    graph.addVertex('1', {
      '2': weight(data.features[1].geometry["coordinates"], data.features[2].geometry["coordinates"]),
      '46': weight(data.features[1].geometry["coordinates"], data.features[46].geometry["coordinates"]),
      '23': weight(data.features[1].geometry["coordinates"], data.features[23].geometry["coordinates"]),
      '3': weight(data.features[1].geometry["coordinates"], data.features[3].geometry["coordinates"])
    });
    graph.addVertex('2', {
      '47': weight(data.features[2].geometry["coordinates"], data.features[47].geometry["coordinates"]),
      '1': weight(data.features[2].geometry["coordinates"], data.features[1].geometry["coordinates"]),
      '0': weight(data.features[2].geometry["coordinates"], data.features[0].geometry["coordinates"])
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
      '13': weight(data.features[12].geometry["coordinates"], data.features[13].geometry["coordinates"])
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
    graph.addVertex('27', {
      '50': weight(data.features[27].geometry["coordinates"], data.features[50].geometry["coordinates"]),
      '26': weight(data.features[27].geometry["coordinates"], data.features[26].geometry["coordinates"]),
      '28': weight(data.features[27].geometry["coordinates"], data.features[28].geometry["coordinates"])
    });
    graph.addVertex('28', {
      '27': weight(data.features[28].geometry["coordinates"], data.features[27].geometry["coordinates"]),
      '42': weight(data.features[28].geometry["coordinates"], data.features[42].geometry["coordinates"]),
      '29': weight(data.features[28].geometry["coordinates"], data.features[29].geometry["coordinates"])
    });
    graph.addVertex('29', {
      '28': weight(data.features[29].geometry["coordinates"], data.features[28].geometry["coordinates"]),
      '40': weight(data.features[29].geometry["coordinates"], data.features[40].geometry["coordinates"]),
      '30': weight(data.features[29].geometry["coordinates"], data.features[30].geometry["coordinates"])
    });
    graph.addVertex('30', {
      '29': weight(data.features[30].geometry["coordinates"], data.features[29].geometry["coordinates"]),
      '40': weight(data.features[30].geometry["coordinates"], data.features[40].geometry["coordinates"]),
      '31': weight(data.features[30].geometry["coordinates"], data.features[31].geometry["coordinates"])
    });
    graph.addVertex('31', {
      '30': weight(data.features[31].geometry["coordinates"], data.features[30].geometry["coordinates"]),
      '38': weight(data.features[31].geometry["coordinates"], data.features[38].geometry["coordinates"]),
      '32': weight(data.features[31].geometry["coordinates"], data.features[32].geometry["coordinates"])
    });
    graph.addVertex('32', {
      '33': weight(data.features[32].geometry["coordinates"], data.features[33].geometry["coordinates"]),
      '34': weight(data.features[32].geometry["coordinates"], data.features[34].geometry["coordinates"]),
      '31': weight(data.features[32].geometry["coordinates"], data.features[31].geometry["coordinates"])
    });
    graph.addVertex('33', {
      '35': weight(data.features[33].geometry["coordinates"], data.features[35].geometry["coordinates"]),
      '34': weight(data.features[33].geometry["coordinates"], data.features[34].geometry["coordinates"]),
      '32': weight(data.features[33].geometry["coordinates"], data.features[32].geometry["coordinates"])
    });
    graph.addVertex('34', {
      '35': weight(data.features[34].geometry["coordinates"], data.features[35].geometry["coordinates"]),
      '33': weight(data.features[34].geometry["coordinates"], data.features[33].geometry["coordinates"]),
      '32': weight(data.features[34].geometry["coordinates"], data.features[32].geometry["coordinates"]),
      '39': weight(data.features[34].geometry["coordinates"], data.features[39].geometry["coordinates"])
    });
    graph.addVertex('35', {
      '36': weight(data.features[35].geometry["coordinates"], data.features[36].geometry["coordinates"]),
      '34': weight(data.features[35].geometry["coordinates"], data.features[34].geometry["coordinates"]),
      '33': weight(data.features[35].geometry["coordinates"], data.features[33].geometry["coordinates"])
    });
    graph.addVertex('36', {
      '35': weight(data.features[36].geometry["coordinates"], data.features[35].geometry["coordinates"]),
      '49': weight(data.features[36].geometry["coordinates"], data.features[49].geometry["coordinates"]),
      '37': weight(data.features[36].geometry["coordinates"], data.features[37].geometry["coordinates"])
    });
    graph.addVertex('37', {
      '36': weight(data.features[37].geometry["coordinates"], data.features[36].geometry["coordinates"]),
      '47': weight(data.features[37].geometry["coordinates"], data.features[47].geometry["coordinates"]),
      '8': weight(data.features[37].geometry["coordinates"], data.features[8].geometry["coordinates"])
    });
    graph.addVertex('38', {
      '31': weight(data.features[38].geometry["coordinates"], data.features[31].geometry["coordinates"]),
      '51': weight(data.features[38].geometry["coordinates"], data.features[51].geometry["coordinates"])
    });
    graph.addVertex('39', {
      '49': weight(data.features[39].geometry["coordinates"], data.features[49].geometry["coordinates"]),
      '51': weight(data.features[39].geometry["coordinates"], data.features[51].geometry["coordinates"]),
      '42': weight(data.features[39].geometry["coordinates"], data.features[42].geometry["coordinates"]),
      '34': weight(data.features[39].geometry["coordinates"], data.features[34].geometry["coordinates"])
    });
    graph.addVertex('40', {
      '51': weight(data.features[40].geometry["coordinates"], data.features[51].geometry["coordinates"]),
      '30': weight(data.features[40].geometry["coordinates"], data.features[30].geometry["coordinates"]),
      '29': weight(data.features[40].geometry["coordinates"], data.features[29].geometry["coordinates"]),
      '42': weight(data.features[40].geometry["coordinates"], data.features[42].geometry["coordinates"])
    });
    graph.addVertex('41', {
      '42': weight(data.features[41].geometry["coordinates"], data.features[42].geometry["coordinates"]),
      '43': weight(data.features[41].geometry["coordinates"], data.features[43].geometry["coordinates"]),
      '49': weight(data.features[41].geometry["coordinates"], data.features[49].geometry["coordinates"]),
      '39': weight(data.features[41].geometry["coordinates"], data.features[39].geometry["coordinates"])
    });
    graph.addVertex('42', {
      '41': weight(data.features[42].geometry["coordinates"], data.features[41].geometry["coordinates"]),
      '50': weight(data.features[42].geometry["coordinates"], data.features[50].geometry["coordinates"]),
      '40': weight(data.features[42].geometry["coordinates"], data.features[40].geometry["coordinates"]),
      '28': weight(data.features[42].geometry["coordinates"], data.features[28].geometry["coordinates"])
    });
    graph.addVertex('43', {
      '45': weight(data.features[43].geometry["coordinates"], data.features[45].geometry["coordinates"]),
      '44': weight(data.features[43].geometry["coordinates"], data.features[44].geometry["coordinates"]),
      '50': weight(data.features[43].geometry["coordinates"], data.features[50].geometry["coordinates"]),
      '41': weight(data.features[43].geometry["coordinates"], data.features[41].geometry["coordinates"]),
      '23': weight(data.features[43].geometry["coordinates"], data.features[23].geometry["coordinates"])
    });
    graph.addVertex('44', {
      '43': weight(data.features[44].geometry["coordinates"], data.features[43].geometry["coordinates"]),
      '47': weight(data.features[44].geometry["coordinates"], data.features[47].geometry["coordinates"]),
      '48': weight(data.features[44].geometry["coordinates"], data.features[48].geometry["coordinates"]),
      '45': weight(data.features[44].geometry["coordinates"], data.features[45].geometry["coordinates"])
    });
    graph.addVertex('45', {
      '46': weight(data.features[45].geometry["coordinates"], data.features[46].geometry["coordinates"]),
      '47': weight(data.features[45].geometry["coordinates"], data.features[47].geometry["coordinates"]),
      '43': weight(data.features[45].geometry["coordinates"], data.features[43].geometry["coordinates"]),
      '44': weight(data.features[45].geometry["coordinates"], data.features[44].geometry["coordinates"])
    });
    graph.addVertex('46', {
      '2': weight(data.features[46].geometry["coordinates"], data.features[2].geometry["coordinates"]),
      '45': weight(data.features[46].geometry["coordinates"], data.features[45].geometry["coordinates"]),
      '23': weight(data.features[46].geometry["coordinates"], data.features[23].geometry["coordinates"])
    });
    graph.addVertex('47', {
      '37': weight(data.features[47].geometry["coordinates"], data.features[37].geometry["coordinates"]),
      '48': weight(data.features[47].geometry["coordinates"], data.features[48].geometry["coordinates"]),
      '44': weight(data.features[47].geometry["coordinates"], data.features[44].geometry["coordinates"]),
      '45': weight(data.features[47].geometry["coordinates"], data.features[45].geometry["coordinates"]),
      '1': weight(data.features[47].geometry["coordinates"], data.features[1].geometry["coordinates"])
    });
    graph.addVertex('48', {
      '44': weight(data.features[48].geometry["coordinates"], data.features[44].geometry["coordinates"]),
      '47': weight(data.features[48].geometry["coordinates"], data.features[47].geometry["coordinates"]),
      '49': weight(data.features[48].geometry["coordinates"], data.features[49].geometry["coordinates"])
    });
    graph.addVertex('49', {
      '48': weight(data.features[49].geometry["coordinates"], data.features[48].geometry["coordinates"]),
      '36': weight(data.features[49].geometry["coordinates"], data.features[36].geometry["coordinates"]),
      '41': weight(data.features[49].geometry["coordinates"], data.features[41].geometry["coordinates"]),
      '39': weight(data.features[49].geometry["coordinates"], data.features[39].geometry["coordinates"])
    });
    graph.addVertex('50', {
      '42': weight(data.features[50].geometry["coordinates"], data.features[42].geometry["coordinates"]),
      '27': weight(data.features[50].geometry["coordinates"], data.features[27].geometry["coordinates"]),
      '26': weight(data.features[50].geometry["coordinates"], data.features[26].geometry["coordinates"]),
      '43': weight(data.features[50].geometry["coordinates"], data.features[43].geometry["coordinates"]),
      '24': weight(data.features[50].geometry["coordinates"], data.features[24].geometry["coordinates"])
    });
    graph.addVertex('51', {
      '39': weight(data.features[51].geometry["coordinates"], data.features[39].geometry["coordinates"]),
      '38': weight(data.features[51].geometry["coordinates"], data.features[38].geometry["coordinates"]),
      '40': weight(data.features[51].geometry["coordinates"], data.features[40].geometry["coordinates"])
    });
}

function connector2(){
  graph.addVertex('0', {
    '12': weight(data.features[0].geometry["coordinates"], data.features[12].geometry["coordinates"]),
    '13': weight(data.features[0].geometry["coordinates"], data.features[13].geometry["coordinates"]),
    '11': weight(data.features[0].geometry["coordinates"], data.features[11].geometry["coordinates"])
  });
  graph.addVertex('1', {
    '9': weight(data.features[1].geometry["coordinates"], data.features[9].geometry["coordinates"]),
    '24': weight(data.features[1].geometry["coordinates"], data.features[24].geometry["coordinates"]),
    '25': weight(data.features[1].geometry["coordinates"], data.features[25].geometry["coordinates"]),
    '8': weight(data.features[1].geometry["coordinates"], data.features[8].geometry["coordinates"]),
    '27': weight(data.features[1].geometry["coordinates"], data.features[27].geometry["coordinates"])
  });
  graph.addVertex('2', {
    '3': weight(data.features[2].geometry["coordinates"], data.features[3].geometry["coordinates"]),
    '15': weight(data.features[2].geometry["coordinates"], data.features[15].geometry["coordinates"]),
    '10': weight(data.features[2].geometry["coordinates"], data.features[10].geometry["coordinates"]),
    '12': weight(data.features[2].geometry["coordinates"], data.features[12].geometry["coordinates"])
  });
  graph.addVertex('3', {
    '7': weight(data.features[3].geometry["coordinates"], data.features[7].geometry["coordinates"]),
    '4': weight(data.features[3].geometry["coordinates"], data.features[4].geometry["coordinates"]),
    '2': weight(data.features[3].geometry["coordinates"], data.features[2].geometry["coordinates"])
  });
  graph.addVertex('4', {
    '14': weight(data.features[4].geometry["coordinates"], data.features[14].geometry["coordinates"]),
    '3': weight(data.features[4].geometry["coordinates"], data.features[3].geometry["coordinates"]),
    '7': weight(data.features[4].geometry["coordinates"], data.features[7].geometry["coordinates"]),
    '6': weight(data.features[4].geometry["coordinates"], data.features[6].geometry["coordinates"]),
    '50': weight(data.features[4].geometry["coordinates"], data.features[50].geometry["coordinates"])
  });
  graph.addVertex('5', {
    '49': weight(data.features[5].geometry["coordinates"], data.features[49].geometry["coordinates"]),
    '6': weight(data.features[5].geometry["coordinates"], data.features[6].geometry["coordinates"]),
    '28': weight(data.features[5].geometry["coordinates"], data.features[28].geometry["coordinates"])
  });
  graph.addVertex('6', {
    '5': weight(data.features[6].geometry["coordinates"], data.features[5].geometry["coordinates"]),
    '4': weight(data.features[6].geometry["coordinates"], data.features[4].geometry["coordinates"]),
    '8': weight(data.features[6].geometry["coordinates"], data.features[8].geometry["coordinates"]),
    '7': weight(data.features[6].geometry["coordinates"], data.features[7].geometry["coordinates"])
  });
  graph.addVertex('7', {
    '8': weight(data.features[7].geometry["coordinates"], data.features[8].geometry["coordinates"]),
    '4': weight(data.features[7].geometry["coordinates"], data.features[4].geometry["coordinates"]),
    '3': weight(data.features[7].geometry["coordinates"], data.features[3].geometry["coordinates"]),
    '6': weight(data.features[7].geometry["coordinates"], data.features[6].geometry["coordinates"])
  });
  graph.addVertex('8', {
    '6': weight(data.features[8].geometry["coordinates"], data.features[6].geometry["coordinates"]),
    '7': weight(data.features[8].geometry["coordinates"], data.features[7].geometry["coordinates"]),
    '1': weight(data.features[8].geometry["coordinates"], data.features[1].geometry["coordinates"]),
    '10': weight(data.features[8].geometry["coordinates"], data.features[10].geometry["coordinates"]),
    '28': weight(data.features[8].geometry["coordinates"], data.features[28].geometry["coordinates"])
  });
  graph.addVertex('9', {
    '10': weight(data.features[9].geometry["coordinates"], data.features[10].geometry["coordinates"]),
    '1': weight(data.features[9].geometry["coordinates"], data.features[1].geometry["coordinates"]),
    '11': weight(data.features[9].geometry["coordinates"], data.features[11].geometry["coordinates"]),
    '23': weight(data.features[9].geometry["coordinates"], data.features[23].geometry["coordinates"])
  });
  graph.addVertex('10', {
    '9': weight(data.features[10].geometry["coordinates"], data.features[9].geometry["coordinates"]),
    '8': weight(data.features[10].geometry["coordinates"], data.features[8].geometry["coordinates"]),
    '2': weight(data.features[10].geometry["coordinates"], data.features[2].geometry["coordinates"]),
    '12': weight(data.features[10].geometry["coordinates"], data.features[12].geometry["coordinates"])
  });
  graph.addVertex('11', {
    '0': weight(data.features[11].geometry["coordinates"], data.features[0].geometry["coordinates"]),
    '21': weight(data.features[11].geometry["coordinates"], data.features[21].geometry["coordinates"]),
    '22': weight(data.features[11].geometry["coordinates"], data.features[22].geometry["coordinates"]),
    '9': weight(data.features[11].geometry["coordinates"], data.features[9].geometry["coordinates"])
  });
  graph.addVertex('12', {
    '2': weight(data.features[12].geometry["coordinates"], data.features[2].geometry["coordinates"]),
    '0': weight(data.features[12].geometry["coordinates"], data.features[0].geometry["coordinates"]),
    '9': weight(data.features[12].geometry["coordinates"], data.features[9].geometry["coordinates"]),
    '17': weight(data.features[12].geometry["coordinates"], data.features[17].geometry["coordinates"])
  });
  graph.addVertex('13', {
    '20': weight(data.features[13].geometry["coordinates"], data.features[20].geometry["coordinates"]),
    '0': weight(data.features[13].geometry["coordinates"], data.features[0].geometry["coordinates"])
  });
  graph.addVertex('14', {
    '15': weight(data.features[14].geometry["coordinates"], data.features[15].geometry["coordinates"]),
    '4': weight(data.features[14].geometry["coordinates"], data.features[4].geometry["coordinates"]),
    '43': weight(data.features[14].geometry["coordinates"], data.features[43].geometry["coordinates"])
  });
  graph.addVertex('15', {
    '16': weight(data.features[15].geometry["coordinates"], data.features[16].geometry["coordinates"]),
    '2': weight(data.features[15].geometry["coordinates"], data.features[2].geometry["coordinates"]),
    '14': weight(data.features[15].geometry["coordinates"], data.features[14].geometry["coordinates"])
  });
  graph.addVertex('16', {
    '15': weight(data.features[16].geometry["coordinates"], data.features[15].geometry["coordinates"]),
    '17': weight(data.features[16].geometry["coordinates"], data.features[17].geometry["coordinates"]),
    '18': weight(data.features[16].geometry["coordinates"], data.features[18].geometry["coordinates"])
  });
  graph.addVertex('17', {
    '16': weight(data.features[17].geometry["coordinates"], data.features[16].geometry["coordinates"]),
    '18': weight(data.features[17].geometry["coordinates"], data.features[18].geometry["coordinates"]),
    '19': weight(data.features[17].geometry["coordinates"], data.features[19].geometry["coordinates"]),
    '12': weight(data.features[17].geometry["coordinates"], data.features[12].geometry["coordinates"])
  });
  graph.addVertex('18', {
    '16': weight(data.features[18].geometry["coordinates"], data.features[16].geometry["coordinates"]),
    '17': weight(data.features[18].geometry["coordinates"], data.features[17].geometry["coordinates"]),
    '19': weight(data.features[18].geometry["coordinates"], data.features[19].geometry["coordinates"])
  });
  graph.addVertex('19', {
    '18': weight(data.features[19].geometry["coordinates"], data.features[18].geometry["coordinates"]),
    '17': weight(data.features[19].geometry["coordinates"], data.features[17].geometry["coordinates"]),
    '20': weight(data.features[19].geometry["coordinates"], data.features[20].geometry["coordinates"])
  });
  graph.addVertex('20', {
    '21': weight(data.features[20].geometry["coordinates"], data.features[21].geometry["coordinates"]),
    '13': weight(data.features[20].geometry["coordinates"], data.features[13].geometry["coordinates"]),
    '19': weight(data.features[20].geometry["coordinates"], data.features[19].geometry["coordinates"])
  });
  graph.addVertex('21', {
    '22': weight(data.features[21].geometry["coordinates"], data.features[22].geometry["coordinates"]),
    '11': weight(data.features[21].geometry["coordinates"], data.features[11].geometry["coordinates"]),
    '20': weight(data.features[21].geometry["coordinates"], data.features[20].geometry["coordinates"])
  });
  graph.addVertex('22', {
    '23': weight(data.features[22].geometry["coordinates"], data.features[23].geometry["coordinates"]),
    '11': weight(data.features[22].geometry["coordinates"], data.features[11].geometry["coordinates"]),
    '21': weight(data.features[22].geometry["coordinates"], data.features[21].geometry["coordinates"])
  });
  graph.addVertex('23', {
    '24': weight(data.features[23].geometry["coordinates"], data.features[24].geometry["coordinates"]),
    '9': weight(data.features[23].geometry["coordinates"], data.features[9].geometry["coordinates"]),
    '22': weight(data.features[23].geometry["coordinates"], data.features[22].geometry["coordinates"])
  });
  graph.addVertex('24', {
    '1': weight(data.features[24].geometry["coordinates"], data.features[1].geometry["coordinates"]),
    '25': weight(data.features[24].geometry["coordinates"], data.features[25].geometry["coordinates"]),
    '23': weight(data.features[24].geometry["coordinates"], data.features[23].geometry["coordinates"])
  });
  graph.addVertex('25', {
    '26': weight(data.features[25].geometry["coordinates"], data.features[26].geometry["coordinates"]),
    '1': weight(data.features[25].geometry["coordinates"], data.features[1].geometry["coordinates"]),
    '24': weight(data.features[25].geometry["coordinates"], data.features[24].geometry["coordinates"])
  });
  graph.addVertex('26', {
    '27': weight(data.features[26].geometry["coordinates"], data.features[27].geometry["coordinates"]),
    '33': weight(data.features[26].geometry["coordinates"], data.features[33].geometry["coordinates"]),
    '25': weight(data.features[26].geometry["coordinates"], data.features[25].geometry["coordinates"])
  });
  graph.addVertex('27', {
    '28': weight(data.features[27].geometry["coordinates"], data.features[28].geometry["coordinates"]),
    '31': weight(data.features[27].geometry["coordinates"], data.features[31].geometry["coordinates"]),
    '32': weight(data.features[27].geometry["coordinates"], data.features[32].geometry["coordinates"]),
    '25': weight(data.features[27].geometry["coordinates"], data.features[26].geometry["coordinates"]),
    '1': weight(data.features[27].geometry["coordinates"], data.features[1].geometry["coordinates"])
  });
  graph.addVertex('28', {
    '49': weight(data.features[28].geometry["coordinates"], data.features[49].geometry["coordinates"]),
    '5': weight(data.features[28].geometry["coordinates"], data.features[5].geometry["coordinates"]),
    '8': weight(data.features[28].geometry["coordinates"], data.features[8].geometry["coordinates"]),
    '27': weight(data.features[28].geometry["coordinates"], data.features[27].geometry["coordinates"]),
    '31': weight(data.features[28].geometry["coordinates"], data.features[31].geometry["coordinates"]),
    '29': weight(data.features[28].geometry["coordinates"], data.features[29].geometry["coordinates"])
  });
  graph.addVertex('29', {
    '48': weight(data.features[29].geometry["coordinates"], data.features[48].geometry["coordinates"]),
    '28': weight(data.features[29].geometry["coordinates"], data.features[28].geometry["coordinates"]),
    '31': weight(data.features[29].geometry["coordinates"], data.features[31].geometry["coordinates"]),
    '32': weight(data.features[29].geometry["coordinates"], data.features[32].geometry["coordinates"]),
    '30': weight(data.features[29].geometry["coordinates"], data.features[30].geometry["coordinates"])
  });
  graph.addVertex('30', {
    '45': weight(data.features[30].geometry["coordinates"], data.features[45].geometry["coordinates"]),
    '29': weight(data.features[30].geometry["coordinates"], data.features[29].geometry["coordinates"]),
    '32': weight(data.features[30].geometry["coordinates"], data.features[32].geometry["coordinates"])
  });
  graph.addVertex('31', {
    '32': weight(data.features[31].geometry["coordinates"], data.features[32].geometry["coordinates"]),
    '27': weight(data.features[31].geometry["coordinates"], data.features[27].geometry["coordinates"]),
    '28': weight(data.features[31].geometry["coordinates"], data.features[28].geometry["coordinates"]),
    '29': weight(data.features[31].geometry["coordinates"], data.features[29].geometry["coordinates"])
  });
  graph.addVertex('32', {
    '33': weight(data.features[32].geometry["coordinates"], data.features[33].geometry["coordinates"]),
    '27': weight(data.features[32].geometry["coordinates"], data.features[27].geometry["coordinates"]),
    '30': weight(data.features[32].geometry["coordinates"], data.features[30].geometry["coordinates"]),
    '29': weight(data.features[32].geometry["coordinates"], data.features[29].geometry["coordinates"]),
    '31': weight(data.features[32].geometry["coordinates"], data.features[31].geometry["coordinates"])
  });
  graph.addVertex('33', {
    '38': weight(data.features[33].geometry["coordinates"], data.features[38].geometry["coordinates"]),
    '36': weight(data.features[33].geometry["coordinates"], data.features[36].geometry["coordinates"]),
    '26': weight(data.features[33].geometry["coordinates"], data.features[26].geometry["coordinates"]),
    '32': weight(data.features[33].geometry["coordinates"], data.features[32].geometry["coordinates"])
  });
  graph.addVertex('34', {
    '35': weight(data.features[34].geometry["coordinates"], data.features[35].geometry["coordinates"]),
    '36': weight(data.features[34].geometry["coordinates"], data.features[36].geometry["coordinates"])
  });
  graph.addVertex('35', {
    '36': weight(data.features[35].geometry["coordinates"], data.features[36].geometry["coordinates"]),
    '34': weight(data.features[35].geometry["coordinates"], data.features[34].geometry["coordinates"])
  });
  graph.addVertex('36', {
    '34': weight(data.features[36].geometry["coordinates"], data.features[34].geometry["coordinates"]),
    '35': weight(data.features[36].geometry["coordinates"], data.features[35].geometry["coordinates"]),
    '37': weight(data.features[36].geometry["coordinates"], data.features[37].geometry["coordinates"]),
    '33': weight(data.features[36].geometry["coordinates"], data.features[33].geometry["coordinates"])
  });
  graph.addVertex('37', {
    '38': weight(data.features[37].geometry["coordinates"], data.features[38].geometry["coordinates"]),
    '36': weight(data.features[37].geometry["coordinates"], data.features[36].geometry["coordinates"])
  });
  graph.addVertex('38', {
    '33': weight(data.features[38].geometry["coordinates"], data.features[33].geometry["coordinates"]),
    '39': weight(data.features[38].geometry["coordinates"], data.features[39].geometry["coordinates"]),
    '37': weight(data.features[38].geometry["coordinates"], data.features[37].geometry["coordinates"])
  });
  graph.addVertex('39', {
    '44': weight(data.features[39].geometry["coordinates"], data.features[44].geometry["coordinates"]),
    '40': weight(data.features[39].geometry["coordinates"], data.features[40].geometry["coordinates"]),
    '38': weight(data.features[39].geometry["coordinates"], data.features[39].geometry["coordinates"])
  });
  graph.addVertex('40', {
    '41': weight(data.features[40].geometry["coordinates"], data.features[41].geometry["coordinates"]),
    '44': weight(data.features[40].geometry["coordinates"], data.features[4].geometry["coordinates"]),
    '39': weight(data.features[40].geometry["coordinates"], data.features[39].geometry["coordinates"])
  });
  graph.addVertex('41', {
    '44': weight(data.features[41].geometry["coordinates"], data.features[44].geometry["coordinates"]),
    '42': weight(data.features[41].geometry["coordinates"], data.features[42].geometry["coordinates"]),
    '40': weight(data.features[41].geometry["coordinates"], data.features[40].geometry["coordinates"])
  });
  graph.addVertex('42', {
    '43': weight(data.features[42].geometry["coordinates"], data.features[43].geometry["coordinates"]),
    '41': weight(data.features[42].geometry["coordinates"], data.features[41].geometry["coordinates"])
  });
  graph.addVertex('43', {
    '14': weight(data.features[43].geometry["coordinates"], data.features[14].geometry["coordinates"]),
    '47': weight(data.features[43].geometry["coordinates"], data.features[47].geometry["coordinates"]),
    '42': weight(data.features[43].geometry["coordinates"], data.features[42].geometry["coordinates"])
  });
  graph.addVertex('44', {
    '45': weight(data.features[44].geometry["coordinates"], data.features[45].geometry["coordinates"]),
    '39': weight(data.features[44].geometry["coordinates"], data.features[39].geometry["coordinates"]),
    '40': weight(data.features[44].geometry["coordinates"], data.features[40].geometry["coordinates"]),
    '41': weight(data.features[44].geometry["coordinates"], data.features[41].geometry["coordinates"])
  });
  graph.addVertex('45', {
    '46': weight(data.features[45].geometry["coordinates"], data.features[46].geometry["coordinates"]),
    '44': weight(data.features[45].geometry["coordinates"], data.features[44].geometry["coordinates"]),
    '30': weight(data.features[45].geometry["coordinates"], data.features[30].geometry["coordinates"])
  });
  graph.addVertex('46', {
    '48': weight(data.features[46].geometry["coordinates"], data.features[48].geometry["coordinates"]),
    '47': weight(data.features[46].geometry["coordinates"], data.features[47].geometry["coordinates"]),
    '45': weight(data.features[46].geometry["coordinates"], data.features[45].geometry["coordinates"])
  });
  graph.addVertex('47', {
    '48': weight(data.features[47].geometry["coordinates"], data.features[48].geometry["coordinates"]),
    '43': weight(data.features[47].geometry["coordinates"], data.features[43].geometry["coordinates"]),
    '46': weight(data.features[47].geometry["coordinates"], data.features[46].geometry["coordinates"])
  });
  graph.addVertex('48', {
    '49': weight(data.features[48].geometry["coordinates"], data.features[49].geometry["coordinates"]),
    '29': weight(data.features[48].geometry["coordinates"], data.features[29].geometry["coordinates"]),
    '46': weight(data.features[48].geometry["coordinates"], data.features[46].geometry["coordinates"]),
    '47': weight(data.features[48].geometry["coordinates"], data.features[47].geometry["coordinates"])
  });
  graph.addVertex('49', {
    '47': weight(data.features[49].geometry["coordinates"], data.features[47].geometry["coordinates"]),
    '50': weight(data.features[49].geometry["coordinates"], data.features[50].geometry["coordinates"]),
    '51': weight(data.features[49].geometry["coordinates"], data.features[51].geometry["coordinates"])
  });
  graph.addVertex('50', {
    '49': weight(data.features[50].geometry["coordinates"], data.features[49].geometry["coordinates"]),
    '5': weight(data.features[50].geometry["coordinates"], data.features[5].geometry["coordinates"]),
    '28': weight(data.features[50].geometry["coordinates"], data.features[28].geometry["coordinates"]),
    '48': weight(data.features[50].geometry["coordinates"], data.features[48].geometry["coordinates"])
  });
  graph.addVertex('51', {
    '49': weight(data.features[51].geometry["coordinates"], data.features[49].geometry["coordinates"]),
    '50': weight(data.features[51].geometry["coordinates"], data.features[50].geometry["coordinates"])
  });
}
