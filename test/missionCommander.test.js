const MissionCommander = require('./../app/missionCommander');

describe("Unit Test for Mission Commander Class", () => {
  test("Caso de prueba 1", () => {
    const result = 1 + 2;
    expect(result).toBe(3);
  })
  test('1) Create a mission commander objet', () => {
    const myMissionCommander = new MissionCommander('Woopa');
    expect(myMissionCommander.name).toBe('Woopa');
  })
})
