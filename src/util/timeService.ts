const timeService = {
  getDate(): string {
    return new Date().toDateString();
  },
  getHourAndMinute(possibleDate?: Date): string {
    const date = possibleDate? new Date(possibleDate) : new Date();

    return `${date.getHours()}:${this.formattedMinutes(date)}`
  },
  formattedMinutes(date: Date): string {
    if (date.getMinutes().toString().length === 1) {
      return `0${date.getMinutes()}`
    }

    return `${date.getMinutes()}`
  }
}

export default timeService;