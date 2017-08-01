import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherState'
})
export class WeatherStatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const name:string = value as string;
    switch (name.toLowerCase())
    {
        case "clear": return "Сонячно";
        case "few clouds": return "Невелика хмарність";
        case "scattered clouds": return "Розірвані хмари";
        case "broken clouds": return "Розбиті хмари";
        case "shower rain":  return "Сильний дощ";
        case "rain": return "Дощ";
        case "thunderstorm": return "Гроза";
        case "snow": return "Сніг";
        case "mist": return "Туман";
    }
  }

}
