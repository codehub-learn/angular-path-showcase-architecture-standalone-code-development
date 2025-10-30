export class ExampleServiceWithRequiredAuthorization {
  constructor(isAuthorized: boolean) {
    if (isAuthorized) {
      console.error("run authorized logic")
    } else {
      console.error("run unauthorized logic")
    }
  }
}
