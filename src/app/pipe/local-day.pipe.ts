import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDay'
})
export class LocalDayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value)
	{
	    case "Monday": return "Понеділок";
	    case "Tuesday":return "Вівторок";
	    case "Wednesday":return "Середа";
	    case "Thursday":return "Четверг";
	    case "Friday": return "Пятниця";
	    case "Saturday":return "Субота";
	    case "Sunday":return "Неділя";
	}
  }

}
