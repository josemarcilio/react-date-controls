import { generateDates } from "../../../src/calendar/utils/generateDates"

describe("generateDates", () => {
  it("should generate correct dates", () => {
    const [year, month] = [2021, 1]
    const generatedDates = generateDates(new Date(year, month, 1))

    for (let day = 1; day < 29; day++) {
      expect(generatedDates[day - 1]).toEqual(new Date(year, month, day))
    }
  })
})
