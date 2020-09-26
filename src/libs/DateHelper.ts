import moment from 'moment';


export class DateHelper {

  public static dateStringToDate = (dateString: string) => {
    return moment(dateString, "DD/MM/YYYY").toDate()
  }


}