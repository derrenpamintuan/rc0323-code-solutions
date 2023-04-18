/* exported student */
const student = {
  firstName: 'Derren',
  lastName: 'Pamintuan',
  subject: 'CSS',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName +
    ' and I am studying ' + this.subject + '.';
  }
};
