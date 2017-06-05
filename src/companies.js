export default class Companies {
  constructor () {
    this.companies = [{
      id: 1,
      name: 'Goophy',
      motto: 'I am a dog!'
    }, {
      id: 2,
      name: 'Mickey',
      motto: 'I am a Mouse!'
    }, {
      id: 3,
      name: 'Donald',
      motto: 'I am a Duck!'
    }]

    this.newId = 4
  }

  all () {
    return this.companies
  }

  get (id) {
    return this.companies.find((element) => {
      return element.id === parseInt(id)
    })
  }

  add (name, motto) {
    let newCompany = {
      id: this.newId,
      name: name,
      motto: motto
    }

    this.companies.push(newCompany)
    this.newId++

    return newCompany
  }
}
