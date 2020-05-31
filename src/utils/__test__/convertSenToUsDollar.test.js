import convertSenToUsDollar from "../convertSenToUsDollar";

describe("convert sen to us dollar", () => {
    it("test convert sen to us dollar", () => {
        const result = convertSenToUsDollar(4712.16);
        expect(result).toEqual("$1.00");
    });
});
