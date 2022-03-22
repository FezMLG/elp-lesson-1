// 1. Napisz specyfikację (testy) dla klasy NokiaTexter.
//    Klasa przyjmuje w konstruktorze jeden argument (tekst)
// 2. Klasa ma jedną publiczną metodę instancji squeeze, zwracającą skrócony tekst:
//    a) Dla "zaraz wracam", metoda zwraca "ZARAZwracam".
//    b) Dla "Nie czekaj z kolacja.", metoda zwraca "NIEczekajZkolacja." (uwaga na białe znaki :))
//    c) Dla tekstu bez spacji, metoda zwraca ten sam tekst bez zmian (np. "ZrobZakupyIWyrzucSmieci",
//       metoda zwróci ten sam tekst).
//    d) Dla tekstu, który po skróceniu ma więcej niż 160 znaków, metoda wyrzuca wyjątek MessageTooLong.
// 3. Zaimplementuj klasę zgodnie ze specyfikacją :)

import { TOO_LONG } from "./consts";
import { NokiaTexter } from "./NokiaTexter";

describe(NokiaTexter.name, () => {
  it("should return 'ZARAZwracam' when 'zaraz wracam' is given", () => {
    //when
    const example = new NokiaTexter("zaraz wracam");
    //then
    expect(example.squeeze()).toBe("ZARAZwracam");
  });

  it("should return 'NIEczekajZkolacja.' when 'Nie czekaj z kolacja. ' is given", () => {
    //when
    const example = new NokiaTexter("Nie czekaj z kolacja. ");
    //then
    expect(example.squeeze()).toBe("NIEczekajZkolacja.");
  });

  it("should return 'ZrobZakupyIWyrzucSmieci' when 'ZrobZakupyIWyrzucSmieci' or 'ZrobZakupyIWyrzucSmieci ' is given", () => {
    //when
    let example = new NokiaTexter("ZrobZakupyIWyrzucSmieci");
    //then
    expect(example.squeeze()).toBe("ZrobZakupyIWyrzucSmieci");
    //when
    let example2 = new NokiaTexter("ZrobZakupyIWyrzucSmieci ");
    //then
    expect(example2.squeeze()).toBe("ZrobZakupyIWyrzucSmieci");
  });

  it("should return 'NIEczekajZkolacja.' when 'Nie  czekaj z kolacja. ' is given", () => {
    //when
    const example = new NokiaTexter("Nie  czekaj z kolacja. ");
    //then
    expect(example.squeeze()).toBe("NIEczekajZkolacja.");
  });

  it("should throw error 'MessageTooLong' if shortened string is longer than 160 chars", () => {
    //when
    const example = new NokiaTexter(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    //then
    expect(() => example.squeeze()).toThrowError(TOO_LONG);
  });
});
